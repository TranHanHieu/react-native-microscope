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
  requireNativeComponent,
  PropTypes,
  Platform,
  StyleSheet,
  View,
  Text
} from "react-native";
import ViewShot from "react-native-view-shot";

const RNMicroscopeView = requireNativeComponent(
  Platform.OS == "ios" ? "RNMicroscope" : "RNMicroscopeView"
);

class MicroscopeView extends Component {
  _onCapture = () => {
    const { onCaptureSuccess, onStartCapture, onCaptureError } = this.props;
    onStartCapture && onStartCapture();
    this.refs.viewShot
      .capture()
      .then(uri => {
        if (onCaptureSuccess) onCaptureSuccess(uri);
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
