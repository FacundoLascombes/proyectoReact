import logo from "./logo.svg";
import "./App.css";
import "./components/NavBar.jsx";
import NavBar from "./components/NavBar.jsx";
import "./components/ItemListContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
