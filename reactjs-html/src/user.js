class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: 0
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleChangeLastName(e) {
    this.setState(
      { lastName: e.target.value }
    );
  }

  handleChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = `${this.state.firstName} ${this.state.lastName}`;
    let age = this.state.age;

    console.log(name, age);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input type="text" name='firstName' value={this.state.firstName} onChange={this.handleChangeFirstName} /> <br />
          <label>Last Name</label>
          <input type="text" name='lastName' value={this.state.lastName} onChange={this.handleChangeLastName} /> <br />
          <label>Age</label>
          <input name='age' type='number' value={this.state.age} onChange={this.handleChangeAge} /> <br />
          <input type='Submit' value='Submit' />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<User />, document.getElementById('user'));