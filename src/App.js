import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1 className="title">
      Dictionary
    </h1> 
    </header>
    <main>
    <Dictionary defaultWord="Sunset"/>
    </main>
    <footer>
      <div className="signature">
      Coded by  <a className="link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/raphaella-d-alessandro-b31810197/">Raphaella D'Alessandro </a>
      and open-sourced on <a className="link"rel="noreferrer" target="_blank" href="https://github.com/raphaella-rose/dictionary-project">Github</a>
    </div>
    </footer>
    </div>
  );
}

export default App;
