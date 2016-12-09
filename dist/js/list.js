webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(75);
	module.exports = __webpack_require__(274);


/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	var _reactDom = __webpack_require__(108);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _list = __webpack_require__(275);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(React.createElement(_list2.default, null), document.getElementById('app'));
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(78);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppComponent = function (_React$Component) {
	    _inherits(AppComponent, _React$Component);

	    function AppComponent() {
	        _classCallCheck(this, AppComponent);

	        return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
	    }

	    _createClass(AppComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                '\u8FD9\u91CC\u662Flist.js'
	            );
	        }
	    }]);

	    return AppComponent;
	}(_react2.default.Component);

	var _default = AppComponent;
	exports.default = _default;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(AppComponent, 'AppComponent', '/home/haoruitao/YeomanProject/mult_page_workspace/demo2/mult_react/src/components/list.js');

	    __REACT_HOT_LOADER__.register(_default, 'default', '/home/haoruitao/YeomanProject/mult_page_workspace/demo2/mult_react/src/components/list.js');
	}();

	;

/***/ }

});