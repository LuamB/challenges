import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";
import Player, { PlayerWrapper, PlayerScore } from ".";

// Mock callback functions
const mockOnDecreasePlayerScore = jest.fn();
const mockOnIncreasePlayerScore = jest.fn();

beforeEach(() => {
  // Reset the mock functions before each test
  mockOnDecreasePlayerScore.mockClear();
  mockOnIncreasePlayerScore.mockClear();
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
          onDecreasePlayerScore={mockOnDecreasePlayerScore}
        >
          -
        </Button>
        <span>{score}</span>
        <Button
          aria-label="Increase Score"
          onIncreasePlayerScore={mockOnIncreasePlayerScore}
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

test("calls callbacks when increasing or decreasing score", async () => {});
