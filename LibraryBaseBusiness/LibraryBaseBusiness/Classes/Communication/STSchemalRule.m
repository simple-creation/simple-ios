//
//  STSchemalRule.m
//  SmartTravel
//
//  Created by zgy on 2019/3/15.
//  Copyright © 2019 smart. All rights reserved.
//

#import "STSchemalRule.h"

@implementation STSchemalRule

+ (STSchemalType)schemalType:(NSString *)url {
    
    NSString *url_ = [url lowercaseString];

    if ([url_ hasPrefix:@"easygs://smarttravel/rn"]) {
        return STSchemalRN;
    } else if ([url_ hasPrefix:@"easygs://smarttravel/h5"] || [url_ hasPrefix:@"http"] || [url_ hasPrefix:@"https"]) {
        return STSchemalH5;
    } else if ([url_ hasPrefix:@"easygs://smarttravel/flutter"]) {
        return STSchemalFlutter;
    } else {
        return STSchemalNative;
    }
    
}

+ (NSDictionary *)queryParameters:(NSString *)queryStr {
    if (!queryStr) {
        return nil;
    }
    
    NSMutableDictionary *mutDic = [[NSMutableDictionary alloc] init];
    
    [[queryStr componentsSeparatedByString:@"&"] enumerateObjectsUsingBlock:^(NSString * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSRange range = [obj rangeOfString:@"="];
        [mutDic setValue:[obj substringFromIndex:range.location + 1] forKey:[obj substringToIndex:range.location]];
        
    }];
    
    return mutDic;
    
}

@end
