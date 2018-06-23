import React, { Component } from 'react';
// import ReactDOM from "react-dom";


 import './Main.css';


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="Main-info">Main section on web page</h1>
        </header>
        <h2>This is info about main section</h2>
        <p className="Content">
         sLorem ipsum dolor sit amet, praesent nullam fusce amet donec cras eu,
          felis sit, wisi amet sapien sed feugiat hendrerit inceptos, in congue ac,
           nullam morbi rhoncus urna donec. Nam sit donec sit, duis praesent arcu. 
           Vestibulum ornare, ac vel nonummy interdum est ut, sapien class.
            Dapibus nostra ultricies orci massa, eget semper proin pede class ut,
             ut suscipit urna vitae morbi. Morbi molestie. Urna maecenas libero, arcu elementum.
              Metus tempor dictum duis sit sem, donec ut consectetuer mauris maecenas odio eros,
               egestas tincidunt natoque sodales, urna quisque facilisi. A sodales class dolor.
                Nec turpis nec nulla enim sodales urna, mauris metus aliquam, ultrices lorem,
               porttitor et purus. Class dui elit mauris condimentum et a.
                Elit molestie auctor consectetuer eget, proin cursus quam laoreet in sed turpis,
                 eu magna non suscipit ac, magna a aliquam porttitor in dictum ullamcorper,
                  suspendisse volutpat metus ante habitant.
          </p>
      </div>
    );
  }
}

export default Main;
