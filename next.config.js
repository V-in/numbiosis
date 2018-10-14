const withCss = require("@zeit/next-css");
const glob = require("glob-all");
const PurifyCssPlugin = require("purifycss-webpack");
const path = require("path");
//const withPurge = require('next-purgecss')
module.exports = withCss({
  exportPathMap: () => ({
    "/": { page: "/" }
  }),
  cssModule: true,
  cssLoaderOptions: {},
  webpack(config, _) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    });
    config.node = {
      fs: "empty"
    };
    config.plugins.push(
      new PurifyCssPlugin({
        paths: glob.sync([
          path.join(__dirname, "components/*.js"),
          path.join(__dirname, "pages/*.js")
        ])
      })
    );
    return config;
  }
});
