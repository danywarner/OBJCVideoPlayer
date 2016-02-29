//
//  Video.h
//  YouTubeList
//
//  Created by Daniel Warner on 2/29/16.
//  Copyright © 2016 Daniel Warner. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Video : NSObject
@property (nonatomic, strong) NSString *videoTitle;
@property (nonatomic, strong) NSString *videoDescription;
@property (nonatomic, strong) NSString *videoIframe;
@property (nonatomic, strong) NSString *thumbnailUrl;

@end
