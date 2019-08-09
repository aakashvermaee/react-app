class Welcome extends React.Component {
  render() {
    return (
      <h3>
        Name: {''.concat(this.props.firstName, ' ', this.props.lastName, ' ')}
        Age: {this.props.age}
      </h3>
    )
  }
}

const welcomeElement = <Welcome firstName='Aakash' lastName='Verma' age='26' />
ReactDOM.render(welcomeElement, document.getElementById('welcome_props'));