import ReactCodeInput from "react-code-input";
import './App.css';
import './file.css';
import{Link} from 'react-router-dom';

function Landing() {
  return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to</p>
          <h1 id="art-tag">
            Art Tag
          </h1>
          <ReactCodeInput type='number' id="digit-input" fields={6} />
          <p>Enter your 6 number code</p>
          <Link to="/home">Log-in</Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default Landing;

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