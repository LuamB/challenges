import Box from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components"; 
export default function HomePage() {
 
  const Container = styled.div`
    display: flex;
  `
  return (
    <Container>
      <BoxWithClassName />
      <Box isBlack={true}/>
      <Box/>
    </Container>
  );
}
