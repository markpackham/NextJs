'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Prices = require('../components/Prices');

var _Prices2 = _interopRequireDefault(_Prices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\xampp\\htdocs\\NextJs\\pages\\index.js?entry';


var Index = function Index(props) {
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, ' Welcome to the cypto currency news, BitzPrice '), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, 'Check current Bitcoin rate'), _react2.default.createElement(_Prices2.default, { bpi: props.bpi, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })));
};

Index.loadGetInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;
                    return _context.abrupt('return', {
                        bpi: data.bpi
                    });

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJGZXRjaCIsIkxheW91dCIsIlByaWNlcyIsIkluZGV4IiwicHJvcHMiLCJicGkiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztBQUduQixJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFEOzJCQUNWLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLG9FQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZKLEFBRUksQUFDQSwrQ0FBQSxBQUFDLGtDQUFPLEtBQUssTUFBYixBQUFtQjtzQkFBbkI7d0JBTEUsQUFDVixBQUNJLEFBR0k7QUFBQTs7QUFMWjs7QUFVQSxNQUFBLEFBQU0sK0ZBQXNCLG1CQUFBO2FBQUE7a0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBQUE7MkJBRU4sTUFGTSxBQUVOLEFBQU07O3FCQUFsQjtBQUZrQixtQ0FBQTtvQ0FBQTsyQkFHTCxJQUhLLEFBR0wsQUFBSTs7cUJBQWpCO0FBSGtCLG9DQUFBOzs2QkFPZixLQVBlLEFBTWxCLEFBQ1E7QUFEUixBQUNGOztxQkFQb0I7cUJBQUE7b0NBQUE7O0FBQUE7Z0JBQUE7QUFBNUIsQUFXQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi94YW1wcC9odGRvY3MvTmV4dEpzIn0=