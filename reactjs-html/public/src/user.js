var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
  _inherits(User, _React$Component);

  function User(props) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

    _this.state = {
      firstName: '',
      lastName: '',
      age: 0
    };

    _this.handleChangeFirstName = _this.handleChangeFirstName.bind(_this);
    _this.handleChangeLastName = _this.handleChangeLastName.bind(_this);
    _this.handleChangeAge = _this.handleChangeAge.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(User, [{
    key: 'handleChangeFirstName',
    value: function handleChangeFirstName(e) {
      this.setState({
        firstName: e.target.value
      });
    }
  }, {
    key: 'handleChangeLastName',
    value: function handleChangeLastName(e) {
      this.setState({ lastName: e.target.value });
    }
  }, {
    key: 'handleChangeAge',
    value: function handleChangeAge(e) {
      this.setState({
        age: e.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var name = this.state.firstName + ' ' + this.state.lastName;
      var age = this.state.age;

      console.log(name, age);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(
            'label',
            null,
            'First Name'
          ),
          React.createElement('input', { type: 'text', name: 'firstName', value: this.state.firstName, onChange: this.handleChangeFirstName }),
          ' ',
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'Last Name'
          ),
          React.createElement('input', { type: 'text', name: 'lastName', value: this.state.lastName, onChange: this.handleChangeLastName }),
          ' ',
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'Age'
          ),
          React.createElement('input', { name: 'age', type: 'number', value: this.state.age, onChange: this.handleChangeAge }),
          ' ',
          React.createElement('br', null),
          React.createElement('input', { type: 'Submit', value: 'Submit' })
        )
      );
    }
  }]);

  return User;
}(React.Component);

ReactDOM.render(React.createElement(User, null), document.getElementById('user'));