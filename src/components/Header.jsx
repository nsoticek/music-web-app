import React from 'react';
import './style/Header.css';

export default class Header extends React.Component {
  render() {
    var toggle = this.props.toggle;
    return (
      <div className="header_container">
        <h1>Musik-Sammlung</h1>
        <div className="header_button_container">
          <button onClick={()=> toggle()}>++</button>
        </div>
      </div>
    );
  }
}