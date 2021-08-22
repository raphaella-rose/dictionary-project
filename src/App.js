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
    <Dictionary defaultWord="Dachshund"/>
    </main>
    <footer>
      <div className="text-center">
      Coded by Raphaella D'Alessandro
    </div>
    </footer>
    </div>
  );
}

export default App;
