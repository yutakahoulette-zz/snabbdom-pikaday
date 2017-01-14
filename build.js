'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _pikaday = require('pikaday');

var _pikaday2 = _interopRequireDefault(_pikaday);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindPik = function bindPik(config) {
  return function (vnode) {
    config = _ramda2.default.merge(config || {}, { field: vnode.elm });
    new _pikaday2.default(config);
  };
};

module.exports = function (data, config) {
  data = _ramda2.default.merge(data || {}, { hook: { insert: bindPik(config) } });
  return (0, _h2.default)('input', data);
};
