// const path = require("path");

// module.exports = {
//   entry: "./src/index.ts",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "index.js",
//     library: "ProjectGanttChart",
//     libraryTarget: "umd",
//     globalObject: "this",
//     clean: true,
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.module\.css$/,
//         use: [
//           "style-loader",
//           {
//             loader: "css-loader",
//             options: {
//               modules: {
//                 localIdentName: "[name]__[local]___[hash:base64:5]",
//               },
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         exclude: /\.module\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   externals: {
//     react: "react",
//     "react-dom": "react-dom",
//   },
// };

const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/", // Ensure the dev server serves from the root
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"), // Serve the index.html file
    },
    compress: true,
    port: 8080, // Change the port if needed
    open: true, // Automatically open the browser
    historyApiFallback: true, // For React routing
  },
  mode: "development",
};
