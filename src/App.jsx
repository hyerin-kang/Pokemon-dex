import { Provider } from "react-redux";
import store from "./app/store";
// import { PokemonProvider } from "./context/pokemonContext";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
