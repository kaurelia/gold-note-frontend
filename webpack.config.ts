import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { join } from "path";
import { Configuration as ConfigurationBase } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { Configuration as ConfigurationDevServer } from "webpack-dev-server";

type Configuration = ConfigurationDevServer & ConfigurationBase;

const config = (): Configuration => {
  return {
    entry: "./source/index.tsx",
    devtool: "source-map",
    target: "web",
    output: {
      path: join(process.cwd(), "dist"),
      filename: "index.js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".tsx", ".jsx", ".ts", ".json", ".wasm", ".mjs"],
      alias: {
        "~frontend": process.cwd(),
      },
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: join(process.cwd(), "public", "index.html"),
            to: join(process.cwd(), "dist"),
          },
          {
            from: join(process.cwd(), "public", "images"),
            to: join(process.cwd(), "dist", "images"),
          },
        ],
      }),
      new ReactRefreshWebpackPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: "static",
        reportFilename: "../bundle-analyzes/analyzer-report.html",
      }),
    ],
    mode: "development",
    devServer: {
      host: "0.0.0.0",
      liveReload: false,
      hot: true,
      client: {
        overlay: false,
      },
      historyApiFallback: true,
      static: join(process.cwd(), "dist"),
      devMiddleware: {
        publicPath: "/",
      },
      watchFiles: [join(process.cwd(), "source")],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js|tsx|jsx)$/,
          include: process.cwd(),
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/env",
                    { bugfixes: true, useBuiltIns: "usage", corejs: "3" },
                  ],
                  "@babel/preset-typescript",
                  ["@babel/preset-react", { runtime: "automatic" }],
                ],
                plugins: [
                  "@emotion/babel-plugin",
                  require.resolve("react-refresh/babel"),
                ],
              },
            },
          ],
        },
      ],
    },
  };
};
export default config;
