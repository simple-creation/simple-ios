//
//  STMainTabBarVc.m
//  LibraryHybridWebView_Example
//
//  Created by zgy on 2021/8/9.
//  Copyright © 2021 airfight. All rights reserved.
//

#import "STMainTabBarVc.h"
#import "STNavViewController.h"
#import "STWKWebViewController.h"
@interface STMainTabBarVc ()

@end

@implementation STMainTabBarVc

- (void)viewDidLoad {
    [super viewDidLoad];
    
    STWKWebViewController *wkWebView = [[STWKWebViewController alloc] init];
//    wkWebView.tabBarItem.title = @"H5";
//    wkWebView.url = @"http://www.baidu.com";
    NSURL *localUrl = [[NSBundle mainBundle] URLForResource:@"root" withExtension:@"html"];
    NSString *path = [[NSBundle mainBundle] pathForResource:@"root" ofType:@"html"];
    wkWebView.localUrl = localUrl;
    [self addNavViewControllerWithImageName:@"BottomTabBar_BorrowBook" withVc: wkWebView];
}

- (void)addNavViewControllerWithImageName: (NSString *)imageName withVc: (UIViewController *)vc {
    
    NSMutableDictionary *textAttrs = [NSMutableDictionary dictionary];
    textAttrs[NSForegroundColorAttributeName] = [UIColor blackColor];
    NSMutableDictionary *selectedTextAttrs = [NSMutableDictionary dictionary];
    selectedTextAttrs[NSForegroundColorAttributeName] = [UIColor redColor];

    [vc.tabBarItem setTitleTextAttributes:textAttrs forState:UIControlStateNormal];
    [vc.tabBarItem setTitleTextAttributes:selectedTextAttrs forState:UIControlStateSelected];
    vc.tabBarItem.image = [[UIImage imageNamed:imageName] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    vc.tabBarItem.selectedImage = [[UIImage imageNamed:[NSString stringWithFormat:@"%@Selected",imageName]] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    [self addChildViewController:[[STNavViewController alloc] initWithRootViewController:vc]];
    
}



/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
