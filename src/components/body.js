import React, { useState } from 'react';
import NavItem from './navitem';
import AboutMe from './aboutme';
import Portfolio from './portfolio';
import Design from './design'
import Contact from './contact';
import Resume from './resume';
import Footer from './footer';

export default function Body() {
  const [currentPage, setCurrentPage] = useState('About'); 
  
  const renderPage = () => {
    console.log("rendering the page")
    if (currentPage === 'About') {
      return <AboutMe />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Graphic') {
      return <Design />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
  }

  const changePage = (page) => setCurrentPage(page);

    return (
        <div >
          <NavItem currentPage={currentPage} changePage={changePage}/>
          <div className="flex">{renderPage()}</div>
          <Footer />
          </div>
          
    );
}