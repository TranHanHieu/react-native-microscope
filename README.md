
# react-native-microscope

## Getting started
`$ yarn add react-native-microscope`
`$ yarn add react-native-view-shot`

# RN >= 0.60
iOS:
1. add pod 'RNMicroscope', :path => '../node_modules/react-native-microscope' in Podfile.
2. cd ios && pod install
3. Click on project General tab
4. Under Embedded Binaries click + and add JH_Libary.framework

### Mostly automatic installation

`$ react-native link react-native-microscope`


### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-microscope` and add `RNMicroscope.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMicroscope.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNMicroscopePackage;` to the imports at the top of the file
  - Add `new RNMicroscopePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-microscope'
  	project(':react-native-microscope').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-microscope/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-microscope')
  	```

## Usage
```javascript
import RNMicroscopeView from 'react-native-microscope';

return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <RNMicroscopeView style={{ flex: 1, width: '100%', height: '100%' }} />
      </View>
    </>
);
```

## Props
- **`onCapture`** _(Function)_ - return base64 or uri
- **`style`** _(Object)_ - style container
- **`styleMicroscope`** _(Object)_ - style camera view
- **`buttonCaptureComponent`** _(Component)_ - button capture
- **`optionFormat`** _(Object)_ - option format image, default is `{ format: "png", quality: 0.9 }`
