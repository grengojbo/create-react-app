// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const babelJest = require('babel-jest');
const getCustomConfig = require('../custom-react-scripts/config');

//Get custom configuration for injecting plugins, presets and loaders
const customConfig = getCustomConfig(true);

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')].concat(
    customConfig.babelPresets
  ),
  babelrc: false,
  plugins: customConfig.babelPlugins,
});
