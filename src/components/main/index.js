import React, { Component } from 'react';

class Main extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Main">
        <header className="Main-header">
          <h1 className="Main-info">{content.mainTitle}</h1>
        </header>
        
        <p className="Content">{content.main}</p>
      </div>
    );
  }
}

export default Main;
