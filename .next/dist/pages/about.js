'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/mnovaMBP/projects/node/nextSpike/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'h1',
    null,
    'About me'
  );
};
    if (module.hot) {
      module.hot.accept()
      if (module.hot.status() !== 'idle') {
        var Component = module.exports.default || module.exports
        next.router.update('/about', Component)
      }
    }
  