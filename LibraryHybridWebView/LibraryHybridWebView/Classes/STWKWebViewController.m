//
//  STWKWebViewController.m
//  SmartTravel
//
//  Created by panxinquan on 2019/3/11.
//  Copyright © 2019 smart. All rights reserved.
//

#import "STWKWebViewController.h"
#import "STCommunication.h"
#import "STURLProtocol.h"

#define kURLPrefix          @"easygs://hybird/bridge/"
//#define kURLString          @"http://10.32.33.2:5389/#/"
#define kURLString          @"http:www.baidu.com"
#define kDocumentDir    [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0]


@interface STWKWebViewController ()<WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler>

@property(nonatomic, strong) WKWebView *webView;
@property(nonatomic, strong) UIButton  *alertButton;
@end

@implementation STWKWebViewController

- (void)viewWillDisappear:(BOOL)animated
{
    [super viewWillDisappear:animated];
    [self.webView.configuration.userContentController removeScriptMessageHandlerForName:@"bridge"];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    NSSet *websiteDataTypes= [NSSet setWithArray:@[

                            WKWebsiteDataTypeDiskCache,
                            WKWebsiteDataTypeMemoryCache
                            ]];

    //清除所有的web信息
    //NSSet *websiteDataTypes = [WKWebsiteDataStore allWebsiteDataTypes];
    NSDate *dateFrom = [NSDate dateWithTimeIntervalSince1970:0];
    [[WKWebsiteDataStore defaultDataStore] removeDataOfTypes:websiteDataTypes modifiedSince:dateFrom completionHandler:^{

    }];
    self.view.backgroundColor = [UIColor whiteColor];
    [NSURLProtocol registerClass:[STURLProtocol class]];
    [STURLProtocol cs_registerScheme:@"cs"];
//    [STURLProtocol cs_registerScheme:@"https"];

    WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc] init];
    WKUserContentController *userController = [[WKUserContentController alloc] init];
    configuration.userContentController = userController;
    self.webView = [[WKWebView alloc] initWithFrame:self.view.bounds configuration:configuration];
    [userController addScriptMessageHandler:self name:@"bridge"];
    if (self.url) {
        [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:self.url]]];
    } else {
        if (@available(iOS 9.0, *)) {
            NSURL* doc = [NSURL fileURLWithPath:kDocumentDir relativeToURL:nil];

            [self.webView loadFileURL:self.localUrl allowingReadAccessToURL:doc];
//            NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:self.localUrl cachePolicy:NSURLRequestReloadIgnoringLocalCacheData timeoutInterval:15];
//            [self.webView loadRequest:request];
        } else {

        }

    }
    self.webView.navigationDelegate = self;
    self.webView.UIDelegate = self;
    //开了支持滑动返回
    self.webView.allowsBackForwardNavigationGestures = YES;
    [self.view addSubview:self.webView];
    
    [self.webView addObserver:self forKeyPath:@"title" options:(NSKeyValueObservingOptionNew) context:nil];
    
    [self.webView addObserver:self forKeyPath:@"URL" options:(NSKeyValueObservingOptionNew) context:nil];

    UIButton *btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    [btn addTarget:self action:@selector(back) forControlEvents:(UIControlEventTouchUpInside)];
    [btn setImage:[UIImage imageNamed:@"back"] forState:(UIControlStateNormal)];
    btn.frame = CGRectMake(0, 0, 30, 30);
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithCustomView:btn];
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSKeyValueChangeKey,id> *)change context:(void *)context {
    
    if ([keyPath isEqualToString:@"title"]) {
        self.title = _webView.title;
    } else if ([keyPath isEqualToString:@"URL"]) {
        NSLog(@"%@",_webView.URL);
    }
    
}

#pragma mark WKUIDelegate
//显示一个JS的Alert（与JS交互）
- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(void))completionHandler{
    
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示" message:message preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *action = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
        //此处的completionHandler()就是调用JS方法时，`evaluateJavaScript`方法中的completionHandler
        completionHandler();
    }];
    [alert addAction:action];
    [self presentViewController:alert animated:YES completion:nil];
    
}

// 显示一个确认框（JS的）
- (void)webView:(WKWebView *)webView runJavaScriptConfirmPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(BOOL result))completionHandler{
    
}

// 弹出一个输入框（与JS交互的）
- (void)webView:(WKWebView *)webView runJavaScriptTextInputPanelWithPrompt:(NSString *)prompt defaultText:(nullable NSString *)defaultText initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(NSString * _Nullable result))completionHandler{
    
}

#pragma mark WKScriptMessageHandler
//监听JS的回调
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message{
    NSLog(@"message.boby 就是JS 里传过来的参数。： %@", message.body);    
    if ([message.body hasPrefix:kURLPrefix]) {

        // 获取JS的方法名
        NSArray *requestParams = [message.body componentsSeparatedByString:@"?"];
        NSArray *urlParmes = [[requestParams firstObject] componentsSeparatedByString:@"/"];
        NSString *functionName = [urlParmes lastObject];
        
        // 获取JS传过来的参数
        NSArray *params = [[requestParams lastObject] componentsSeparatedByString:@"&"];
        NSMutableDictionary *paramsDic = [NSMutableDictionary dictionary];
        for (NSString *str in params) {
            NSArray *dicArray = [str componentsSeparatedByString:@"="];
            if (dicArray.count > 1) {
                NSString *decodeValue = [dicArray[1] stringByRemovingPercentEncoding];
                [paramsDic setObject:decodeValue forKey:dicArray[0]];
            }
        }
        
        NSString *jsonStr = [paramsDic objectForKey:@"params"];
        NSString *callbackId = [paramsDic objectForKey:@"callbackId"];
        [STCommunication callFunction:functionName jsonStr:jsonStr callBackId:callbackId callback:^(id result, NSString *callBackId) {
            NSString *jsStr = [NSString stringWithFormat:@"window.bridge.onCallback(%@,'%@')", callBackId,result];
            [self.webView evaluateJavaScript:jsStr completionHandler:^(id _Nullable item, NSError * _Nullable error) {
                NSLog(@"alert pxq");
            }];
        }];
    }
}

//- webviewnav
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {
    
    NSLog(@"absoluteString %@",navigationAction.request.URL.absoluteString);
    self.title = webView.title;

    decisionHandler(WKNavigationActionPolicyAllow);
}

- (void)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(null_unspecified WKNavigation *)navigation {
    NSLog(@"absoluteString ===");
}


- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation {
//    self.title = webView.title;
    
    
    [webView evaluateJavaScript:@"document.title" completionHandler:^(id _Nullable webTitle, NSError * _Nullable error) {
                NSLog(@"%@webTitle",webTitle);
        if (webTitle) {
            self.title = webTitle;
        }

    }];

}

- (void)back {
    if ([self.webView canGoBack]) {
        [self.webView goBack];
    } else {
        [self.navigationController popViewControllerAnimated:YES];
    }
}

- (void)dealloc {
    self.webView = nil;

}

@end
