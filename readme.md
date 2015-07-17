# express-render-jsx [![Build Status](https://travis-ci.org/floatdrop/express-render-jsx.svg?branch=master)](https://travis-ci.org/floatdrop/express-render-jsx)

> Render jsx templates from Express


## Install

```
$ npm install --save express-render-jsx
```


## Usage

```js
var app = express();
var expressRenderJsx = require('express-render-jsx');

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-render-jsx'));
```

Your views should be node modules that export a React component. Let's assume you have this file in `views/index.jsx`:

```jsx
var React = require('react');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

module.exports = HelloMessage;
```

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
