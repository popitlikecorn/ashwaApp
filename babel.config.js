module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      '@babel/plugin-transform-flow-strip-types',
      ['transform-inline-environment-variables', {
        include: ['EXPO_ROUTER_FLAGS'],
      }],
    ],
  };
};
