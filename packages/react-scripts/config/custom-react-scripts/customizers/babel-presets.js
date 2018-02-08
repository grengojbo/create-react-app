module.exports = {
  FLOW: {
    get: () => require.resolve('babel-preset-flow'),
  },
  BABEL_STAGE_0: {
    get: () => require.resolve('babel-preset-stage-0'),
  },
};
