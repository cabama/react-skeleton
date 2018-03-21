const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var path = require('path');

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  entry: {
    // react: "./node_modules/react/umd/react.development.js",
    // reactDom: "./node_modules/react-dom/umd/react-dom.development.js",
    app: "./src/index.tsx",
    style: "./src/assets/less/global_app.less"
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/dist",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      'reduceres': srcPath('redux/reducers'),
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,

  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.less$/,
        include: path.join(__dirname, 'src/assets'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            //because remove style-loader,my css can't work
            loader: "css-loader", options: { importLoaders: 1 }// translates CSS into CommonJS
          }, {
            loader: "less-loader" // compiles Sass to CSS
          }]
        })
      },

      {
        test: /\.less$/,
        include: path.join(__dirname, 'src/containers'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }, {
            loader: "less-loader" // compiles Less to CSS
          }]
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src/'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ]
      },      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },

  plugins: [
    // Generate index.html file in the output
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('global_app.css').replace('../js', '../css');
      },
      allChunks: true
    })  ]
};