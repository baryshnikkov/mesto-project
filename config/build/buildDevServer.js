module.exports = function buildDevServer(options) {
  const { paths, port } = options;

  return {
    static: paths.dist,
    open: true,
    compress: true,
    port: port,
  };
};