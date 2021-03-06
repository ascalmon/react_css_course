import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Page from './components/Page.js';
import Start from './components/Start.js';
import Customer from './components/Customer.js';

function App() {

  const [ route, setRoute ] = useState('Home');

  const link = (link) => {
    setRoute(link)
  }

  useEffect(() => {
    const url_target = window.location.pathname.split('/')[1];
    console.log('Url', window.location.pathname.split('/')[1])
    if (url_target !== '') {
      link(url_target.charAt(0).toLocaleUpperCase() + url_target.slice(1))
    }
  },[])
  

 

  return (
    <>
    <div className="App">
      <Navbar
        link1 = 'Packages'
        link2 = 'Customer'
        link3 = 'Start Hosting'
        color = '#7a92c7'
        link = {link}
      ></Navbar>
      {route === 'Home' ?
        <Home
          title='Get the Freedom You Deserve'
          subtitle = 'The best Telecom in the region'
          link1='Packages'
          link2='Customer'
          link3='Start Hosting'
          color='#7a92c7'
        ></Home>
      : route === 'Page' ?
        <Page 
          link1='Packages'
          link2='Customer'
          link3='Start Hosting'
          color= '#7a92c7'
        ></Page>
      : route === 'Customer' ? 
        <Customer
          link1 = 'Packages'
          link2 = 'Customer'
          link3 = 'Start Hosting'
          color= '#7a92c7'
        ></Customer>
      : route === 'Start' ?
        <Start
          link1='Packages'
          link2='Customer'
          link3='Start Hosting'
          color='#7a92c7'
        ></Start>
        : null
      }
    </div>
    </>
  );
}

export default App;
