//
//  NSUserDefaults+STExtension.h
//  LibraryFoundation
//
//  Created by panxinquan on 2019/6/18.
//  Copyright © 2019 easy. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSUserDefaults (STExtension)

/**
 *  根据Key，获取NSUserDefaults中的Bool值
 *
 *  @param key   查询对象的key
 */
+ (BOOL)boolValueForKey:(NSString *)key;

/**
 *  向NSUserDefaults中的添加Bool值+key
 *
 *  @param value 需要添加的对象
 *  @param key   添加对象的key
 */
+ (void)setBoolValue:(BOOL)value forKey:(NSString *)key;

- (void)setSafeObject:(id)anObject forKey:(id)aKey;

@end

NS_ASSUME_NONNULL_END
