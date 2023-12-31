/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

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


// const http = require('http');
// const Metro = require('metro');

// // We first load the config from the file system
// Metro.loadConfig().then(async (config) => {
//   const metroBundlerServer = await Metro.runMetro(config);

//   const httpServer = http.createServer(
//     metroBundlerServer.processRequest.bind(metroBundlerServer),
//   );

//   httpServer.listen(8081);
// });



// const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
// const defaultConfig = getDefaultConfig(__dirname);
// const { assetExts, sourceExts } = defaultConfig.resolver;
// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {
//   getTransformOptions: async () => ({
//     transform: {
//       experimentalImportSupport: false,
//       inlineRequires: true,
//     },
//   }),
//   transformer: {
//     babelTransformerPath: require.resolve("react-native-svg-transformer")
//   },
//   resolver: {
//     assetExts: assetExts.filter((ext) => ext !== "svg"),
//     sourceExts: [...sourceExts, "svg"]
//   }
// };

// module.exports = mergeConfig(defaultConfig, config);

// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const defaultConfig = getDefaultConfig(__dirname);
// const { assetExts, sourceExts } = defaultConfig.resolver;

// const config = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//     babelTransformerPath: require.resolve("react-native-svg-transformer")
//   },
//   resolver: {
//     assetExts: assetExts.filter((ext) => ext !== "svg"),
//     sourceExts: [...sourceExts, "svg"]
//   }
// };

// module.exports = mergeConfig(defaultConfig, config);