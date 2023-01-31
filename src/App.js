import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light navBar">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> <img src="https://progressterra.com/wp-content/uploads/2018/09/logo-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-1.png" alt="twbs" class="rounded-circle flex-shrink-0"/> </Link></li>
          </ul>
          </nav>
          <hr />
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
            </Routes>
        </div>
      </Router>
    );
  }
}

export default App;