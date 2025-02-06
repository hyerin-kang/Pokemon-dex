import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { PokemonContext } from "../context/pokemonContext";

const PokemonCard = ({ list, context }) => {
  const { handleAddandDel } = useContext(PokemonContext);
  //아이디 세자리수 정렬
  const setThreeNum = String(list.id).padStart(3, "0");

  //페이지 이동하기
  const navigate = useNavigate();
  const handleGotoDetail = (id) => {
    //디테일페이지로 가고 id를 넘겨줄거임
    navigate(`/detail?id=${id}`);
  };

  /*
  자식이벤트발생 > 부모에 있으면 부모가 실행 : 이벤트 버블링
  stopPropagation자식에서 이벤트가 버블링되는거 막아줌

  */

  return (
    <PokemonCardLi onClick={() => handleGotoDetail(list.id)}>
      <img src={`${list.img_url}`} />
      <p>{list.korean_name}</p>
      <p>No. {setThreeNum}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (context == "dashboard") {
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
