function tick() {
  var element = React.createElement(
    'div',
    { style: style },
    React.createElement(
      'h2',
      null,
      'It is ',
      new Date().toLocaleTimeString(),
      '.'
    )
  );
  ReactDOM.render(element, document.getElementById('tick'));
}

setInterval(tick, 1000);

var style = {
  color: 'blue'
};