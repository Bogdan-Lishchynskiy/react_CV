import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width:60px;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: black;
  border: 2px solid black;
  float:left;
`;
class LangSwitcher extends Component {
  render() {
    const { switchLang, content }=this.props
    return (
      <div>
        <Button onClick={()=> switchLang("en")}>
          {content.btnEnLabel} 
        </Button>
        <Button onClick={()=> switchLang("ukr")}>
          {content.btnUkrLabel}
        </Button>
      </div>
    );
  }
}
export default LangSwitcher;






