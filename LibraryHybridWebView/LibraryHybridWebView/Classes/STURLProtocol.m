//
//  STURLProtocol.m
//  LibraryHybridWebView
//
//  Created by zgy on 2021/9/16.
//

#import "STURLProtocol.h"
#import <WebKit/WebKit.h>
static NSString* const KSTURLProtocolKey = @"KCTHybridNSURLProtocol";
@implementation STURLProtocol
+ (BOOL)canInitWithRequest:(NSURLRequest *)request {
    
    if ([request.URL.absoluteString hasPrefix:@"cs://"] && ![NSURLProtocol propertyForKey:KSTURLProtocolKey inRequest:request]) {
        return YES;
    }
    if ([request.URL.absoluteString hasPrefix:@"https://"]) {
        return YES;
    }
    return NO;
    
}

+ (NSURLRequest *)canonicalRequestForRequest:(NSURLRequest *)request {
    return request;
}

- (void)startLoading {
    NSMutableURLRequest *request = [[self request] mutableCopy];
    [NSURLProtocol setProperty:@YES forKey:KSTURLProtocolKey inRequest:request];
  
    NSString *path=  [[NSBundle mainBundle] pathForResource:@"BottomTabBar_BorrowBookSelected" ofType:@"png"];//这里是获取本地资源路径 如 ：png,js 等
    NSData *data = UIImagePNGRepresentation([UIImage imageNamed:@"BottomTabBar_BorrowBookSelected"]);
    
    NSURLResponse *res = [[NSURLResponse alloc] initWithURL:self.request.URL MIMEType:[self.request.allHTTPHeaderFields valueForKey:@"accept"] expectedContentLength:-1 textEncodingName:nil];
    [self.client URLProtocol:self didReceiveResponse:res cacheStoragePolicy:NSURLCacheStorageAllowedInMemoryOnly];
    [self.client URLProtocol:self didLoadData:data];
    [self.client URLProtocolDidFinishLoading:self];
    
}

+ (BOOL)requestIsCacheEquivalent:(NSURLRequest *)a toRequest:(NSURLRequest *)b
{
    return [super requestIsCacheEquivalent:a toRequest:b];
}

- (void)stopLoading {
    NSLog(@"stopLoading");
}



+ (void)cs_registerScheme:(NSString *)scheme {
    Class cls = [[[[WKWebView alloc] init] valueForKey:@"browsingContextController"] class];
//    Class cls = NSClassFromString(@"WKBrowsingContextController");
    SEL sel = NSSelectorFromString(@"registerSchemeForCustomProtocol:");
    if ([(id)cls respondsToSelector:sel]) {
    // 放弃编辑器警告
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-performSelector-leaks"
        [(id)cls performSelector:sel withObject:scheme];
#pragma clang diagnostic pop
    }
}

@end
