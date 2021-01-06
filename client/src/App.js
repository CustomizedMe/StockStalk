import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';
import './assets/scss/black-dashboard-react.scss';
import './assets/css/nucleo-icons.css';
import AdminNavbar from './components/layouts/AdminNavbar';
import Landing from './components/layouts/Landing';
//import Footer from './components/layouts/Footer';
//import FixedPlugin from './components/layouts/FixedPlugin.js';



function App() {
  return (
    <Router>
    
    <Fragment>  
    <AdminNavbar/>
    <Route exact path="/" component={Landing} />
    </Fragment>

    </Router>
  );
}

export default App;
