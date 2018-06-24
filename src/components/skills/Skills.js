import React, { Component } from 'react';

import ListOfSkills from './list-of-skills/ListOfSkills'

import './Skills.css';

const progSkills = ['one', 'two', 'three'];
const frameworksSkills = ['frameOne', 'frameTwo', 'frameThree'];
const bdSkills = ['bd', 'sql', 'mongo'];


class Skills extends Component {
  render() {
    return (
      <div className="Skills"> 
        <h1>{this.props.title}</h1>
        <hr />
        <ListOfSkills data={progSkills} name="Programming Languages/Technologies" />
        <ListOfSkills data={frameworksSkills} name="Frameworks" />
        <ListOfSkills data={bdSkills} name="RDBMS" />
      </div>
    );
  }
}

export default Skills;
