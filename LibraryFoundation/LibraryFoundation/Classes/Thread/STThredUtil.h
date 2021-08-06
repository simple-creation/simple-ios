//
//  STThredUtil.h
//  SmartTravel
//
//  Created by zgy on 2019/3/15.
//  Copyright © 2019 smart. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN


BOOL STisMainQueue(void);
void STExecuteOnMainQueue(dispatch_block_t block);

NS_ASSUME_NONNULL_END
