//
//  HTTPService.m
//  YouTubeList
//
//  Created by Daniel Warner on 2/29/16.
//  Copyright © 2016 Daniel Warner. All rights reserved.
//

#import "HTTPService.h"

@implementation HTTPService

+(id) instance {
    static HTTPService *sharedInstance = nil;
    
    @synchronized(self) {
        if (sharedInstance == nil) {
            sharedInstance = [[self alloc]init];
        }
    }
    
    return sharedInstance;
}



@end
