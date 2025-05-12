const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const isWeb = process.env.PLATFORM === 'web' || process.env.REACT_NATIVE_PLATFORM === 'web';

defaultConfig.resolver.alias = {
  ...(defaultConfig.resolver.alias || {}),
  ...(isWeb ? { 'react-native-maps': 'react-native-web-maps' } : {}),
};

module.exports = defaultConfig;
