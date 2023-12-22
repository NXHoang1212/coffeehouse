// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const fs = require('fs');
// const path = require('path');
// const modulePaths = require('./packager/modulePaths');

// const config = {
//   transformer: {
//     getTransformOptions: () => {
//       const moduleMap = {};
//       modulePaths.forEach(modulePath => {
//         if (fs.existsSync(modulePath)) {
//           moduleMap[path.resolve(modulePath)] = true;
//         }
//       });
//       return {
//         preloadedModules: moduleMap,
//         transform: { inlineRequires: { blockList: moduleMap } },
//       };
//     },
//   },
// };

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// module.exports = function (baseConfig) {
//   const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(__dirname));
//   const {
//     resolver: { assetExts, sourceExts },
//   } = defaultConfig;

//   return mergeConfig(defaultConfig, {
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   });
// };

