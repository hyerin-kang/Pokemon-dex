import { Link } from "react-router-dom";
import pokemonLogo from "../assets/image/pokemon-logo.png";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <img src={pokemonLogo} alt="" />
      <Link to="dex">포켓몬 도감 시작하기</Link>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 30px;
  background: #fffcdd;
  img {
    width: 500px;
    display: block;
  }
  a {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(255, 0, 0);
    color: white;
    border: none;
    transition: background-color 0.3s;
    text-decoration: none;
    &:hover {
      background: rgb(204, 0, 0);
    }
  }
`;
