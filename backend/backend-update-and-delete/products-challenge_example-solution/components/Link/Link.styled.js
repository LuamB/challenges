import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  border: none;
  background-color: lightgray;
  padding: 10px;
  border-radius: 50px;
  margin: 10px;
  text-decoration: none;
  color: black;
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`;
