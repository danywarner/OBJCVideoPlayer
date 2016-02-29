//
//  HTTPService.m
//  YouTubeList
//
//  Created by Daniel Warner on 2/29/16.
//  Copyright © 2016 Daniel Warner. All rights reserved.
//

#import "HTTPService.h"

#define URL_BASE "http://192.168.0.3:6069"
#define URL_TUTORIALS "/tutorials"

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

-(void)getTutorials:(nullable onComplete)completionHandler {
    
    NSURL *url = [NSURL URLWithString:[NSString stringWithFormat:@"%s%s", URL_BASE, URL_TUTORIALS]];
    NSURLSession *session = [NSURLSession sharedSession];
    [[session dataTaskWithURL:url completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        
        if (data != nil) {
            NSError *err;
            NSArray *json = [NSJSONSerialization JSONObjectWithData:data options:0 error:&err];
            
            if (err == nil) {
                completionHandler(json, nil);
            } else {
                completionHandler(nil, @"Data is corrupt. Please try again");
            }
            
        } else {
            NSLog(@"Network Err: %@", error.debugDescription);
            completionHandler(nil, @"Problem connecting to the server");
        }
        
    }] resume];
    
}



@end
