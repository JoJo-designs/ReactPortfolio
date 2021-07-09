import React, { useState } from 'react';
import NavItem from './navitem';
import AboutMe from './aboutme';
import Portfolio from './portfolio';



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
  }

  const changePage = (page) => setCurrentPage(page);

    return (
        <div>
          <NavItem currentPage={currentPage} changePage={changePage}/>
          {renderPage()}
          </div>
          
    );
}