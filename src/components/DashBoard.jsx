import { useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonList from "./PokemonList";
import { styled } from "styled-components";
import pokeball from "../image/pokebola-pokeball.png";

const DashBoard = () => {
  const [selectList, setSelectList] = useState([]);
  //추가삭제기능
  const handleAddandDel = (pokemonData, action) => {
    if (action === "add") {
      if (selectList.length >= 6) {
        alert("포켓몬은 6마리까지 저장 가능합니다.");
        return;
      }
      const alreadyMy = selectList.some(function (list) {
        return list === pokemonData;
      });
      if (alreadyMy) {
        alert("해당몬스터를 이미 잡았어요!");
        return;
      }
      // console.log(pokemonData, "pokemonData");
      setSelectList([...selectList, pokemonData]);
    } else if (action === "delete") {
      console.log(action, "action");
      const deleteList = selectList.filter(function (list) {
        return list !== pokemonData;
      });
      setSelectList(deleteList);
    }
  };
  return (
    <Container>
      <h2>나만의 포켓몬</h2>
      <SelectList>
        {/* 추가된거 */}
        {selectList.map((list) => {
          return (
            <PokemonCard
              handleAddandDel={handleAddandDel}
              context="dashboard"
              list={list}
              key={list.id}
            />
          );
        })}
        {/* 빈슬롯 
        && : 논리AND연산자, 앞에있는 조건이 true일때만 뒤에있는 코드를 실행하도록 한다
        */}
        {selectList.length < 6 &&
          Array.from({ length: 6 - selectList.length }).map((_, index) => {
            return <EmptyList key={index} />;
          })}
      </SelectList>
      <PokemonList handleAddandDel={handleAddandDel} />
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
const SelectList = styled.ul`
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
