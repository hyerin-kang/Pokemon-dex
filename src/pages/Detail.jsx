import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../js/mockData";
import styled from "styled-components";

const Detail = () => {
  const [searchParams] = useSearchParams();
  const getQueryId = searchParams.get("id");

  const pokemonData = MOCK_DATA;

  const findSameId = pokemonData.find(function (data) {
    return data.id == getQueryId;
  });
  console.log(findSameId);
  // console.log(findPokemonId);

  //쿼리스트링을 가지고 와서 목데이터랑 같은거 출력해라
  /*
쿼리스트링: key=value 형태의 문자열로 표현 (key=value 페어의 개수 제한은 없음)
? : 쿼리스트링의 시작 표시 (start of parameters)
& : key=value 페어 구분 표시 (separator)
  */

  //뒤로가기
  const navigate = useNavigate();
  const handleGotoBack = () => {
    navigate("/dex");
  };

  return (
    <DetailContainer>
      <img src={`${findSameId.img_url}`} alt={`${findSameId.korean_name}`} />
      <p className="pokemonName">{findSameId.korean_name}</p>
      <p>타입 : {findSameId.types}</p>
      <p>{findSameId.description}</p>

      <button onClick={handleGotoBack}>뒤로가기</button>
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
