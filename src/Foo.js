import React, { Component } from 'react';
// import ReactDOM from "react-dom";

import './Foo.css';


class Foo extends Component {
  render() {
    return (
      <div className="Foo">
<p>Имя: {this.props.name}</p>
<p>Возраст: {this.props.age}</p>         

    </div>
    );
  }
}

export default Foo;
