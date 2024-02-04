import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";
import Input from "../Input";
import GameForm, { Form } from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

// Mock callback function
const handleSubmit = jest.fn();

beforeEach(() => {
  // Reset the mock functions before each test
  handleSubmit.mockClear();
});

test("renders two input fields and a button", () => {
  const nameOfGame = "nameOfGame";
  const playerNames = "playerNames";

  render(
      <Input name={nameOfGame} required />
      <Input name={playerNames} required />
      <Button>Create game</Button>
  );
});

test("renders a form with the accessible name 'Create a new game'", () => {
  const name = "Create a new game";

  render(
    <Form />
  )
});

test("submits the correct form data when every field is filled out", async () => {
  // Set up userEvent
  const user = userEvent.setup();
});

test("does not submit form if one input field is left empty", async () => {
  // Set up userEvent
  const user = userEvent.setup();
});
