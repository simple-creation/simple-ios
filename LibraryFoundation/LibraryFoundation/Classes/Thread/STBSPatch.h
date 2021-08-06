//
//  STBSPatch.h
//  SmartTravel
//
//  Created by zgy on 2019/3/22.
//  Copyright © 2019 smart. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface STBSPatch : NSObject

+ (BOOL)patchOldFile:(NSString *)oldFilePath newFile:(NSString *)newFilePath withPatchFile:(NSString *)patchFilePath;

@end

NS_ASSUME_NONNULL_END
