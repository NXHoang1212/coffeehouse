const path = require('path');

module.exports = {
    resolver: {
        extraNodeModules: {
            'modulePaths': path.resolve(__dirname, 'packager/modulePaths.js'),
        },
    },
};
