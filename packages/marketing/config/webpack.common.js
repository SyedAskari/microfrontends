module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // when we import a file that ends with js or jsx we want it to be processed by babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
