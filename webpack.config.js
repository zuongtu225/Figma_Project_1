const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.jsx", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js", // Tên file được build ra
  },
  // resolve => giúp import tới folder mà ko cần tới file cụ thể như index.jsx
  resolve: {
    extensions: [".js", ".jsx"], // Xác định phần mở rộng của các file sẽ được tìm kiếm
    modules: ["node_modules", "src"], // Xác định các thư mục mà webpack sẽ tìm kiếm file
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"],
      },
      // phải config này mới nhận được ảnh
      {
        test: /\.(png|svg|jpg)/,
        type: "asset/resource",
      },
    ],
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
