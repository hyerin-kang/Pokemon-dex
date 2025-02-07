// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { handleAddandDel } from "../slices/pokemonSlice";
import { useDispatch } from "react-redux";

const PokemonCard = ({ list, context }) => {
  const dispatch = useDispatch();

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
          //type : 액션 종류를나타내는 문자열
          //payload : 액션과 함께 전달되는 데이터를 담고있음,

          e.stopPropagation();
          if (context === "dashboard") {
            dispatch(handleAddandDel({ pokemon: list, operation: "delete" }));
          } else if (context === "list") {
            dispatch(handleAddandDel({ pokemon: list, operation: "add" }));
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
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
    cursor: pointer;
  }
  button {
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;
