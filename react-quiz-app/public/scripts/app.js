"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var questions = [{
  id: 1234,
  question: 'Which game do you like most',
  options: [{
    id: 1,
    option: 'CS GO'
  }, {
    id: 2,
    option: 'WW 2'
  }, {
    id: 3,
    option: 'PUBG'
  }, {
    id: 4,
    option: 'Cyber Hunter'
  }]
}, {
  id: 2243,
  question: 'Which actress do you like most',
  options: [{
    id: 11,
    option: 'Tapsee'
  }, {
    id: 22,
    option: 'Disha'
  }, {
    id: 33,
    option: 'Jacquiline'
  }, {
    id: 44,
    option: 'Sarah'
  }]
}, {
  id: 3451,
  question: 'Best time wo wake up ?',
  options: [{
    id: 111,
    option: '6am'
  }, {
    id: 222,
    option: '7am'
  }, {
    id: 333,
    option: '8am'
  }, {
    id: 444,
    option: '12am'
  }]
}];

var QuizApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuizApp, _React$Component);

  function QuizApp(props) {
    var _this;

    _classCallCheck(this, QuizApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuizApp).call(this, props));
    _this.state = {
      answers: {}
    };
    _this.optionChangeHandler = _this.optionChangeHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(QuizApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('answers');
        var answers = JSON.parse(json);

        if (answers) {
          this.setState(function () {
            return {
              answers: answers
            };
          });
        }
      } catch (error) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (JSON.stringify(prevState.answers) !== JSON.stringify(this.state.answers)) {
        var json = JSON.stringify(this.state.answers);
        localStorage.setItem('answers', json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  }, {
    key: "optionChangeHandler",
    value: function optionChangeHandler(questionId, answerId) {
      var answer = {};
      answer[questionId] = answerId;
      this.setState(function (prevState) {
        return {
          answers: _objectSpread({}, prevState.answers, {}, answer)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = 'Hello... can you answer these questions ?';
      return React.createElement("div", null, React.createElement(Header, {
        subtitle: subtitle
      }), React.createElement(Status, {
        questionsLength: questions.length,
        answersLength: Object.keys(this.state.answers).length
      }), React.createElement(Questions, {
        questions: questions,
        answers: this.state.answers,
        optionChangeHandler: this.optionChangeHandler
      }), React.createElement(Action, null), React.createElement(Footer, null));
    }
  }]);

  return QuizApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("div", null, props.title), props.subtitle && React.createElement("div", null, props.subtitle));
};

Header.defaultProps = {
  title: 'QuizApp'
};

var Status = function Status(props) {
  return React.createElement("div", null, props.answersLength === props.questionsLength ? React.createElement("p", null, "Every question has been answered") : React.createElement("p", null, "You have answered ", props.answersLength, "/", props.questionsLength));
};

var Questions = function Questions(props) {
  return props.questions.map(function (questionObj, index) {
    return React.createElement(QuestionCard, {
      key: index,
      questionObj: questionObj,
      index: index,
      answers: props.answers,
      optionChangeHandler: props.optionChangeHandler
    });
  });
};

var QuestionCard = function QuestionCard(props) {
  return React.createElement("div", null, React.createElement(Question, {
    questionText: props.questionObj.question,
    index: props.index
  }), React.createElement(Options, {
    options: props.questionObj.options,
    questionId: props.questionObj.id,
    userChoseOptionId: props.answers[props.questionObj.id],
    optionChangeHandler: props.optionChangeHandler
  }));
};

var Question = function Question(props) {
  return React.createElement("div", null, " ", props.index + 1, ". ", props.questionText);
};

var Options = function Options(props) {
  return React.createElement("div", null, React.createElement("ul", null, props.options.map(function (optionObj, index) {
    return React.createElement(Option, {
      key: index,
      optionText: optionObj.option,
      optionId: optionObj.id,
      questionId: props.questionId,
      userChoseOptionId: props.userChoseOptionId,
      optionChangeHandler: props.optionChangeHandler
    });
  })));
};

var Option =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Option, _React$Component2);

  function Option(props) {
    var _this2;

    _classCallCheck(this, Option);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Option).call(this, props));
    _this2.optionChangeHandler = _this2.optionChangeHandler.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Option, [{
    key: "optionChangeHandler",
    value: function optionChangeHandler(e) {
      this.props.optionChangeHandler(e.target.name, Number(e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("li", {
        className: "option"
      }, React.createElement("input", {
        type: "radio",
        className: "radioCustomButton",
        name: this.props.questionId,
        value: this.props.optionId,
        checked: this.props.optionId === this.props.userChoseOptionId,
        onChange: this.optionChangeHandler
      }), React.createElement("label", {
        className: "optionLabel"
      }, this.props.optionText));
    }
  }]);

  return Option;
}(React.Component);

var Action =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    var _this3;

    _classCallCheck(this, Action);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Action).call(this, props));
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(Action, [{
    key: "handleSubmit",
    value: function handleSubmit() {
      alert('Sure to submit ?');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        type: "submit",
        onClick: this.handleSubmit
      }, "Submit"));
    }
  }]);

  return Action;
}(React.Component);

var Footer = function Footer() {
  return React.createElement("div", null, React.createElement("div", null, "This is footer Component"));
};

ReactDOM.render(React.createElement(QuizApp, null), document.getElementById('app'));
