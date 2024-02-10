import styled from "styled-components";
import Button from "../Button";
// import { trackOrSetValue } from "@testing-library/user-event/dist/types/document/trackValue";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, handleAllOff, handleAllOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={handleAllOff}
        disabled={lights.every((light) => light.isOn === false)}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={handleAllOn}
        disabled={lights.every((light) => light.isOn === true)}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
