/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Lotto.js":
/*!*************************!*\
  !*** ./src/js/Lotto.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lotto)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _lottoNumberList = /*#__PURE__*/new WeakMap();

var Lotto = /*#__PURE__*/function () {
  function Lotto() {
    _classCallCheck(this, Lotto);

    _classPrivateFieldInitSpec(this, _lottoNumberList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _lottoNumberList, []);
  }

  _createClass(Lotto, [{
    key: "setLotto",
    value: function setLotto(lottoNumbers) {
      _classPrivateFieldSet(this, _lottoNumberList, lottoNumbers);
    }
  }, {
    key: "getLotto",
    value: function getLotto() {
      return _classPrivateFieldGet(this, _lottoNumberList);
    }
  }]);

  return Lotto;
}();



/***/ }),

/***/ "./src/js/LottoApp.js":
/*!****************************!*\
  !*** ./src/js/LottoApp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LottoApp)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/utils */ "./src/js/util/utils.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/constants */ "./src/js/util/constants.js");
/* harmony import */ var _view_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/templates */ "./src/js/view/templates.js");
/* harmony import */ var _view_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/dom */ "./src/js/view/dom.js");
/* harmony import */ var _PurchasedLotto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PurchasedLotto */ "./src/js/PurchasedLotto.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view */ "./src/js/view/view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }








var LottoApp = /*#__PURE__*/function () {
  function LottoApp(app) {
    _classCallCheck(this, LottoApp);

    this.$app = (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(app);
    this.lottoList = new _PurchasedLotto__WEBPACK_IMPORTED_MODULE_4__["default"]();
    (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.render)(this.$app, (0,_view_templates__WEBPACK_IMPORTED_MODULE_2__.generatePaymentSection)());
    this.bindEvent();
  }

  _createClass(LottoApp, [{
    key: "bindEvent",
    value: function bindEvent() {
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.PAYMENT_BUTTON).addEventListener('click', this.onSubmitPayment.bind(this));
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.MODAL_CLOSE_BUTTON).addEventListener('click', _view_view__WEBPACK_IMPORTED_MODULE_5__.modalClose);
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.CLASS.MODAL_BACKGROUND).addEventListener('click', function (event) {
        if (event.target === (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.CLASS.MODAL_BACKGROUND)) {
          (0,_view_view__WEBPACK_IMPORTED_MODULE_5__.modalClose)();
        }
      });
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.RESTART).addEventListener('click', this.onClickRestart.bind(this));
    }
  }, {
    key: "onSubmitPayment",
    value: function onSubmitPayment(event) {
      event.preventDefault();
      var $paymentInput = (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.PAYMENT_INPUT);
      var payment = Number($paymentInput.value);

      try {
        if (!(0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isPositiveInteger)(payment)) {
          throw new Error(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.MONEY_OUT_OF_RANGE);
        }

        if ((0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isRemainder)(payment, _util_constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_STANDARD)) {
          throw new Error(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.MONEY_OUT_OF_STANDARD);
        }

        (0,_view_view__WEBPACK_IMPORTED_MODULE_5__.toggleDisablePayment)();
        this.lottoList.setPurchasedLotto(payment / _util_constants__WEBPACK_IMPORTED_MODULE_1__.MONEY_STANDARD);
        this.renderPurchasedSection();
        (0,_view_view__WEBPACK_IMPORTED_MODULE_5__.moveFocusToNextNumber)();
      } catch (_ref) {
        var message = _ref.message;
        alert(message);
        (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.initInput)($paymentInput);
      }
    }
  }, {
    key: "renderPurchasedSection",
    value: function renderPurchasedSection() {
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.render)(this.$app, (0,_view_templates__WEBPACK_IMPORTED_MODULE_2__.generatePurchasedSection)(this.lottoList.getPurchasedLotto()));
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.render)(this.$app, (0,_view_templates__WEBPACK_IMPORTED_MODULE_2__.generateWinningNumberSection)());
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.LOTTO_LIST_TOGGLE_BUTTON).addEventListener('click', _view_view__WEBPACK_IMPORTED_MODULE_5__.toggleButton);
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.RESULT_CHECKING_BUTTON).addEventListener('click', this.onClickResultButton.bind(this));
    }
  }, {
    key: "onClickResultButton",
    value: function onClickResultButton(event) {
      event.preventDefault();
      var $winningNumberInputs = (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.CLASS.WINNING_NUMBER_INPUT);
      var $bonusNumberInput = (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.BONUS_NUMBER_INPUT);
      var winningNumber = [];
      var bonusNumber = Number($bonusNumberInput.value);

      try {
        $winningNumberInputs.forEach(function (input) {
          if ((0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isOverRange)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.LOTTO.MIN_NUMBER, _util_constants__WEBPACK_IMPORTED_MODULE_1__.LOTTO.MAX_NUMBER, Number(input.value))) {
            throw new Error(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);
          }

          winningNumber.push(Number(input.value));
        });

        if ((0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.isOverlapped)(winningNumber)) {
          throw new Error(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.DUPLICATE_NUMBER);
        }

        (0,_view_view__WEBPACK_IMPORTED_MODULE_5__.generateResult)(this.lottoList, winningNumber, bonusNumber);
        (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.CLASS.MODAL_BACKGROUND).classList.add('show');
      } catch (_ref2) {
        var message = _ref2.message;
        alert(message);
      }
    }
  }, {
    key: "onClickRestart",
    value: function onClickRestart(event) {
      event.preventDefault();
      (0,_view_view__WEBPACK_IMPORTED_MODULE_5__.modalClose)();
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.PURCHASED_LOTTO_LIST_SECTION).remove();
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.WINNING_NUMBER_SECTION).remove();
      (0,_view_view__WEBPACK_IMPORTED_MODULE_5__.toggleDisablePayment)();
      (0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.initInput)((0,_view_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_1__.ID.PAYMENT_INPUT));
      this.lottoList = new _PurchasedLotto__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
  }]);

  return LottoApp;
}();



/***/ }),

/***/ "./src/js/PurchasedLotto.js":
/*!**********************************!*\
  !*** ./src/js/PurchasedLotto.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchasedLotto)
/* harmony export */ });
/* harmony import */ var _Lotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lotto */ "./src/js/Lotto.js");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/utils */ "./src/js/util/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _lottoList = /*#__PURE__*/new WeakMap();

var PurchasedLotto = /*#__PURE__*/function () {
  function PurchasedLotto() {
    _classCallCheck(this, PurchasedLotto);

    _classPrivateFieldInitSpec(this, _lottoList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _lottoList, []);
  }

  _createClass(PurchasedLotto, [{
    key: "setPurchasedLotto",
    value: function setPurchasedLotto(count) {
      for (var i = 0; i < count; i++) {
        var lotto = new _Lotto__WEBPACK_IMPORTED_MODULE_0__["default"]();
        lotto.setLotto((0,_util_utils__WEBPACK_IMPORTED_MODULE_1__.createRandomNumberList)());

        _classPrivateFieldGet(this, _lottoList).push(lotto.getLotto());
      }
    }
  }, {
    key: "getPurchasedLotto",
    value: function getPurchasedLotto() {
      return _classPrivateFieldGet(this, _lottoList);
    }
  }, {
    key: "count",
    value: function count() {
      return _classPrivateFieldGet(this, _lottoList).length;
    }
  }]);

  return PurchasedLotto;
}();



/***/ }),

/***/ "./src/js/util/constants.js":
/*!**********************************!*\
  !*** ./src/js/util/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASS": () => (/* binding */ CLASS),
/* harmony export */   "ID": () => (/* binding */ ID),
/* harmony export */   "CLASS_NAME": () => (/* binding */ CLASS_NAME),
/* harmony export */   "MONEY_STANDARD": () => (/* binding */ MONEY_STANDARD),
/* harmony export */   "RANK": () => (/* binding */ RANK),
/* harmony export */   "RANK_PRIZE": () => (/* binding */ RANK_PRIZE),
/* harmony export */   "LOTTO": () => (/* binding */ LOTTO),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE)
/* harmony export */ });
var _RANK_PRIZE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CLASS = {
  LOTTO_NUMBER: '.lotto-number',
  LOTTO: '.lotto',
  PURCHASED_TOTAL_COUNT: '.purchased-total-count',
  WINNING_NUMBER_INPUT: '.winning-number-input',
  WINNING_COUNT: '.winning-count',
  EARNING_WEIGHT: '.earning-weight',
  MODAL_BACKGROUND: '.modal-background',
  ERROR_TEXT: '.error-text'
};
var ID = {
  PAYMENT_BUTTON: '#payment-button',
  PAYMENT_INPUT: '#payment-input',
  LOTTO_LIST_TOGGLE_BUTTON: '#lotto-list-toggle-button',
  LOTTO_LIST: '#lotto-list',
  WINNING_NUMBER_SECTION: '#winning-number-section',
  RESULT_CHECKING_BUTTON: '#result-checking-button',
  MODAL_CLOSE_BUTTON: '#modal-close-button',
  RESTART: '#restart',
  BONUS_NUMBER_INPUT: '#bonus-number-input',
  PURCHASED_LOTTO_LIST_SECTION: '#purchased-lotto-list-section'
};
var CLASS_NAME = {
  DISABLED: 'disabled',
  TOGGLE_SWITCH: 'toggle-switch',
  DIRECTION_COLUMN: 'direction-column',
  INVISIBLE: 'invisible',
  HIDDEN: 'hidden'
};
var MONEY_STANDARD = 1000;
var RANK = {
  FIRST: 'first',
  SECOND: 'second',
  THIRD: 'third',
  FOURTH: 'fourth',
  FIFTH: 'fifth'
};
var RANK_PRIZE = (_RANK_PRIZE = {}, _defineProperty(_RANK_PRIZE, RANK.FIFTH, 5000), _defineProperty(_RANK_PRIZE, RANK.FOURTH, 50000), _defineProperty(_RANK_PRIZE, RANK.THIRD, 1500000), _defineProperty(_RANK_PRIZE, RANK.SECOND, 30000000), _defineProperty(_RANK_PRIZE, RANK.FIRST, 2000000000), _RANK_PRIZE);
var LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6
};
var ERROR_MESSAGE = {
  MONEY_OUT_OF_RANGE: "\uAD6C\uC785\uD560 \uAE08\uC561\uC744 \uC798\uBABB \uC785\uB825 \uD558\uC168\uC2B5\uB2C8\uB2E4. \uAD6C\uC785\uD560 \uAE08\uC561\uC740 ".concat(MONEY_STANDARD, "\uC6D0 \uC774\uC0C1\uC744 \uC785\uB825\uD574\uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4"),
  MONEY_OUT_OF_STANDARD: "\uAD6C\uC785\uD560 \uAE08\uC561\uC744 \uC798\uBABB \uC785\uB825 \uD558\uC168\uC2B5\uB2C8\uB2E4. \uAD6C\uC785\uD560 \uAE08\uC561\uC740 ".concat(MONEY_STANDARD, "\uC6D0 \uB2E8\uC704\uB85C \uC785\uB825\uD574\uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4"),
  NUMBER_OUT_OF_RANGE: "\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uBC88\uD638\uB610\uB294 \uBCF4\uB108\uC2A4 \uBC88\uD638\uB97C \uC798\uBABB \uC785\uB825\uD558\uC168\uC2B5\uB2C8\uB2E4. ".concat(LOTTO.MIN_NUMBER, " ~ ").concat(LOTTO.MAX_NUMBER, " \uC0AC\uC774\uC758 \uC22B\uC790\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"),
  DUPLICATE_NUMBER: '지난주 당첨 번호와 보너스 번호를 잘못 입력하셨습니다. 서로 다른 숫자를 입력해주세요'
};

/***/ }),

/***/ "./src/js/util/utils.js":
/*!******************************!*\
  !*** ./src/js/util/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPositiveInteger": () => (/* binding */ isPositiveInteger),
/* harmony export */   "isRemainder": () => (/* binding */ isRemainder),
/* harmony export */   "createRandomNumber": () => (/* binding */ createRandomNumber),
/* harmony export */   "createRandomNumberList": () => (/* binding */ createRandomNumberList),
/* harmony export */   "isOverRange": () => (/* binding */ isOverRange),
/* harmony export */   "winningCount": () => (/* binding */ winningCount),
/* harmony export */   "isBounusNumber": () => (/* binding */ isBounusNumber),
/* harmony export */   "isOverlapped": () => (/* binding */ isOverlapped),
/* harmony export */   "getWinningCountResult": () => (/* binding */ getWinningCountResult),
/* harmony export */   "getTotalWinningMoney": () => (/* binding */ getTotalWinningMoney),
/* harmony export */   "getWinningRate": () => (/* binding */ getWinningRate)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/util/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var isPositiveInteger = function isPositiveInteger(payment) {
  return Number.isInteger(payment) && payment > 0;
};
var isRemainder = function isRemainder(payment, price) {
  return payment % price !== 0;
};
var createRandomNumber = function createRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};
var createRandomNumberList = function createRandomNumberList() {
  var randomNumberList = [];

  while (randomNumberList.length < _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.LENGTH) {
    var random = createRandomNumber(_constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.MIN_NUMBER, _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.MAX_NUMBER);

    if (!randomNumberList.includes(random)) {
      randomNumberList.push(random);
    }
  }

  return randomNumberList;
};
var isOverRange = function isOverRange(minimum, maximum, number) {
  return number < minimum || number > maximum;
};
var winningCount = function winningCount(lotto, winningLotto) {
  return lotto.filter(function (number) {
    return winningLotto.includes(number);
  }).length;
};
var isBounusNumber = function isBounusNumber(lotto, bounusNumber) {
  return lotto.includes(bounusNumber);
};
var isOverlapped = function isOverlapped(winningLotto) {
  return new Set(winningLotto).size !== winningLotto.length;
};

var getRank = function getRank(count, bonusCount) {
  var sum = count + bonusCount;
  if (count === 6) return _constants__WEBPACK_IMPORTED_MODULE_0__.RANK.FIRST;
  if (sum === 6) return _constants__WEBPACK_IMPORTED_MODULE_0__.RANK.SECOND;
  if (sum === 5) return _constants__WEBPACK_IMPORTED_MODULE_0__.RANK.THIRD;
  if (sum === 4) return _constants__WEBPACK_IMPORTED_MODULE_0__.RANK.FOURTH;
  if (sum === 3) return _constants__WEBPACK_IMPORTED_MODULE_0__.RANK.FIFTH;
};

var getWinningCountResult = function getWinningCountResult(lottoList, winningNumber, bonusNumber) {
  var totalWinningCount = {
    fifth: 0,
    fourth: 0,
    third: 0,
    second: 0,
    first: 0
  };
  lottoList.forEach(function (lotto) {
    var count = winningCount(lotto, winningNumber);
    var bonusCount = isBounusNumber(lotto, bonusNumber);

    if (count + bonusCount > 2) {
      totalWinningCount[getRank(count, bonusCount)] += 1;
    }
  });
  return totalWinningCount;
};
var getTotalWinningMoney = function getTotalWinningMoney(rankCount) {
  return Object.entries(rankCount).reduce(function (sum, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return sum + value * _constants__WEBPACK_IMPORTED_MODULE_0__.RANK_PRIZE[key];
  }, 0);
};
var getWinningRate = function getWinningRate(totalMoney, lottoCount) {
  return Math.floor((totalMoney - lottoCount * _constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_STANDARD) / (lottoCount * _constants__WEBPACK_IMPORTED_MODULE_0__.MONEY_STANDARD) * 100);
};

/***/ }),

/***/ "./src/js/view/dom.js":
/*!****************************!*\
  !*** ./src/js/view/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "toggleClassName": () => (/* binding */ toggleClassName),
/* harmony export */   "toggleDisabled": () => (/* binding */ toggleDisabled),
/* harmony export */   "initInput": () => (/* binding */ initInput),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
var $ = function $(selector) {
  return document.querySelector(selector);
};
var $$ = function $$(selector) {
  return document.querySelectorAll(selector);
};
var toggleClassName = function toggleClassName(element, classname) {
  element.classList.toggle(classname);
};
var toggleDisabled = function toggleDisabled(element) {
  element.disabled = !element.disabled;
};
var initInput = function initInput(inputElement) {
  inputElement.value = '';
  inputElement.focus();
};
var render = function render(element, template) {
  element.insertAdjacentHTML('beforeend', template);
};

/***/ }),

/***/ "./src/js/view/templates.js":
/*!**********************************!*\
  !*** ./src/js/view/templates.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePaymentSection": () => (/* binding */ generatePaymentSection),
/* harmony export */   "generatePurchasedSection": () => (/* binding */ generatePurchasedSection),
/* harmony export */   "generateWinningNumberSection": () => (/* binding */ generateWinningNumberSection)
/* harmony export */ });
var generatePaymentSection = function generatePaymentSection() {
  return "\n  <section id=\"payment-section\">\n    <h2 hidden>\uAD6C\uC785\uD560 \uAE08\uC561</h2>\n    <label for=\"payment-input\">\uAD6C\uC785\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n    <form class=\"payment-form\">\n      <input name=\"payment-input\" id=\"payment-input\" type=\"number\" name=\"payment\" placeholder=\"\uAE08\uC561\" min=\"1000\" step=\"1000\" autofocus>\n      <button id=\"payment-button\">\uAD6C\uC785</button>\n    </form>\n  </section>\n  <section class=\"modal-background\"> \n      <div class=\"modal\">\n        <div class=\"modal-header\">\n          <button id=\"modal-close-button\">X</button>\n        </div>\n        <div class=\"modal-body\">\n          <h2 class=\"modal-title\">\uD83C\uDFC6 \uB2F9\uCCA8 \uD1B5\uACC4 \uD83C\uDFC6</h2>\n          <table>\n            <thead>\n              <tr>\n                <th>\uC77C\uCE58 \uAC1C\uC218</th>\n                <th>\uB2F9\uCCA8\uAE08</th>\n                <th>\uB2F9\uCCA8 \uAC1C\uC218</th>\n              </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>3\uAC1C</td>\n              <td>5,000</td>\n              <td class=\"winning-count\" data-rank='fifth'>\uAC1C</td>\n            </tr>\n            <tr>\n              <td>4\uAC1C</td>\n              <td>50,000</td>\n              <td class=\"winning-count\" data-rank='fourth'>\uAC1C</td>\n            </tr>\n            <tr>\n              <td>5\uAC1C</td>\n              <td>1,500,000</td>\n              <td class=\"winning-count\" data-rank='third'>\uAC1C</td>\n            </tr>\n            <tr>\n              <td>5\uAC1C+\uBCF4\uB108\uC2A4\uBCFC</td>\n              <td>30,000,000</td>\n              <td class=\"winning-count\" data-rank='second'>\uAC1C</td>\n            </tr>\n            <tr>\n              <td>6\uAC1C</td>\n              <td>2,000,000,000</td>\n              <td class=\"winning-count\" data-rank='first'>\uAC1C</td>\n            </tr>\n            </tbody>\n          </table>\n          <p class=\"modal-earning-weight\">\uB2F9\uC2E0\uC758 \uCD1D \uC218\uC775\uB960\uC740 <span class=\"earning-weight\"></span>%\uC785\uB2C8\uB2E4</p>\n          <button id=\"restart\">\uB2E4\uC2DC \uC2DC\uC791\uD558\uAE30</button>\n        </div>\n      </div> \n    </section>\n  ";
};

var generatePurchasedLotto = function generatePurchasedLotto(lotto) {
  return "\n  <li class=\"lotto\">\n    <p class=\"lotto-icon\">\uD83C\uDF9F\uFE0F</p>\n    <p class=\"lotto-number invisible\">".concat(lotto.join(', '), "</p>\n  </li>\n  ");
};

var generatePurchasedSection = function generatePurchasedSection(lottoList) {
  return "\n  <section id=\"purchased-lotto-list-section\">\n    <h2 hidden>\uAD6C\uC785\uD55C \uB85C\uB610 \uBAA9\uB85D</h2>\n    <div class=\"lotto-list-container\">\n      <p class=\"purchased-total-count\">\uCD1D ".concat(lottoList.length, "\uAC1C\uB97C \uAD6C\uB9E4\uD558\uC600\uC2B5\uB2C8\uB2E4.</p>\n      <ul id=\"lotto-list\">\n        ").concat(lottoList.map(function (lotto) {
    return generatePurchasedLotto(lotto);
  }).join(''), "\n      </ul>\n    </div>\n    <div class=\"lotto-list-toggle-container\">\n      <p>\uBC88\uD638 \uBCF4\uAE30</p>\n      <button id=\"lotto-list-toggle-button\"></button>\n    </div>\n  </section>\n  ");
};
var generateWinningNumberSection = function generateWinningNumberSection() {
  return "\n  <section id=\"winning-number-section\">\n    <h2 hidden>\uC9C0\uB09C \uC8FC \uB2F9\uCCA8 \uBC88\uD638</h2>\n    <p>\uC9C0\uB09C \uC8FC \uB2F9\uCCA8 \uBC88\uD638 6\uAC1C\uC640 \uBCF4\uB108\uC2A4 \uBC88\uD638 1\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</p>\n    <div class=\"winning-number-container\">\n      <form class=\"winning-number-form\">\n      <div class=\"winning-number-inputs\">\n        <div>\n          <p>\uB2F9\uCCA8 \uBC88\uD638</p>\n          <input type=\"number\" class=\"winning-number-input\" min=\"1\" max=\"45\" required/>\n          <input type=\"number\" class=\"winning-number-input\" min=\"1\" max=\"45\" required/>\n          <input type=\"number\" class=\"winning-number-input\" min=\"1\" max=\"45\" required/>\n          <input type=\"number\" class=\"winning-number-input\" min=\"1\" max=\"45\" required/>\n          <input type=\"number\" class=\"winning-number-input\" min=\"1\" max=\"45\" required/>\n          <input type=\"number\" class=\"winning-number-input\" min=\"1\" max=\"45\" required/>\n        </div>\n        <div class=\"bonus-number-container\">\n          <p>\uBCF4\uB108\uC2A4 \uBC88\uD638</p>\n          <input type=\"number\" class=\"winning-number-input\" id=\"bonus-number-input\" min=\"1\" max=\"45\" required required aria-invalid=\"false\"/>\n        </div>\n      </div>\n        <p class=\"error-text hidden\">\uD83D\uDEAB 1 ~ 45 \uC0AC\uC774\uC758 \uC22B\uC790\uB9CC \uC785\uB825\uD574 \uC8FC\uC138\uC694 \uD83D\uDEAB</p>\n        <button id=\"result-checking-button\">\uACB0\uACFC \uD655\uC778\uD558\uAE30</button>\n      </form>\n    </div>\n  </section>\n";
};

/***/ }),

/***/ "./src/js/view/view.js":
/*!*****************************!*\
  !*** ./src/js/view/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveFocusToNextNumber": () => (/* binding */ moveFocusToNextNumber),
/* harmony export */   "toggleDisablePayment": () => (/* binding */ toggleDisablePayment),
/* harmony export */   "generateResult": () => (/* binding */ generateResult),
/* harmony export */   "toggleButton": () => (/* binding */ toggleButton),
/* harmony export */   "modalClose": () => (/* binding */ modalClose)
/* harmony export */ });
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/constants */ "./src/js/util/constants.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/js/view/dom.js");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utils */ "./src/js/util/utils.js");




var checkInputRange = function checkInputRange(numberInput) {
  if (!numberInput.checkValidity()) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS.ERROR_TEXT).classList.remove(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME.HIDDEN);
  }

  if (Array.from((0,_dom__WEBPACK_IMPORTED_MODULE_1__.$$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS.WINNING_NUMBER_INPUT)).every(function (element) {
    return element.checkValidity();
  })) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS.ERROR_TEXT).classList.add(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME.HIDDEN);
  }
};

var moveFocusToNextNumber = function moveFocusToNextNumber() {
  var $winningNumberInputs = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.$$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS.WINNING_NUMBER_INPUT);
  var $bonusNumberInput = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.ID.BONUS_NUMBER_INPUT);
  $winningNumberInputs[0].focus();
  $winningNumberInputs.forEach(function (numberInput, index) {
    numberInput.addEventListener('input', function () {
      checkInputRange(numberInput);

      if (numberInput.value.length === 2) {
        if (index === 5) {
          $bonusNumberInput.focus();
          return;
        }

        if (index === 6) {
          return;
        }

        $winningNumberInputs[index + 1].focus();
      }
    });
  });
};
var toggleDisablePayment = function toggleDisablePayment() {
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClassName)((0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.ID.PAYMENT_BUTTON), _util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME.DISABLED);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleDisabled)((0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.ID.PAYMENT_BUTTON));
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleDisabled)((0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.ID.PAYMENT_INPUT));
};
var generateResult = function generateResult(lottoList, winningNumber, bonusNumber) {
  var winningCountResult = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__.getWinningCountResult)(lottoList.getPurchasedLotto(), winningNumber, bonusNumber);
  var totalMoney = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__.getTotalWinningMoney)(winningCountResult);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.$$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS.WINNING_COUNT).forEach(function (element) {
    element.textContent = "".concat(winningCountResult[element.dataset.rank], "\uAC1C");
  });
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS.EARNING_WEIGHT).textContent = (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__.getWinningRate)(totalMoney, lottoList.count());
};
var toggleButton = function toggleButton() {
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClassName)((0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.ID.LOTTO_LIST_TOGGLE_BUTTON), _util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME.TOGGLE_SWITCH);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClassName)((0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.ID.LOTTO_LIST), _util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME.DIRECTION_COLUMN);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.$$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS.LOTTO_NUMBER).forEach(function (element) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClassName)(element, _util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME.INVISIBLE);
  });
};
var modalClose = function modalClose() {
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.$)(_util_constants__WEBPACK_IMPORTED_MODULE_0__.CLASS.MODAL_BACKGROUND).classList.remove('show');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/toggle_off.svg */ "./images/toggle_off.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/toggle_on.svg */ "./images/toggle_on.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* font Roboto */\n/* reset css */\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #E5E5E5;\n  height: 100vh;\n}\n\n/* COMMON */\np,\nlabel {\n  font-size: 15px;\n  line-height: 24px;\n\tletter-spacing: 0.5px;\n\tcolor: rgba(0, 0, 0, 0.87);\n}\n\ninput {\n  border: 1px solid #B4B4B4;\n}\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput:focus {\n  outline: 1px solid #00BCD4;\n  border: none;\n}\n\ninput:invalid {\n  border: none;\n  outline: 1.5px solid #E36DB0;\n  background-color: #fcdfef;\n}\n\n.error-text {\n  color: #E36DB0;\n  text-align: center;\n}\n\nbutton {\n  background: inherit; \n  border: none; \n  box-shadow: none; \n  padding: 0; \n  overflow: visible; \n  cursor: pointer;\n}\n\n.invisible {\n  display: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n#payment-section .payment-form #payment-button.disabled {\n  background-color: #828282;\n  opacity: 0.6;\n  cursor: default;\n  pointer-events: none;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-color: white;\n\n  padding: 0 16px;\n\n  height: 727px;\n  width: 414px;\n}\n\nh1 {\n  font-size: 34px;\n  font-weight: 600;\n  line-height: 36px;\n\n  text-align: center;\n  \n  margin-top: 52px;\n  margin-bottom: 16px;\n}\n\n/* payment-section */\n#payment-section {\n\tmargin-bottom: 28px;\n}\n\n#payment-section label {\n  display: block;\n}\n\n#payment-section .payment-form {\n\tdisplay: flex;\n}\n\n#payment-section .payment-form #payment-input {\n  flex-grow: 1;\n\n\tborder-radius: 4px;\n\tpadding: 8px 8px;\n\n  margin-right: 16px;\n}\n\n#payment-section .payment-form #payment-input::placeholder {\n\tfont-size: 15px;\n\tline-height: 24px;\n\tletter-spacing: 0.5px;\n  margin: 0 10px;\n  color: #8B8B8B;\n}\n\n#payment-section .payment-form #payment-button {\n  width: 56px;\n  height: 36px;\n}\n\n#payment-section .payment-form #payment-button,\n#result-checking-button {\n\tbackground-color: #00BCD4;\n\tcolor: white;\n\tborder-radius: 4px;\n  font-weight: 700;\n  font-size: 14px;\n}\n\n/* purchased-lotto-list section */\n#purchased-lotto-list-section {\n\tdisplay: flex;\n  justify-content: space-between;\n\tmargin-bottom: 32px;\n}\n\n#purchased-lotto-list-section .lotto-list-container .purchased-total-count{\n\tmargin-bottom: 8px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list {\n  width: 300px;\n  max-height: 250px;\n\tdisplay: flex;\n  flex-wrap: wrap;\n  overflow-y: auto;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list.direction-column {\n  flex-direction: column;\n  overflow-y: auto;\n  flex-wrap: nowrap;\n  gap: 4px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list .lotto-icon {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  margin-right: 8px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list .lotto {\n  display: flex;\n  align-items: center;\n}\n\n#purchased-lotto-list-section .lotto-list-toggle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#purchased-lotto-list-section .lotto-list-toggle-container p {\n\tmargin-bottom: 12px;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button {\n  width: 34px;\n  height: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button.toggle-switch {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n/* winning-number-section */\n#winning-number-section p {\n  margin-bottom: 8px;\n}\n\n#winning-number-section .winning-number-form .winning-number-inputs{\n  display: flex;\n\tjustify-content: space-between;\n  margin-bottom: 24px;\n}\n\n#winning-number-section .winning-number-container #winning-number-list {\n\tdisplay: flex;\n\tgap: 8px;\n}\n\n#winning-number-section .winning-number-container .bonus-number-container{\n\tdisplay: flex;\n  flex-direction: column;\n\talign-items: flex-end;\n}\n\n#winning-number-section .winning-number-container  .winning-number-input {\n\twidth: 34px;\n\theight: 36px;\n\tborder-radius: 4px;\n  padding: 0;\n\ttext-align: center;\n}\n\n#winning-number-section .winning-number-container #result-checking-button {\n  width: 382px;\n\theight: 36px;\n}\n\n/* modal */\n.modal-background {\n  position: absolute; \n  top: 0; \n  left: 0; \n  width: 100%; \n  height: 100%; \n  display: none; \n  background-color: rgba(0, 0, 0, 0.5);; \n} \n\n.modal-background.show { \n  display: block; \n} \n\n.modal { \n  position: absolute; \n  top: 50%; \n  left: 50%; \n  width: 350px;\n  height: 500px;   \n  padding: 16px; \n  background-color: rgb(255, 255, 255); \n  border-radius: 4px;\n  transform: translateX(-50%) translateY(-50%); \n}\n\n.modal-header {\n  text-align: right;\n}\n\n.modal-body {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.modal-title {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  margin-bottom: 32px;\n}\n\ntable {\n  border-top: 1px solid #DCDCDC;;\n  border-collapse: collapse;\n  text-align: center;\n  margin-bottom: 16px;\n}\n\nth {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  border-bottom: 1px solid #DCDCDC;\n  padding: 8px;\n}\n\ntr {\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 24px;\n  border-bottom: 1px solid #DCDCDC;\n}\n\ntd {\n  padding: 8px;\n}\n.modal-earning-weight {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n}\n\n#restart {\n  padding: 10px 30px;\n  position: absolute;\n  width: 152px;\n  height: 36px;\n  left: 99px;\n  top: 415px;\n  background: #00BCD4;\n  border-radius: 4px;\n  color: white;\n}\n\n#payment-section .payment-form #payment-button:hover,\n#result-checking-button:hover,\n#restart:hover {\n  background-color: #82d2df;\n  transition: 0.3s;\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB,cAAc;;AAGd;EACE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;AACf;;AAEA,WAAW;AACX;;EAEE,eAAe;EACf,iBAAiB;CAClB,qBAAqB;CACrB,0BAA0B;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,qCAAqC;EACrC,kBAAkB;EAClB,uBAAuB;;EAEvB,eAAe;;EAEf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;;EAEjB,kBAAkB;;EAElB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA,oBAAoB;AACpB;CACC,mBAAmB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;CACC,aAAa;AACd;;AAEA;EACE,YAAY;;CAEb,kBAAkB;CAClB,gBAAgB;;EAEf,kBAAkB;AACpB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,qBAAqB;EACpB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;CAEC,yBAAyB;CACzB,YAAY;CACZ,kBAAkB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA,iCAAiC;AACjC;CACC,aAAa;EACZ,8BAA8B;CAC/B,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;EACE,YAAY;EACZ,iBAAiB;CAClB,aAAa;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAAoD;EACpD,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,yDAAmD;AACrD;;AAEA,2BAA2B;AAC3B;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;CACd,8BAA8B;EAC7B,mBAAmB;AACrB;;AAEA;CACC,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,aAAa;EACZ,sBAAsB;CACvB,qBAAqB;AACtB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;EACjB,UAAU;CACX,kBAAkB;AACnB;;AAEA;EACE,YAAY;CACb,YAAY;AACb;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,aAAa;EACb,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,4CAA4C;AAC9C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;AACd;;AAEA;;;EAGE,yBAAyB;EACzB,gBAAgB;AAClB","sourcesContent":["/* font Roboto */\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n/* reset css */\n@import url('https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css');\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #E5E5E5;\n  height: 100vh;\n}\n\n/* COMMON */\np,\nlabel {\n  font-size: 15px;\n  line-height: 24px;\n\tletter-spacing: 0.5px;\n\tcolor: rgba(0, 0, 0, 0.87);\n}\n\ninput {\n  border: 1px solid #B4B4B4;\n}\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput:focus {\n  outline: 1px solid #00BCD4;\n  border: none;\n}\n\ninput:invalid {\n  border: none;\n  outline: 1.5px solid #E36DB0;\n  background-color: #fcdfef;\n}\n\n.error-text {\n  color: #E36DB0;\n  text-align: center;\n}\n\nbutton {\n  background: inherit; \n  border: none; \n  box-shadow: none; \n  padding: 0; \n  overflow: visible; \n  cursor: pointer;\n}\n\n.invisible {\n  display: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n#payment-section .payment-form #payment-button.disabled {\n  background-color: #828282;\n  opacity: 0.6;\n  cursor: default;\n  pointer-events: none;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-color: white;\n\n  padding: 0 16px;\n\n  height: 727px;\n  width: 414px;\n}\n\nh1 {\n  font-size: 34px;\n  font-weight: 600;\n  line-height: 36px;\n\n  text-align: center;\n  \n  margin-top: 52px;\n  margin-bottom: 16px;\n}\n\n/* payment-section */\n#payment-section {\n\tmargin-bottom: 28px;\n}\n\n#payment-section label {\n  display: block;\n}\n\n#payment-section .payment-form {\n\tdisplay: flex;\n}\n\n#payment-section .payment-form #payment-input {\n  flex-grow: 1;\n\n\tborder-radius: 4px;\n\tpadding: 8px 8px;\n\n  margin-right: 16px;\n}\n\n#payment-section .payment-form #payment-input::placeholder {\n\tfont-size: 15px;\n\tline-height: 24px;\n\tletter-spacing: 0.5px;\n  margin: 0 10px;\n  color: #8B8B8B;\n}\n\n#payment-section .payment-form #payment-button {\n  width: 56px;\n  height: 36px;\n}\n\n#payment-section .payment-form #payment-button,\n#result-checking-button {\n\tbackground-color: #00BCD4;\n\tcolor: white;\n\tborder-radius: 4px;\n  font-weight: 700;\n  font-size: 14px;\n}\n\n/* purchased-lotto-list section */\n#purchased-lotto-list-section {\n\tdisplay: flex;\n  justify-content: space-between;\n\tmargin-bottom: 32px;\n}\n\n#purchased-lotto-list-section .lotto-list-container .purchased-total-count{\n\tmargin-bottom: 8px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list {\n  width: 300px;\n  max-height: 250px;\n\tdisplay: flex;\n  flex-wrap: wrap;\n  overflow-y: auto;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list.direction-column {\n  flex-direction: column;\n  overflow-y: auto;\n  flex-wrap: nowrap;\n  gap: 4px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list .lotto-icon {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n  margin-right: 8px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list .lotto {\n  display: flex;\n  align-items: center;\n}\n\n#purchased-lotto-list-section .lotto-list-toggle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#purchased-lotto-list-section .lotto-list-toggle-container p {\n\tmargin-bottom: 12px;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button {\n  width: 34px;\n  height: 20px;\n  background-image: url(\"../../images/toggle_off.svg\");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button.toggle-switch {\n  background-image: url(\"../../images/toggle_on.svg\");\n}\n\n/* winning-number-section */\n#winning-number-section p {\n  margin-bottom: 8px;\n}\n\n#winning-number-section .winning-number-form .winning-number-inputs{\n  display: flex;\n\tjustify-content: space-between;\n  margin-bottom: 24px;\n}\n\n#winning-number-section .winning-number-container #winning-number-list {\n\tdisplay: flex;\n\tgap: 8px;\n}\n\n#winning-number-section .winning-number-container .bonus-number-container{\n\tdisplay: flex;\n  flex-direction: column;\n\talign-items: flex-end;\n}\n\n#winning-number-section .winning-number-container  .winning-number-input {\n\twidth: 34px;\n\theight: 36px;\n\tborder-radius: 4px;\n  padding: 0;\n\ttext-align: center;\n}\n\n#winning-number-section .winning-number-container #result-checking-button {\n  width: 382px;\n\theight: 36px;\n}\n\n/* modal */\n.modal-background {\n  position: absolute; \n  top: 0; \n  left: 0; \n  width: 100%; \n  height: 100%; \n  display: none; \n  background-color: rgba(0, 0, 0, 0.5);; \n} \n\n.modal-background.show { \n  display: block; \n} \n\n.modal { \n  position: absolute; \n  top: 50%; \n  left: 50%; \n  width: 350px;\n  height: 500px;   \n  padding: 16px; \n  background-color: rgb(255, 255, 255); \n  border-radius: 4px;\n  transform: translateX(-50%) translateY(-50%); \n}\n\n.modal-header {\n  text-align: right;\n}\n\n.modal-body {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.modal-title {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n  margin-bottom: 32px;\n}\n\ntable {\n  border-top: 1px solid #DCDCDC;;\n  border-collapse: collapse;\n  text-align: center;\n  margin-bottom: 16px;\n}\n\nth {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  border-bottom: 1px solid #DCDCDC;\n  padding: 8px;\n}\n\ntr {\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 24px;\n  border-bottom: 1px solid #DCDCDC;\n}\n\ntd {\n  padding: 8px;\n}\n.modal-earning-weight {\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n}\n\n#restart {\n  padding: 10px 30px;\n  position: absolute;\n  width: 152px;\n  height: 36px;\n  left: 99px;\n  top: 415px;\n  background: #00BCD4;\n  border-radius: 4px;\n  color: white;\n}\n\n#payment-section .payment-form #payment-button:hover,\n#result-checking-button:hover,\n#restart:hover {\n  background-color: #82d2df;\n  transition: 0.3s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./images/toggle_off.svg":
/*!*******************************!*\
  !*** ./images/toggle_off.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ce49890bd05ce1e4a1d.svg";

/***/ }),

/***/ "./images/toggle_on.svg":
/*!******************************!*\
  !*** ./images/toggle_on.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e528c4b32572cb18db2.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");
/* harmony import */ var _js_LottoApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/LottoApp */ "./src/js/LottoApp.js");


new _js_LottoApp__WEBPACK_IMPORTED_MODULE_1__["default"]('#app');
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map