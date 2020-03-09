
package com.joyhonest.wifination;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Callback;

import java.io.File;
import android.os.Environment;

import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Base64;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class RNMicroscopeModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNMicroscopeModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNMicroscope";
  }

  @ReactMethod()
  public void naSnapPhoto(String name, Promise promise) {
    try {
      String external = Environment.getExternalStoragePublicDirectory(
              Environment.DIRECTORY_DCIM) + "/" + name;
      wifination.naSnapPhoto(external, 0);
      promise.resolve(external);
    } catch (Exception e) {
      promise.reject("Error", "Exception: " + e);
      e.printStackTrace();
    }
  }

  @ReactMethod
  public void getBase64String(String uri, Promise promise) {
    Bitmap image = null;
    try {
      image = MediaStore.Images.Media.getBitmap(reactContext.getContentResolver(), Uri.parse(uri));
      if (image == null) {
        promise.reject("Error", "Failed to decode Bitmap, uri: " + uri);
      } else {
        promise.resolve(bitmapToBase64(image));
      }
    } catch (Error e) {
      promise.reject("Error", "Failed to decode Bitmap: " + e);
      e.printStackTrace();
    } catch (Exception e) {
      promise.reject("Error", "Exception: " + e);
      e.printStackTrace();
    }
  }

  private String bitmapToBase64(Bitmap bitmap) {
    ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
    bitmap.compress(Bitmap.CompressFormat.JPEG, 80, byteArrayOutputStream);
    byte[] byteArray = byteArrayOutputStream.toByteArray();
    return Base64.encodeToString(byteArray, Base64.DEFAULT);
  }


}