import React, { Component } from 'react';
import './ContactInfo.css';



const data = [ 
  {"name": "Email :Lishchynskiy91@gmail.com"},
  {"name": "Cell: +380638619926"},
  {"name": "Skype: bogdan.lishchynskiy1"},
  {"name": "LinkedIn: linkedin.com/in/bogdan-lishchynskiy-30335a138/"}
]

class ContactInfo extends Component {
  render() {
    const listItems = data.map((el) => <li key={el.name}>{el.name}</li>);
    console.log(listItems);
    return (
      <div className="ContactInfo">
          <h1 className="ContactInfo">{this.props.title}</h1>
            <div>
              {listItems}
            </div>
      </div>   
 
        
    );
  }
}
export default ContactInfo;







