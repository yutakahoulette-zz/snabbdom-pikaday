'use strict';

var _h = require('snabbdom/h');

var _h2 = _interopRequireDefault(_h);

var _pikaday = require('pikaday');

var _pikaday2 = _interopRequireDefault(_pikaday);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var merge = function merge(obj1, obj2) {
  for (var attrname in obj2) {
    obj1[attrname] = obj2[attrname];
  }
  return obj1;
};

var supportsDateInput = function supportsDateInput() {
  var input = document.createElement('input');
  input.setAttribute('type', 'date');
  var notADateValue = 'not-a-date';
  input.setAttribute('value', notADateValue);
  return input.value !== notADateValue;
};

var supportsTouch = function supportsTouch() {
  return 'ontouchstart' in document.documentElement;
};

var bindPik = function bindPik(config) {
  return function (vnode) {
    config = merge(config || {}, { field: vnode.elm });
    new _pikaday2.default(config);
  };
};

var setDate = function setDate(config) {
  return function (ev) {
    var val = ev.target.value;
    var min = config.minDate ? (0, _moment2.default)(config.minDate) : (0, _moment2.default)();
    var date = (0, _moment2.default)(val)._isValid ? (0, _moment2.default)(val) : min;

    var formattedDate = date.format(config.format || 'MM/DD/YYYY');
    var visibleInput = ev.target.parentElement.querySelectorAll('input')[0];
    visibleInput.value = formattedDate;
  };
};

var minMax = function minMax(_minMax) {
  return _minMax ? (0, _moment2.default)(_minMax).format('YYYY-MM-DD') : '';
};

var mobileVersion = function mobileVersion(data, config) {
  return (0, _h2.default)('div', { style: { position: 'relative' } }, [(0, _h2.default)('input', data || {}), (0, _h2.default)('input', {
    props: {
      type: 'date',
      max: minMax(config.maxDate),
      min: minMax(config.minDate)
    },
    hook: { insert: function insert(vnode) {
        var el = vnode.elm;
        var parentWidth = el.parentElement.offsetWidth;
        el.style.width = parentWidth + 'px';
      }
    },
    style: {
      opacity: '0',
      position: 'absolute',
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%'
    },
    on: { input: setDate(config) }
  })]);
};

module.exports = function (data, config) {
  if (supportsDateInput() && supportsTouch()) return mobileVersion(data, config);

  data = merge(data || {}, {
    attrs: { readonly: true },
    hook: { insert: bindPik(config) }
  });
  return (0, _h2.default)('input', data);
};
