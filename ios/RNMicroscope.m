
#import "RNMicroscope.h"

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "JH_Libary/JH_OpenGLView.h"
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
@implementation RNMicroscope

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

@end
@implementation RCT_EXTERN_MODULE(RCTOpenGLViewManager, RCTViewManager)
 
@end

@implementation RCT_EXTERN_MODULE(JHCameraManager, NSObject)

RCT_EXTERN_METHOD(addEvent)
RCT_EXTERN_METHOD(naInit)
RCT_EXTERN_METHOD(naPlay:(JH_OpenGLView*)playView)
RCT_EXTERN_METHOD(snapPhoto)
RCT_EXTERN_METHOD(naConnected)

@end

