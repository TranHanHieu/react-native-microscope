import Foundation
import JavaScriptCore

  @objc(JHOpenGLView)
  class JHOpenGLView: JH_OpenGLView {
    @objc var status = false
    @objc var onClick: RCTBubblingEventBlock?
     
    override init(frame: CGRect) {
      super.init(frame: frame)
      setupView()
    }
  
    required init?(coder aDecoder: NSCoder) {
      super.init(coder: aDecoder)
      setupView()
    }
  
   // in here you can configure your view
    private func setupView() {
      self.backgroundColor = .green
    }
  
  @objc (RCTOpenGLViewManager)
  class RCTOpenGLViewManager: RCTViewManager {
    override static func requiresMainQueueSetup() -> Bool {
      return true
    }
   
    override func view() -> UIView! {
      return JHOpenGLView()
    }
  }
}
