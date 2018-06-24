import React, { Component, createContext } from 'react';
// import React, { createContext } from "react";


import Main from './components/main/Main';
import Skills from './components/skills/Skills';

// import logo from './logo.svg';
import './App.css';

import content from './content';

const LanguageContext = createContext();


class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "en"
    };
  }
  render() {
    return (
      <LanguageContext.Provider value={content[this.state.language]}>
        <div>
          <LanguageContext.Consumer>
            {content => {
              return (
                <div>
                  <div>
                    <button onClick={() => this.setState({ language: "en" })}>
                      {content.btnEnLabel}
                    </button>
                    <button onClick={() => this.setState({ language: "ukr" })}>
                      {content.btnUkrLabel}
                    </button>
                  </div>
                  <Main container={content.main} title={content.mainTitle} />
                  <Skills title={content.skills}/>
                </div>
              );
            }}
          </LanguageContext.Consumer>
        </div>
      </LanguageContext.Provider>
    );
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <Main />
  //       <Skills />
  //     </div>
  //   );
  // }
}

export default App;
