import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name:Train A <br></br>
          Delay:On Time<br></br>
          Price:$50<br></br>
          Seats Available:120
        </p>
        <p>
          Name:Train B <br></br>
          Delay:5 mins<br></br>
          Price:$100<br></br>
          Seats Available:50
        </p>
        <p>
          Name:Train C <br></br>
          Delay:10 mins<br></br>
          Price:$150<br></br>
          Seats Available:5
        </p>
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

export default App;
