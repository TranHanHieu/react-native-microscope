var { requireNativeComponent, PropTypes, Platform } = require('react-native');

module.exports = requireNativeComponent(Platform.OS == 'ios' ? 'RNMicroscope' : 'RNMicroscopeView');
