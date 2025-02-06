import { PokemonProvider } from "./context/pokemonContext";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
