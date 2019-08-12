class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000);
    console.log('TimerID:', this.timerID);
  }

  componentWillUnmount() {
    console.log('Clearing Timer: ', this.timerID);
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={(e) => this.componentWillUnmount()}>Clear Timer</button>
        <button onClick={(e) => this.componentDidMount()}>Resume Timer</button>
      </div>
    );
  }
}

const clockElement = (
  <div>
    <Clock />
    <Clock />
    <Clock />
  </div>
)

ReactDOM.render(clockElement, document.getElementById('clock'));
// ReactDOM.render(<Clock />, document.getElementById('clock'));