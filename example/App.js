/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar} from 'react-native';

import RNMicroscopeView from 'react-native-microscope';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1}}>
        <RNMicroscopeView
          ref={'microscope'}
          style={{flex: 1, width: '100%', height: '100%'}}
          onStartCapture={() => console.log('start')}
          onCaptureSuccess={uri => alert(uri)}
          onCaptureError={e => alert(JSON.stringify(e))}
        />
      </View>
    </>
  );
};

export default App;
