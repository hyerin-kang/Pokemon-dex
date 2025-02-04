import MOCK_DATA from "../js/mockData";
import PokemonCard from "./PokemonCard";
import { styled } from "styled-components";

const PokemonList = ({ handleAddandDel }) => {
  const pokemonData = MOCK_DATA;
  // const [selectList, setSelectList] = useState([]);
  //추가and삭제하기 버튼

  return (
    <PokemonLists>
      {pokemonData.map((list) => {
        return (
          <PokemonCard
            list={list}
            key={list.id}
            context="list"
            handleAddandDel={handleAddandDel}
          />
        );
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
`;
