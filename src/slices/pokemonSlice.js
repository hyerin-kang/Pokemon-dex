import { createSlice } from "@reduxjs/toolkit";

//초기값
const initialState = {
  selectList: [],
};

const pokemonSlice = createSlice({
  //객체를 받음 > name,initialState,reducers
  name: "pokemon",
  initialState: initialState,
  reducers: {
    //리듀서 안에 들어갈 기능(함수형)
    //state, action
    handleAddandDel: (state, action) => {
      const { pokemon, operation } = action.payload;

      switch (operation) {
        case "add":
          // 포켓몬이 6마리 이상이면 추가안함
          if (state.selectList.length >= 6) {
            alert("포켓몬은 6마리까지 잡을수있어요!");
            return;
          }
          // 이미 선택된 포켓몬이면 추가안함
          if (state.selectList.some((list) => list.id === pokemon.id)) {
            alert("이미 잡은 포켓몬입니다!");
            return;
          }

          state.selectList.push(pokemon);
          alert("포켓몬을 잡았어요!");
          break;

        case "delete":
          // 선택된 포켓몬 삭제
          state.selectList = state.selectList.filter(
            (list) => list.id !== pokemon.id
          );
          break;

        default:
          break;
      }
    },
  },
});

export const { handleAddandDel } = pokemonSlice.actions;
export default pokemonSlice.reducer; //스토어에서 받을거임
