import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";
import Player, { PlayerWrapper, PlayerScore } from ".";

// Mock callback functions
const handleDecrease = jest.fn();
const handleIncrease = jest.fn();

beforeEach(() => {
  // Reset the mock functions before each test
  handleDecrease.mockClear();
  handleIncrease.mockClear();
});

test("renders player information and two buttons", () => {
  // Test data
  const name = "testName";
  const score = 0;
  const color = "black";

  // Render Player component
  render(
    <PlayerWrapper>
      {name}
      <PlayerScore color={color}>
        <Button
          aria-label="Decrease Score"
          onDecreasePlayerScore={handleDecrease}
        >
          -
        </Button>
        <span>{score}</span>
        <Button
          aria-label="Increase Score"
          onIncreasePlayerScore={handleIncrease}
        >
          +
        </Button>
      </PlayerScore>
    </PlayerWrapper>
  );

  // Assertions
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(score.toString())).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  // Set up userEvent
  const user = userEvent.setup();

  // Render Player component
  render(
    <Player
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );

  const decreaseButton = screen.getByRole("button", { name: /decrease score/i });
  const increaseButton = screen.getByRole("button", { name: /increase score/i });

  // Simulate user action
  await user.click(increaseButton);
  await user.click(decreaseButton);
  await user.click(increaseButton);

  // Assertions
  expect(handleDecrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(2);
});
