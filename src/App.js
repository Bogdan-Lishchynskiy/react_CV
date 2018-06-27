import React, { Component, createContext } from "react";
import styled from 'styled-components';
import ContactInfo from "./components/contact-info";
import Main from "./components/main";
import Skills from "./components/skills";
import LangSwitcher from "./components/lang-switcher";

import content from "./content";
import avatar from "./img/avatar.jpg";

const Img = styled.img`
float:right;  
`;

const LanguageContext = createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      defaultLanguage: "en"
    };
  }

  switchLang = (language) => {
    this.setState({ defaultLanguage: language });
  }

  render() {
    return (
      <LanguageContext.Provider value={content[this.state.defaultLanguage]}>
        <div>
          <LanguageContext.Consumer>
            {content => {
              return (
                <div className="wrapper">
                  <Img src={avatar} />
                  <LangSwitcher content={content} 
                    switchLang={this.switchLang}/>
                  <ContactInfo content={content}/>
                  <Main content={content} />
                  <Skills content={content} />
                </div>
              );
            }}
          </LanguageContext.Consumer>
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;