//
//  STRNZip.m
//  SmartTravel
//
//  Created by zgy on 2019/3/13.
//  Copyright © 2019 smart. All rights reserved.
//

#import "STRNUnZip.h"
#import <SSZipArchive/SSZipArchive.h>

@implementation STRNUnZip

+ (BOOL)unzipFileAtPath:(NSString *)path toDestination:(NSString *)destination {
    
    return [SSZipArchive unzipFileAtPath:path toDestination:destination];
}

@end
