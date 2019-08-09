class App extends React.Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, age } = this.props;
    this.name = `${firstName} ${lastName}`;
    this.age = age;
  }
  render() {
    return (
      <div>
        <h3>***App Component***</h3>
        <Welcome name={this.name} age={this.age} />
        <Welcome />
        <Welcome />
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <h4>
        Name: {`${this.props.name}, `}
        Age: {this.props.age}
      </h4>
    )
  }
}

const appElements = [];
// appElements.push(<App firstName='Aakash' lastName='Verma' age='26' />);
// appElements.push(<App firstName='Ankit' lastName='Chawla' age='26' />);
// appElements.push(<App firstName='Zeeshan' lastName='Albedin' age='26' />);

appElements.push({ firstName: 'Zeeshan', lastName: 'Albedin', age: '26' });
appElements.push({ firstName: 'Aakash', lastName: 'Verma', age: '26' });

const appElement = <App persons={appElements} />
ReactDOM.render(appElement, document.getElementById('app_component'));