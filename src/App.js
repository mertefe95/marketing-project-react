import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Features from "./components/Features";

function App() {
    return (
    <Router>
        <div>
            <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contactus" exact component={Contact} />
                    <Route path="/features" exact component={Features} />
                </Switch>
            <Footer />
        </div>
    </Router>
    );
}

export default App;