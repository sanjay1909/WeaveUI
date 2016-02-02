import _ from 'lodash-compat';
import baseConfig, {
    options
}
from './base.config';

export default _.extend({}, baseConfig, {
    entry: {
        'weaveui': './src/index.js'
    },

    output: {
        path: './dist',
        filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
        library: 'weaveui',
        libraryTarget: 'umd'
    },

    externals: [
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        },
        {
            'weavejs': { //not required as weavejs is accessed through window ns , but eveuntually it wil be available in npm
                root: 'weavejs',
                commonjs2: 'weavejs',
                commonjs: 'weavejs',
                amd: 'weavejs'
            }
        },
        {
            'Weave': { //not required as weavejs is accessed through window ns , but eveuntually it wil be available in npm
                root: 'Weave',
                commonjs2: 'Weave',
                commonjs: 'Weave',
                amd: 'Weave'
            }
        },
        {
            'weavereact': {
                root: 'weavereact',
                commonjs2: 'weavereact',
                commonjs: 'weavereact',
                amd: 'weavereact'
            }
        }
    ]
});
