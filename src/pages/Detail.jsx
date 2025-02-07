import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../js/mockData";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleAddandDel } from "../slices/pokemonSlice";

const Detail = () => {
  //쿼리스트링을 가지고 와서 목데이터랑 같은거 출력해라
  const [searchParams] = useSearchParams(); //쿼리스트링 파라미터
  const getQueryId = searchParams.get("id"); //아이디 가져오기

  //id를 가진 포켓몬 찾기
  const findSameId = MOCK_DATA.find(function (data) {
    return data.id == getQueryId;
  });
  // console.log(findSameId);

  //뒤로가기
  const navigate = useNavigate();
  const handleGotoBack = () => {
    navigate("/dex");
  };

  //추가버튼 디스패치
  const dispatch = useDispatch();

  //리스트확인
  const selectList = useSelector((state) => state.pokemon.selectList);

  const isPokemonSelected = selectList.some(function (list) {
    return list.id === findSameId.id;
  });
  return (
    <DetailContainer>
      <img src={`${findSameId.img_url}`} alt={`${findSameId.korean_name}`} />
      <p className="pokemonName">{findSameId.korean_name}</p>
      <p>타입 : {findSameId.types}</p>
      <p>{findSameId.description}</p>

      <button onClick={handleGotoBack}>뒤로가기</button>
      <button
        onClick={() => {
          const operation = isPokemonSelected ? "delete" : "add";
          dispatch(handleAddandDel({ pokemon: findSameId, operation }));
        }}
      >
        {isPokemonSelected ? "포켓몬 풀어주기" : "포켓몬 잡기"}
      </button>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;

  .pokemonName {
    color: rgb(255, 0, 0);
    font-weight: 600;
    font-size: 20px;
  }
  button {
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      border: 1px solid #646cff;
    }
  }
`;
