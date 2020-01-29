'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quizzes = [{
  id: 1234,
  question: 'Which game do you like most',
  options: [{ id: 1, option: 'CS GO' }, { id: 2, option: 'WW 2' }, { id: 3, option: 'PUBG' }, { id: 4, option: 'Cyber Hunter' }]
}, {
  id: 2243,
  question: 'Which actress do you like most',
  options: [{ id: 11, option: 'Tapsee' }, { id: 22, option: 'Disha' }, { id: 33, option: 'Jacquiline' }, { id: 44, option: 'Sarah' }]
}];

var QuizApp = function (_React$Component) {
  _inherits(QuizApp, _React$Component);

  function QuizApp(props) {
    _classCallCheck(this, QuizApp);

    var _this = _possibleConstructorReturn(this, (QuizApp.__proto__ || Object.getPrototypeOf(QuizApp)).call(this, props));
    // const localAnswers = JSON.parse(localStorage.getItem('userAnswers'))


    _this.state = {
      //userAnswers: localAnswers? localAnswers: {}
      userAnswers: {}
    };
    _this.optionChangeHandler = _this.optionChangeHandler.bind(_this);
    return _this;
  }

  _createClass(QuizApp, [{
    key: 'optionChangeHandler',
    value: function optionChangeHandler(questionId, answerId) {
      var answer = {};
      answer[questionId] = answerId;
      this.setState(function (prevState) {
        var updatedState = Object.assign(prevState.userAnswers, answer);
        return {
          userAnswers: updatedState
        };
      });
      // localStorage.setItem('userAnswers', JSON.stringify(this.state.userAnswers));
      // console.log(this.state, JSON.parse(localStorage.getItem('userAnswers')));
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'QuizApp';
      var subtitle = 'Hello... can you answer these questions ?';
      var status = '1/10 questions has been answered';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(QuizStatus, { status: status }),
        React.createElement(Quizzes, {
          quizzes: quizzes,
          userAnswers: this.state.userAnswers,
          optionChangeHandler: this.optionChangeHandler
        }),
        React.createElement(Action, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return QuizApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          this.props.title
        ),
        React.createElement(
          'div',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var QuizStatus = function (_React$Component3) {
  _inherits(QuizStatus, _React$Component3);

  function QuizStatus() {
    _classCallCheck(this, QuizStatus);

    return _possibleConstructorReturn(this, (QuizStatus.__proto__ || Object.getPrototypeOf(QuizStatus)).apply(this, arguments));
  }

  _createClass(QuizStatus, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          this.props.status
        )
      );
    }
  }]);

  return QuizStatus;
}(React.Component);

var Quizzes = function (_React$Component4) {
  _inherits(Quizzes, _React$Component4);

  function Quizzes() {
    _classCallCheck(this, Quizzes);

    return _possibleConstructorReturn(this, (Quizzes.__proto__ || Object.getPrototypeOf(Quizzes)).apply(this, arguments));
  }

  _createClass(Quizzes, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      return this.props.quizzes.map(function (quiz, index) {
        return React.createElement(Quiz, {
          key: quiz.id,
          quiz: quiz,
          questionId: quiz.id,
          index: index,
          userAnswers: _this5.props.userAnswers,
          optionChangeHandler: _this5.props.optionChangeHandler
        });
      });
    }
  }]);

  return Quizzes;
}(React.Component);

var Quiz = function (_React$Component5) {
  _inherits(Quiz, _React$Component5);

  function Quiz() {
    _classCallCheck(this, Quiz);

    return _possibleConstructorReturn(this, (Quiz.__proto__ || Object.getPrototypeOf(Quiz)).apply(this, arguments));
  }

  _createClass(Quiz, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Question, { question: this.props.quiz.question, index: this.props.index }),
        React.createElement(Options, {
          options: this.props.quiz.options,
          questionId: this.props.questionId,
          userChoseOptionId: this.props.userAnswers[this.props.questionId],
          optionChangeHandler: this.props.optionChangeHandler
        })
      );
    }
  }]);

  return Quiz;
}(React.Component);

var Question = function (_React$Component6) {
  _inherits(Question, _React$Component6);

  function Question() {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).apply(this, arguments));
  }

  _createClass(Question, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        ' ',
        this.props.index + 1,
        '. ',
        this.props.question
      );
    }
  }]);

  return Question;
}(React.Component);

var Options = function (_React$Component7) {
  _inherits(Options, _React$Component7);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var _this9 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          null,
          this.props.options.map(function (optionObj) {
            return React.createElement(Option, {
              key: optionObj.id,
              optionText: optionObj.option,
              optionId: optionObj.id,
              questionId: _this9.props.questionId,
              userChoseOptionId: _this9.props.userChoseOptionId,
              optionChangeHandler: _this9.props.optionChangeHandler
            });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component8) {
  _inherits(Option, _React$Component8);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this10 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this10.optionChangeHandler = _this10.optionChangeHandler.bind(_this10);
    return _this10;
  }

  _createClass(Option, [{
    key: 'optionChangeHandler',
    value: function optionChangeHandler(e) {
      this.props.optionChangeHandler(e.target.name, Number(e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: 'option' },
        React.createElement('input', {
          type: 'radio',
          className: 'radioCustomButton',
          name: this.props.questionId,
          value: this.props.optionId,
          defaultChecked: this.props.optionId == this.props.userChoseOptionId,
          onChange: this.optionChangeHandler
        }),
        React.createElement(
          'label',
          { className: 'optionLabel' },
          this.props.optionText
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var Action = function (_React$Component9) {
  _inherits(Action, _React$Component9);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this11 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

    _this11.handleQuizSubmit = _this11.handleQuizSubmit.bind(_this11);
    return _this11;
  }

  _createClass(Action, [{
    key: 'handleQuizSubmit',
    value: function handleQuizSubmit() {
      alert('Sure to submit ?');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            {
              type: 'submit',
              onClick: this.handleQuizSubmit
            },
            'Submit'
          )
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Footer = function (_React$Component10) {
  _inherits(Footer, _React$Component10);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          'This is footer Component'
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

ReactDOM.render(React.createElement(QuizApp, null), document.getElementById('app'));
