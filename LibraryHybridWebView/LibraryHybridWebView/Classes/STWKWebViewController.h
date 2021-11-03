//
//  STWKWebViewController.h
//  SmartTravel
//
//  Created by panxinquan on 2019/3/11.
//  Copyright © 2019 smart. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface STWKWebViewController : UIViewController
@property (nonatomic,copy) NSString *url;
@property (nonatomic,strong) NSURL *localUrl;
@property (nonatomic,copy) NSString *localPath;


@end

NS_ASSUME_NONNULL_END
