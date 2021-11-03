//
//  STURLProtocol.h
//  LibraryHybridWebView
//
//  Created by zgy on 2021/9/16.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface STURLProtocol : NSURLProtocol

+ (BOOL)canInitWithRequest:(NSURLRequest *)request;

+ (void)cs_registerScheme:(NSString*)scheme;


@end

NS_ASSUME_NONNULL_END
