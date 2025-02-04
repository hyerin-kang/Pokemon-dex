import { styled } from "styled-components";

const PokemonCard = ({ list, handleAddandDel, context }) => {
  //아이디 세자리수 정렬
  const setThreeNum = String(list.id).padStart(3, "0");

  return (
    <PokemonCardLi>
      <img src={`${list.img_url}`} />
      <p>{list.korean_name}</p>
      <p>No. {setThreeNum}</p>
      <button
        onClick={() => {
          console.log("삭제추가버튼");
          if (context == "dashboard") {
            console.log("삭제", context);
            handleAddandDel(list, "delete");
          } else if (context == "list") {
            handleAddandDel(list, "add");
          }
        }}
      >
        {context === "dashboard" ? "삭제" : "추가"}
      </button>
    </PokemonCardLi>
  );
};

export default PokemonCard;

const PokemonCardLi = styled.li`
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
`;
