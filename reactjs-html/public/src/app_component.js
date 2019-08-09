var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var _this$props = _this.props,
        firstName = _this$props.firstName,
        lastName = _this$props.lastName,
        age = _this$props.age;

    _this.name = firstName + ' ' + lastName;
    _this.age = age;
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          '***App Component***'
        ),
        React.createElement(Welcome, { name: this.name, age: this.age }),
        React.createElement(Welcome, null),
        React.createElement(Welcome, null)
      );
    }
  }]);

  return App;
}(React.Component);

var Welcome = function (_React$Component2) {
  _inherits(Welcome, _React$Component2);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  _createClass(Welcome, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h4',
        null,
        'Name: ',
        this.props.name + ', ',
        'Age: ',
        this.props.age
      );
    }
  }]);

  return Welcome;
}(React.Component);

var appElements = [];
// appElements.push(<App firstName='Aakash' lastName='Verma' age='26' />);
// appElements.push(<App firstName='Ankit' lastName='Chawla' age='26' />);
// appElements.push(<App firstName='Zeeshan' lastName='Albedin' age='26' />);

appElements.push({ firstName: 'Zeeshan', lastName: 'Albedin', age: '26' });
appElements.push({ firstName: 'Aakash', lastName: 'Verma', age: '26' });

var appElement = React.createElement(App, { persons: appElements });
ReactDOM.render(appElement, document.getElementById('app_component'));