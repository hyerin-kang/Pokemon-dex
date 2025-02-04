import MOCK_DATA from "../js/mockData";
import PokemonCard from "./PokemonCard";
import { styled } from "styled-components";
const PokemonList = () => {
  const pokemonData = MOCK_DATA;
  return (
    <PokemonLists>
      {pokemonData.map((list) => {
        return <PokemonCard list={list} key={list.id}></PokemonCard>;
      })}
    </PokemonLists>
  );
};

export default PokemonList;

const PokemonLists = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #ccc;
    min-width: calc((100% / 7) - 30px);
    box-sizing: border-box;
  }
`;
