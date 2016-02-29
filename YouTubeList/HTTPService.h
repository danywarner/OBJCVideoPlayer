//
//  HTTPService.h
//  YouTubeList
//
//  Created by Daniel Warner on 2/29/16.
//  Copyright © 2016 Daniel Warner. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void (^onComplete)(NSArray * __nullable dataArray, NSString * __nullable errorMessage);

@interface HTTPService : NSObject

+(id)instance;
-(void)getTutorials:(nullable onComplete)completionHandler;
@end
