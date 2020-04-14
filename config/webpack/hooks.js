const sass = require('node-sass');
const path = require('path');
const postcssConfig = require('../../postcss.config');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

module.exports = () => {
  require('css-modules-require-hook')({
    generateScopedName: isDev ? '[name]__[local]' : '[hash:base64:5]',
    extensions: ['.css', '.scss'],
    prepend: [...postcssConfig.plugins],
    preprocessCss: (data, filename) =>
      sass.renderSync({ data, file: filename }).css,
    rootDir: path.resolve(process.cwd(), 'src'),
    devMode: isDev
  });
  // Images
  require('asset-require-hook')({
    // Must use the same option with webpack's configuration
    extensions: ['gif', 'jpg', 'jpeg', 'png', 'webp', 'svg'],
    publicPath: '/assets/',
    limit: 10 * 1024,
    name: '[name].[hash:8].[ext]'
  });

  // Fonts
  require('asset-require-hook')({
    // Must use the same option with webpack's configuration
    extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot'],
    publicPath: '/assets/'
  });
};
