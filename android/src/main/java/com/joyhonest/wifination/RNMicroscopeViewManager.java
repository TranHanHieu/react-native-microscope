package com.joyhonest.wifination;

import android.app.Activity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.views.text.ReactTextShadowNode;

public class RNMicroscopeViewManager extends SimpleViewManager<JH_GLSurfaceView> {
    public static final String REACT_CLASS = "RNMicroscopeView";

    public RNMicroscopeViewManager() {
    
    }

    @Override
    public String getName() {
      return REACT_CLASS;
    }

    @Override
    public JH_GLSurfaceView createViewInstance(ThemedReactContext context) {
      wifination.naInit("");
      wifination.naPlay();
      return new JH_GLSurfaceView(context);
    }

    @Override
    public void onDropopViewInstance(@NonNull JH_GLSurfaceView view) {
      wifination.naStop();
      super.onDropopViewInstance(view);
    }

    // @ReactProp(name = "nainit")
    // public void setNainit() {
    //     wifination.naInit("");
    // }

}