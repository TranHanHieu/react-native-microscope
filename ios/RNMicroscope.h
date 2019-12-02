#import <React/RCTViewManager.h>
#import <React/RCTBridge.h>
#import <React/RCTBridgeModule.h>
#import <AVFoundation/AVFoundation.h>
#import "JH_Libary/JH_OpenGLView.h"
#import "JH_Libary/JH_WifiCamera.h"

@class RNMicroscope;

typedef NS_ENUM(NSInteger, RNTypeSnapRec) {
    RNTypeOnlyPhone = 0,
    RNTypeOnlySD = 1,
    RNTypeBothPhoneSD = 2,
};

@interface RNMicroscope : RCTViewManager <RCTBridgeModule>
@property (nonatomic, strong) JH_OpenGLView *cameraView;
@property (nonatomic, strong) JH_WifiCamera *cameraManager;
+ (NSDictionary *)validSnapTypes;

@end
