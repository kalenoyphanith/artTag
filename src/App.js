import logo from './logo.svg';
import ReactCodeInput from "react-code-input";
import Home from './Home.js';
<<<<<<< HEAD
import Explore from './Explore';
import Gallery from './Gallery';
=======
import Paint from './Paint.js';
>>>>>>> 5e217738b7a0752c3bc57895094d8e5b5e510f66
import Landing from './Landing.js'
import Draw from './Draw';
import Mapbox from './MapBox';
import Carousel from './components/Carousel';
import DrawingApp from './DrawingApp';
import Scan from './QR'
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
<<<<<<< HEAD
              <Route path="/explore">
                <Explore/>
              </Route>
              <Route path="/gallery">
                <Gallery/>
              </Route>
              <Route path="/draw">
                <Draw/>
              </Route>
              <Route path="/mapbox">
               <Mapbox />
              </Route>
              <Route exact path="/carousel">
                <Carousel/>
              </Route>
              <Route path="/drawingApp">
                <DrawingApp/>
              </Route>
              <Route path="/scan">
                <Scan/>
=======
              <Route path="/home">
                <Paint/>
>>>>>>> 5e217738b7a0752c3bc57895094d8e5b5e510f66
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

{/* <Route path="/home">
<Home/>
</Route> */}