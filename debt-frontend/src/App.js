import "./App.css";
import List from "./List";
import Nav from "./Nav";
import Store from "./Store";
import { Provider } from "react-redux";
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={Store}>
          <Nav />
          <List />
        </Provider>
      </header>
    </div>
  );
}

export default App;
