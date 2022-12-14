const removeImports = require("next-remove-imports")();
const compose = require("next-compose");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
module.exports = removeImports(
  compose([
    [
      withBundleAnalyzer,

      {
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(
          process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: "static",
            reportFilename: "../bundles/server.html",
          },
          browser: {
            analyzerMode: "static",
            reportFilename: "../bundles/client.html",
          },
        },
      },
    ],
  ])
);
