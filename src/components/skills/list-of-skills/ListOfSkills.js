import React, { Component } from 'react';

import SkillsItem from './skills-item/SkillsItem'
import './SkillsItem.css';


class ListOfSkills extends Component {

  render() {
    return (
        <div className="ListOfSkills">
            <h2>{this.props.name}</h2>
            <ul className="ListOfSkills">
                {this.props.data.map(item => {
                    return (<SkillsItem value={item} />);
                })}
            </ul>
        </div>
    );
  }
}

export default ListOfSkills;