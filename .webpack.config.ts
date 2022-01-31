import path from "path";
import slsw from "serverless-webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const rootDir = process.cwd();

console.log("BUILDING WEBPACK", { isLocal: slsw.lib.webpack.isLocal });

const config: Configuration = {
  context: slsw.lib.serverless.serviceDir,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: slsw.lib.webpack.isLocal ? undefined : "source-map",
  resolve: {
    extensions: [".mjs", ".json", ".ts"],
    symlinks: false,
    cacheWithContext: false,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(rootDir, "tsconfig.json"),
      }),
    ],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(path.resolve(slsw.lib.serverless.serviceDir), ".webpack"),
    filename: "[name].js",
  },
  optimization: {
    concatenateModules: slsw.lib.webpack.isLocal ? false : true,
    nodeEnv: slsw.lib.webpack.isLocal ? "development" : "production",
  },
  target: "node",
  externals: [
    nodeExternals({
      modulesDir: path.resolve(rootDir, "node_modules"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  plugins: [],
};

module.exports = config;
