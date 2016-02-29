//
//  HTTPService.h
//  YouTubeList
//
//  Created by Daniel Warner on 2/29/16.
//  Copyright © 2016 Daniel Warner. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface HTTPService : NSObject

+(id)instance;
-(void)getTutorials;
@end
