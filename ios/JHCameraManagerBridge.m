#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "JH_Libary/JH_OpenGLView.h"

@interface RCT_EXTERN_MODULE(JHCameraManager, NSObject)

RCT_EXTERN_METHOD(addEvent)
RCT_EXTERN_METHOD(naInit)
RCT_EXTERN_METHOD(naPlay:(JH_OpenGLView*)playView)
RCT_EXTERN_METHOD(snapPhoto)
RCT_EXTERN_METHOD(naConnected)

@end
