import React from 'react';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />     
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
