/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  TouchableOpacity,
  NativeModules,
  PermissionsAndroid,
  requireNativeComponent,
  PropTypes,
  Platform,
  StyleSheet,
  View,
  Text
} from "react-native";
import ViewShot from "react-native-view-shot";
const RNMicroscope = NativeModules.RNMicroscope;
const RNMicroscopeView = requireNativeComponent(
  Platform.OS == "ios" ? "RNMicroscope" : "RNMicroscopeView"
);

class MicroscopeView extends Component {

  componentDidMount() {
    this.requestReadExternalPermission();
  }

  async requestReadExternalPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: '',
          message:
            '',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
      this.requestWriteExternalPermission();
    } catch (err) {
      console.warn(err);
    }
  }

  async requestWriteExternalPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: '',
          message:
            '',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  
  
  _onCapture = async () => {
    const { onCaptureSuccess, onStartCapture, onCaptureError } = this.props;
    onStartCapture && onStartCapture(new Date().getTime());
    if (Platform.OS === 'android') {
      const url = await RNMicroscope.naSnapPhoto(new Date().getTime() + '.png');
      setTimeout(async () => {
        const uri = await RNMicroscope.getBase64String(`file://${url}`);
        if (onCaptureSuccess) onCaptureSuccess(uri);
      }, 500); // waiting save image
      return;
    }
    this.refs.viewShot
      .capture()
      .then(uri => {
        if (onCaptureSuccess) onCaptureSuccess(uri?.substring(22));
      })
      .catch(e => onCaptureError && onCaptureError(e));
  };

  _renderButtonCapture() {
    const { buttonCaptureComponent } = this.props;
    return (
      buttonCaptureComponent ? (
        buttonCaptureComponent
      ) : (
        <TouchableOpacity onPress={this._onCapture}>
          <View style={styles.buttonCapture}>
            <Text>Capture</Text>
          </View>
        </TouchableOpacity>
      )
    )
  }

  render() {
    const {
      style,
      styleMicroscope,
      optionFormat = { format: "png", quality: 0.9 }
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <ViewShot
          ref="viewShot"
          options={optionFormat}
          style={styles.container}
        >
          <RNMicroscopeView style={[styles.microscope, styleMicroscope]} />
        </ViewShot>
        {this._renderButtonCapture()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  microscope: {
    flex: 1
  },
  buttonCapture: {
    position: "absolute",
    bottom: 0,
    width: 80,
    height: 80,
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MicroscopeView;
