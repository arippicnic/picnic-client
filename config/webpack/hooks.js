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
};
