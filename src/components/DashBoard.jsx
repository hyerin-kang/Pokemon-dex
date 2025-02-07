// import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import PokemonList from "./PokemonList";
import { styled } from "styled-components";
import pokeball from "../assets/image/pokeball.png";

import { useSelector } from "react-redux";
// import { PokemonContext } from "../context/pokemonContext";

const DashBoard = () => {
  // const { selectList } = useContext(PokemonContext);
  // console.log(selectList);

  //rtk
  const selectList = useSelector((state) => state.pokemon.selectList);
  return (
    <Container>
      <h2>나만의 포켓몬</h2>
      <SelectLists>
        {/* 추가된거 */}
        {selectList.map((list) => {
          console.log(selectList);
          return <PokemonCard context="dashboard" list={list} key={list.id} />;
        })}
        {/* 빈슬롯 
        && : 논리AND연산자, 앞에있는 조건이 true일때만 뒤에있는 코드를 실행하도록 한다
        */}
        {selectList.length < 6 &&
          Array.from({ length: 6 - selectList.length }).map((_, index) => {
            return <EmptyList key={index} />;
          })}
      </SelectLists>
      <PokemonList />
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  padding: 20px;
  h2 {
    text-align: center;
    font-size: 28px;
    font-weight: 900;
  }
`;

const EmptyList = styled.li`
  border: 5px dashed #ccc;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  &:before {
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    background-image: url(${pokeball});
    background-size: cover;
  }
`;
const SelectLists = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 40px;
  width: 80%;
  background: #fff6e6;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  li {
    width: calc(100% / 6 - 40px);
  }
`;
