//
//  STViewController.m
//  LibraryHybridWebView
//
//  Created by airfight on 06/20/2019.
//  Copyright (c) 2019 airfight. All rights reserved.
//

#import "STViewController.h"
#import "STWKWebViewController.h"
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
}

- (void)btnAction {
    STWKWebViewController *wkWebView = [[STWKWebViewController alloc] init];
    wkWebView.url = @"http://www.baidu.com";
    [self presentViewController:wkWebView animated:YES completion:nil];

}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
