import React, { Component } from 'react';

import './SkillsItem.css';


class SkillsItem extends Component {
  render() {
    return (
        <li key={this.props.value.toString()}>{this.props.value}</li>        
    );
  }
}

export default SkillsItem;
