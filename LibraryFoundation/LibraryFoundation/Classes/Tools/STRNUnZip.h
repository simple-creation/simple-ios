//
//  STRNUnZip.h
//  SmartTravel
//
//  Created by zgy on 2019/3/13.
//  Copyright © 2019 smart. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface STRNUnZip : NSObject

+ (BOOL)unzipFileAtPath:(NSString *)path toDestination:(NSString *)destination;

@end

NS_ASSUME_NONNULL_END
