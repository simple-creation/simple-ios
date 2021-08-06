//
//  NSDictionary+STExtension.m
//  LibraryFoundation
//
//  Created by panxinquan on 2019/6/17.
//  Copyright © 2019 easy. All rights reserved.
//

#import "NSDictionary+STExtension.h"

@implementation NSMutableDictionary (Safe)

- (void)setSafeObject:(id)anObject forKey:(id)aKey {
    if (aKey == nil) {
        NSAssert(false, @"aKey is NULL, crashed");
    }
    else if ([aKey isKindOfClass:[NSString class]]) {
        [self setValue:anObject forKey:aKey];
    }
    else if ([aKey conformsToProtocol:@protocol(NSCopying)]) {
        if (anObject == NULL) {
            [self removeSafeObjectForKey:aKey];
        }
        else {
            [self setObject:anObject forKey:aKey];
        }
    }
}

- (void)removeSafeObjectForKey:(id)aKey
{
    if (!aKey) {
        NSAssert(false, @"aKey is NULL, crashed");
    } else if ([aKey conformsToProtocol:@protocol(NSCopying)]) {
        [self removeObjectForKey:aKey];
    }
}

@end
