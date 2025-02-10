import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

//초기값
const formLocalStorage = () => {
  const savedPokemons = localStorage.getItem("selectedPokemons");
  return savedPokemons ? JSON.parse(savedPokemons) : [];
};
const initialState = {
  selectList: formLocalStorage(),
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
            // alert("포켓몬은 6마리까지 잡을수있어요!");
            Swal.fire({
              title: "포켓몬은 6마리까지 잡을수있어요!",
              icon: "error",
            });
            return;
          }
          // 이미 선택된 포켓몬이면 추가안함
          if (state.selectList.some((list) => list.id === pokemon.id)) {
            Swal.fire({
              title: "이미 잡은 포켓몬 입니다!",
              icon: "error",
            });
            return;
          }

          state.selectList.push(pokemon);
          Swal.fire({
            title: "포켓몬을 잡았어요!",
            icon: "success",
          });
          //로컬스토리지
          localStorage.setItem(
            "selectedPokemons",
            JSON.stringify(state.selectList)
          );
          break;

        case "delete":
          // 선택된 포켓몬 삭제
          state.selectList = state.selectList.filter(
            (list) => list.id !== pokemon.id
          );
          Swal.fire({
            title: "포켓몬을 풀어줬어요",
            icon: "info",
            draggable: true,
          });
          //로컬스토리지
          localStorage.setItem(
            "selectedPokemons",
            JSON.stringify(state.selectList)
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
