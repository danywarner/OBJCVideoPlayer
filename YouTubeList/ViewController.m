//
//  ViewController.m
//  YouTubeList
//
//  Created by Daniel Warner on 2/29/16.
//  Copyright © 2016 Daniel Warner. All rights reserved.
//

#import "ViewController.h"
#import "HTTPService.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    [[HTTPService instance] getTutorials ];
    
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
