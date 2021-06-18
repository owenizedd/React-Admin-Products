import React, { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';


import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  const sidebarItems = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'View Products',
      to: '/products'
    },
    {
      name: 'Insert Product',
      to: '/products/add'
    }, 
  ];

  return (
    <div className="App">
      <Router>
        <nav className='sidebar'>
          <List>
            {
              sidebarItems.map((item, index) => (
                <Link to={item.to} key={item.name}>
                  <ListItem button>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    
                    <ListItemText primary={item.name}  />
                  </ListItem>
                </Link>
              ))
            }
          </List>
        </nav>
        <div className="page-margin"></div>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
