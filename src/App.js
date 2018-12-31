import React from 'react';
import Header from './Header';
import Sobre from './Sobre';
import Eventos from './Eventos';
import Orcamento from './Orcamento';
import Contato from './Contato';

import $ from 'jquery'

class App extends React.Component {

  componentDidMount() {
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  render() {
    return (
      <div>
        <Header/>
        <Sobre/>
        <Eventos/>
        <Orcamento/>
        <Contato/>
      </div>
    )
  }
}

export default App;
