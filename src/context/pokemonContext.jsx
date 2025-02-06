import { createContext, useState } from "react";

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  //사용할 state 모두 기입 (함수도 같이)
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
    <PokemonContext.Provider
      value={{
        selectList,
        setSelectList,
        handleAddandDel,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export { PokemonContext, PokemonProvider };
