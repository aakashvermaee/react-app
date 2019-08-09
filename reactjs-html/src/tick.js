function tick() {
  const element = (
    <div style={style}>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('tick'));
}

setInterval(tick, 1000);

const style = {
  color: 'blue'
}