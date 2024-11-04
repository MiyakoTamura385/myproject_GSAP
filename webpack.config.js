const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = "production";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "production";

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,
    mode: "production",
    devServer: {
        static: "dist",
        open: true
      },
  
    // ファイルの出力設定
    output: {
      // 出力ファイル名
      filename: "main.js"
    }
  };

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  output: {
    assetModuleFilename: "images/[name][ext]",
  },


  module: {
    rules: [
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // ローダー名
        use: [
          // CSSファイルを書き出すオプションを有効にする
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドを取り込む
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          // Sassをバンドルするための機能
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
            sourceMap: enabledSourceMap,
            },
          },
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|svg)$/,
        // 画像を埋め込まず任意のフォルダに保存する
        type: "asset/resource",
      },

      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      
    ],
  },
  plugins: [
    // CSSファイルを外だしにするプラグイン
    new MiniCssExtractPlugin({
      // ファイル名を設定します
      filename: "style.css",
    }),
  ],
  devServer: {
        static: "dist",
        open: true
      },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};


