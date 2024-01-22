import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hi, My name is Chukwuebuka Ohiomoba 
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/chukwuebuka-ohiomoba/"
          target="_blank"
          rel="noopener noreferrer"
        >
           I'm a Software Engineer. Check out my LinkedIn 
           <p>
            About me
           </p>
        </a>
      </header>
    </div>
  );
}

export default App;
