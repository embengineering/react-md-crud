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

var _griddleReact = require('griddle-react');

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _utilsDataService = require('../utils/dataService');

var _utilsDataService2 = _interopRequireDefault(_utilsDataService);

var _materialUi = require('material-ui');

var EmployeeList = (function (_BaseComponent) {
  _inherits(EmployeeList, _BaseComponent);

  function EmployeeList(props) {
    _classCallCheck(this, EmployeeList);

    _get(Object.getPrototypeOf(EmployeeList.prototype), 'constructor', this).call(this, props);
    this._bind('setPage', 'sortData', 'changeSort', 'setFilter');
    this.state = {
      results: [],
      currentPage: 0,
      maxPages: 0,
      externalResultsPerPage: 5,
      externalSortColumn: null,
      externalSortAscending: true
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
            results: data,
            currentPage: 0,
            maxPages: Math.ceil(totalCount / _this.state.pageSize),
            isLoading: false
          });
        });
      });
    }

    //what page is currently viewed
  }, {
    key: 'setPage',
    value: function setPage() {}

    //this will handle how the data is sorted
  }, {
    key: 'sortData',
    value: function sortData() {}

    //this changes whether data is sorted in ascending or descending order
  }, {
    key: 'changeSort',
    value: function changeSort() {}

    //this method handles the filtering of the data
  }, {
    key: 'setFilter',
    value: function setFilter() {}

    //this method handles determining the page size
  }, {
    key: 'setPageSize',
    value: function setPageSize() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _materialUi.Card,
        { style: { maxWidth: '90%', margin: '20px auto 0' } },
        _react2['default'].createElement(_griddleReact2['default'], { useExternal: true, externalSetPage: this.setPage,
          externalChangeSort: this.changeSort, externalSetFilter: this.setFilter,
          externalSetPageSize: this.setPageSize, externalMaxPage: this.state.maxPages,
          externalCurrentPage: this.state.currentPage, results: this.state.results,
          resultsPerPage: this.state.externalResultsPerPage,
          externalSortColumn: this.state.externalSortColumn,
          externalSortAscending: this.state.externalSortAscending,
          showFilter: true, showSettings: true,
          columns: ['Id', 'FirstName', 'LastName', 'SecondLastName', 'Email'] })
      );
    }
  }]);

  return EmployeeList;
})(_BaseComponent3['default']);

exports['default'] = EmployeeList;
module.exports = exports['default'];