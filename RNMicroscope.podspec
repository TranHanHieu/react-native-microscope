
Pod::Spec.new do |s|
  s.name         = "RNMicroscope"
  s.version      = "1.0.4"
  s.summary      = "RNMicroscope"
  s.description  = "Connect to Digital microscope"
  s.homepage     = "https://github.com/tranhanhieu"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/TranHanHieu/react-native-microscope.git", :tag => "master" }
  s.source_files  = "ios/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  