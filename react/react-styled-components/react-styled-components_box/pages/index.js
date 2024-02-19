import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <>
      <Container>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
        <BoxWithStyledComponents />
        <BoxWithStyledComponents isBlack />
      </Container>
    </>
  );
}
