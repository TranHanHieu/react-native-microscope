//
//  JHCameraManager.swift
//  JHApp
//
//  Created by Doan Tuan on 11/7/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(JHCameraManager)

class JHCameraManager: NSObject {
  
  var jhCamera = JH_WifiCamera()
  @objc func naInit() {
    jhCamera.naInit("2")
    jhCamera.naSetAlbumName("Save demo2")
    jhCamera.naSetCustomer("sima")
    jhCamera.naStartReadUdp(20001)
  }
  
  @objc func naConnected() {
    print("connect to camera", jhCamera.naGetConnected())
  }
  
  @objc func naPlay(playView: JHOpenGLView) {
    jhCamera.naPlay("2", imageView: playView)
  }
  
  @objc func snapPhoto() {
    jhCamera.naSnapPhoto("2", saveTyoe: TYPE_BOTH_PHONE_SD, destination: TYPE_DEST_GALLERY)
  }
}

