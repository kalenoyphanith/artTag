import logo from './logo.svg';
import ReactCodeInput from "react-code-input";
import Home from './Home.js';
import Landing from './Landing.js'
import './App.css';

import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Landing/>
              </Route>
              <Route path="/home">
                <Home/>
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}
{/* <img src={logo} className="App-logo" alt="logo" /> */}

{/* <button onClick={sayHello}>Default</button>; */}