'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = require('./BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utilsDataService = require('../utils/dataService');

var _utilsDataService2 = _interopRequireDefault(_utilsDataService);

var _materialUi = require('material-ui');

var EmployeeList = (function (_BaseComponent) {
  _inherits(EmployeeList, _BaseComponent);

  function EmployeeList(props) {
    _classCallCheck(this, EmployeeList);

    _get(Object.getPrototypeOf(EmployeeList.prototype), 'constructor', this).call(this, props);
    this._bind('getExternalData');
    this.state = {
      results: []
    };
  }

  _createClass(EmployeeList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getExternalData();
    }
  }, {
    key: 'getExternalData',
    value: function getExternalData() {
      var _this = this;

      _utilsDataService2['default'].get('/employees').then(function (response) {
        var totalCount = response.headers.get('X-Total-Count');
        response.json().then(function (data) {
          _this.setState({
            results: data
          });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _materialUi.Card,
        { style: { maxWidth: 300, margin: 20 } },
        _react2['default'].createElement(_materialUi.CardTitle, { title: "Employees" }),
        _react2['default'].createElement(
          _materialUi.List,
          null,
          this.state.results.map(function (result) {
            return _react2['default'].createElement(_materialUi.ListItem, {
              leftAvatar: _react2['default'].createElement(_materialUi.Avatar, { icon: _react2['default'].createElement(_materialUi.FontIcon, { className: "fa fa-user" }) }),
              key: result.id,
              primaryText: result.firstName + ' ' + result.lastName,
              secondaryText: _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'span',
                  null,
                  result.jobTitle
                ),
                _react2['default'].createElement('br', null),
                result.email
              ),
              rigthIconButton: _react2['default'].createElement(
                _materialUi.IconMenu,
                { iconButtonElement: _react2['default'].createElement(_materialUi.IconButton, { iconClassName: "fa fa-ellipsis-v", tooltip: "Actions" }) },
                _react2['default'].createElement(_materialUi.MenuItem, { primaryText: "Edit" }),
                _react2['default'].createElement(_materialUi.MenuItem, { primaryText: "Delete" })
              )
            });
          })
        )
      );
    }
  }]);

  return EmployeeList;
})(_BaseComponent3['default']);

exports['default'] = EmployeeList;
module.exports = exports['default'];