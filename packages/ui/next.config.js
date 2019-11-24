const withCSS = require("@zeit/next-css");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const fs = require("fs");

const challengeFileNames = fs.readdirSync("./challenges");
const challengePages = {};
for (const fileName of challengeFileNames) {
  if (!["index.ts", "types.ts"].includes(fileName)) {
    const id = fileName.replace(".ts", "");
    challengePages[`/challenges/${id}`] = {
      page: "/challenges/[id]",
      query: { id }
    };
  }
}

module.exports = withCSS({
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
      ...challengePages
    };
  },
  exportTrailingSlash: true,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    config.plugins = config.plugins || [];
    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: ["javascript"]
      })
    );

    return config;
  }
});
