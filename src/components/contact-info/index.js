import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
{list-style-type: none;}  
`;

class ContactInfo extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="ContactInfo">
        <h1>{content.contactTitle}</h1>
        {content.contactInformation.map(({name, value},key) =>(
          <Li key={key}>
            {name}: {value}
          </Li>
        ))}
      </div>
    );
  }
}
export default ContactInfo;






