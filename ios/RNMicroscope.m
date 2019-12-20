#import "RNMicroscope.h"
#import <React/RCTBridge.h>
#import <React/RCTUIManager.h>
#import <React/RCTEventDispatcher.h>
#import <React/RCTLog.h>
#import <React/RCTUtils.h>
#import <React/UIView+React.h>
#import "JH_OpenGLView.h"
#import "JH_WifiCamera.h"


@implementation RNMicroscope

RCT_EXPORT_MODULE(RNMicroscope);
RCT_EXPORT_VIEW_PROPERTY(onCameraReady, RCTDirectEventBlock);

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

- (UIView *)view
{
    #if TARGET_IPHONE_SIMULATOR
    NSString *hello = @"Hello, iPhone simulator!";
    return [[UIView alloc] init];
    #elif TARGET_OS_IPHONE
        self.cameraView = [[JH_OpenGLView alloc] init];
        self.cameraManager = [[JH_WifiCamera alloc] init];
        [self.cameraManager naInit:@"2"];
        [self.cameraManager naStartReadUdp:20001];
        [self.cameraManager naPlay:@"2" ImageView:self.cameraView];
        return self.cameraView;
    #else
    NSString *hello = @"Hello, unknown target!";
    return [[UIView alloc] init];
    #endif
}

- (NSDictionary *)constantsToExport
{
    return @{
             @"SnapType": [[self class] validSnapTypes],
             };
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"onCameraReady"];
}

+ (NSDictionary *)validSnapTypes
{
    if (@available(iOS 11, *)) {
        return @{
                 @"H264": AVVideoCodecTypeH264,
                 @"HVEC": AVVideoCodecTypeHEVC,
                 @"JPEG": AVVideoCodecTypeJPEG,
                 @"AppleProRes422": AVVideoCodecTypeAppleProRes422,
                 @"AppleProRes4444": AVVideoCodecTypeAppleProRes4444
                 };
    } else {
        return @{
                 @"H264": AVVideoCodecH264,
                 @"JPEG": AVVideoCodecJPEG
                 };
    }
}

RCT_CUSTOM_VIEW_PROPERTY(type, NSInteger, RNTypeSnapRec)
{
    NSInteger newType = [RCTConvert NSInteger:json];
    switch (newType) {
    case RNTypeOnlyPhone:
        break;
    case RNTypeOnlySD:
        break;
    case RNTypeBothPhoneSD:
        break;
    }
}


// RCT_EXTERN_METHOD(addEvent)
// RCT_EXTERN_METHOD(naInit)
// RCT_EXTERN_METHOD(naPlay:(JH_OpenGLView*)playView)
// RCT_EXTERN_METHOD(snapPhoto)
// RCT_EXTERN_METHOD(naConnected)
@end

