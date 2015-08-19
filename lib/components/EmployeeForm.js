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

var _utilsDataService = require('../utils/dataService');

var _utilsDataService2 = _interopRequireDefault(_utilsDataService);

var _materialUi = require('material-ui');

var EmpoyeeForm = (function (_BaseComponent) {
  _inherits(EmpoyeeForm, _BaseComponent);

  function EmpoyeeForm(props) {
    _classCallCheck(this, EmpoyeeForm);

    _get(Object.getPrototypeOf(EmpoyeeForm.prototype), 'constructor', this).call(this, props);
    this.state = {
      cardTitle: 'New Employee',
      model: {
        id: 1,
        firstName: null,
        lastName: null,
        secondLastName: null,
        jobTitle: null,
        location: null,
        email: null,
        phoneNumber: null,
        userName: null
      }
    };
  }

  _createClass(EmpoyeeForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //this.getExternalData();
    }
  }, {
    key: 'getExternalData',
    value: function getExternalData(employeeId) {
      var _this = this;

      _utilsDataService2['default'].get('/employees/' + employeeId).then(function (response) {
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
      var textFieldCommon = { marginRight: 15 };

      return _react2['default'].createElement(
        _materialUi.Card,
        { style: { margin: 20 } },
        _react2['default'].createElement(_materialUi.CardTitle, { title: this.state.cardTitle }),
        _react2['default'].createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'row', padding: 24 } },
          _react2['default'].createElement(
            'div',
            { style: { flex: 'flex-grow' } },
            _react2['default'].createElement(_materialUi.TextField, {
              style: textFieldCommon,
              hintText: "First Name",
              floatingLabelText: "First Name" }),
            _react2['default'].createElement(_materialUi.TextField, {
              style: textFieldCommon,
              hintText: "Last Name",
              floatingLabelText: "Last Name" }),
            _react2['default'].createElement(_materialUi.TextField, {
              style: textFieldCommon,
              hintText: "Second Last Name",
              floatingLabelText: "Second Last Name" })
          ),
          _react2['default'].createElement(
            'div',
            { style: { flex: 'flex-grow' } },
            _react2['default'].createElement(_materialUi.TextField, {
              style: textFieldCommon,
              hintText: "Job Title",
              floatingLabelText: "Job Title" }),
            _react2['default'].createElement(_materialUi.TextField, {
              style: textFieldCommon,
              hintText: "Location",
              floatingLabelText: "Location" }),
            _react2['default'].createElement(_materialUi.TextField, {
              style: textFieldCommon,
              type: "email",
              hintText: "Email",
              floatingLabelText: "Email" }),
            _react2['default'].createElement(_materialUi.TextField, {
              style: textFieldCommon,
              type: "tel",
              hintText: "Phone",
              floatingLabelText: "Phone" })
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: { padding: 10 } },
          _react2['default'].createElement(_materialUi.FlatButton, { label: "Save", primary: true }),
          _react2['default'].createElement(_materialUi.FlatButton, { label: "Cancel", secondary: true })
        )
      );
    }
  }]);

  return EmpoyeeForm;
})(_BaseComponent3['default']);

exports['default'] = EmpoyeeForm;
module.exports = exports['default'];