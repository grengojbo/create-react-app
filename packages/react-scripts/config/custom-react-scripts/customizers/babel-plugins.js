module.exports = {
  DECORATORS: {
    get: () => require.resolve('babel-plugin-transform-decorators-legacy'),
  },
  ANTD: {
    get: () =>
      [require.resolve('babel-plugin-import')].concat({
        libraryName: 'antd',
        style: true,
      }),
  },
};
