//
//  STViewController.m
//  LibraryHybridWebView
//
//  Created by airfight on 06/20/2019.
//  Copyright (c) 2019 airfight. All rights reserved.
//

#import "STViewController.h"
#import "STWKWebViewController.h"
#import "STWKWebViewController.h"
#import "STRNUnZip.h"
#import "STRNFileManager.h"
@interface STViewController ()

@end

@implementation STViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    UIButton *btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    [btn setTitle:@"跳转h5" forState:(UIControlStateNormal)];
    [btn setFrame:CGRectMake(100, 100, 100, 100)];
    [btn setBackgroundColor:[UIColor redColor]];
    [btn addTarget:self action:@selector(btnAction) forControlEvents:(UIControlEventTouchUpInside)];
    [self.view addSubview:btn];
    
    UIButton *btnHybird = [UIButton buttonWithType:(UIButtonTypeCustom)];
    [btnHybird setTitle:@"跳转hybird" forState:(UIControlStateNormal)];
    [btnHybird setFrame:CGRectMake(100, 300, 100, 100)];
    [btnHybird setBackgroundColor:[UIColor redColor]];
    [btnHybird addTarget:self action:@selector(btnHybirdAction) forControlEvents:(UIControlEventTouchUpInside)];
    [self.view addSubview:btnHybird];
}

- (void)btnAction {
    STWKWebViewController *wkWebView = [[STWKWebViewController alloc] init];
    wkWebView.url = @"http://www.baidu.com";
    [self.navigationController pushViewController:wkWebView animated:YES];

}

- (void)btnHybirdAction {
    STWKWebViewController *wkWebView = [[STWKWebViewController alloc] init];
    wkWebView.tabBarItem.title = @"Hybrid";
    if ([STRNUnZip unzipFileAtPath:[[NSBundle mainBundle] pathForResource:@"h5" ofType:@"zip"] toDestination:[[STRNFileManager cachePath] stringByAppendingPathComponent:@"/hybrid"]]) {
        NSLog(@"%@",[[STRNFileManager cachePath] stringByAppendingPathComponent:@"/hybrid"]);
    }
    wkWebView.localUrl = [NSURL fileURLWithPath:[[STRNFileManager cachePath] stringByAppendingPathComponent:@"/hybrid/h5/index.html"]];
    [self.navigationController pushViewController:wkWebView animated:YES];

//    [self addNavViewControllerWithImageNa÷me:@"BottomTabBar_BorrowBook" withVc: wkWebView];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
