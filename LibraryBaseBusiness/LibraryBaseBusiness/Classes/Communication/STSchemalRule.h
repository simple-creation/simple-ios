//
//  STSchemalRule.h
//  SmartTravel
//
//  Created by zgy on 2019/3/15.
//  Copyright © 2019 smart. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef NS_ENUM(NSUInteger, STSchemalType) {
    STSchemalUrl,
    STSchemalRN,
    STSchemalH5,
    STSchemalFlutter,
    STSchemalNative,
    STSchemalExternal
};

NS_ASSUME_NONNULL_BEGIN

@interface STSchemalRule : NSObject

+ (STSchemalType)schemalType:(NSString *)url;

+ (NSDictionary *)queryParameters:(NSString *)queryStr;

@end

NS_ASSUME_NONNULL_END
