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
#import "STRNUnZip.h"
#import "STRNFileManager.h"
#import "STViewController.h"
@interface STMainTabBarVc ()

@end

@implementation STMainTabBarVc

- (void)viewDidLoad {
    [super viewDidLoad];
    
    STWKWebViewController *wkWebView = [[STWKWebViewController alloc] init];
    wkWebView.tabBarItem.title = @"Hybrid";
    if ([STRNUnZip unzipFileAtPath:[[NSBundle mainBundle] pathForResource:@"h5" ofType:@"zip"] toDestination:[[STRNFileManager cachePath] stringByAppendingPathComponent:@"/hybrid"]]) {
        NSLog(@"%@",[[STRNFileManager cachePath] stringByAppendingPathComponent:@"/hybrid"]);
    }
    wkWebView.localUrl = [NSURL fileURLWithPath:[[STRNFileManager cachePath] stringByAppendingPathComponent:@"/hybrid/h5/index.html"]];
    [self addNavViewControllerWithImageName:@"BottomTabBar_BorrowBook" withVc: wkWebView];
    STViewController *stVc = [[STViewController alloc] init];
    stVc.tabBarItem.title = @"Native";
    [self addNavViewControllerWithImageName:@"BottomTabBar_BorrowBook" withVc: stVc];


    
    
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
