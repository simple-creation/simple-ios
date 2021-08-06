//
//  STLeftDragPanGestureRecognizer.h
//  CTBusiness
//
//  Created by zlp on 17/3/15.
//  Copyright © 2017年 easy. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface STLeftDragPanGestureRecognizer : UIPanGestureRecognizer

@property (readonly, nonatomic) UIEvent *event;
- (CGPoint)beganLocationInView:(UIView *)view;

@end
