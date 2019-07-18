/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const validateRelayRequiredArugments = require('../validations/validateRelayRequiredArguments');
const validateRelayServerOnlyDirectives = require('../validations/validateRelayServerOnlyDirectives');

module.exports = {
  codegenValidations: [validateRelayServerOnlyDirectives],
  printValidations: [validateRelayRequiredArugments],
};
