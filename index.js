
import React from 'react';
import { StyleSheet, requireNativeComponent, View, Button } from 'react-native';
import {NativeModules} from 'react-native';
// import JHOpenGLView from './JHOpenGLView.js';
const JHOpenGLView = requireNativeComponent('RCTOpenGLViewManager', RNMicroscope, {});
export default class RNMicroscope extends React.Component {
 
  constructor(props){
    super(props);
 
    this.state = {
       count: 0
    }
 }

render() {
  return (
    <View style={styles.container}>
      <JHOpenGLView
        style={{width: 100, height: 100}} 
      />
      <Button
          title="Init"
          color="#f194ff"
          onPress={() => NativeModules.JHCameraManager.naInit()}
        />
        <Button
          title="Check Status"
          color="#f194ff"
          onPress={() => NativeModules.JHCameraManager.naConnected()}
        />
        <Button
          title="Play"
          color="#f233ff"
          //onPress={() => NativeModules.JHCameraManager.naPlay()} Need passing JHOpenGLView in NativeModules.JHCameraManager.naPlay()
        />
        <Button
          title="SnapPhoto"
          color="#f194ff"
          onPress={() => NativeModules.JHCameraManager.snapPhoto()}
        />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
