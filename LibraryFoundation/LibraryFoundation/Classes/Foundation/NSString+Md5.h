//
//  NSString+Md5.h
//  SmartTravel
//
//  Created by zgy on 2019/4/9.
//  Copyright © 2019 smart. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSString (Md5)

- (NSString *)getFileMD5WithPath;

@end

NS_ASSUME_NONNULL_END
