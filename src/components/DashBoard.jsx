import PokemonList from "./PokemonList";
import { styled } from "styled-components";
const DashBoard = () => {
  return (
    <Container>
      <h2>나만의 포켓몬</h2>

      <PokemonList />
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  padding: 20px;
`;
