import React, { Component } from "react"; 
import styled from 'styled-components';
const Li = styled.li`
{list-style-type: none;}  
`;

class Skills extends Component { 
  render() { 
    const { content } = this.props; 
    return ( 
      <div className="Skills"> 
        <h1>{content.skills}</h1> 
        {content.typeOfSkills.map((el,key) => 
        <div key={key}> 
          <h2>{el.name}</h2>
          {el.subSkills.map((el,key) => 
            <Li key={key}>{el}</Li>  
          )} 
        </div> 
        )} 
      </div> 
    ); 
  } 
}
 
export default Skills;