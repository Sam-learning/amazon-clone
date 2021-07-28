import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './header/header';
import Home from './home/Home';
  
  
  


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h2>Checkout</h2>
          </Route>
          <Route path="/login">
            <h2>Login</h2>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
