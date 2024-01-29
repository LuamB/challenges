import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${({ isBlack }) => isBlack ? 'black' : 'green'};
  &:hover {
	background-color: red;
  }
`;

export default function BoxWithStyledComponents({isBlack}) {
  return <StyledBox isBlack={isBlack}/>
} 