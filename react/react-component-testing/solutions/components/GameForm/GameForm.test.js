import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm></GameForm>);
  const nameOfGameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText(
    "Player names, separated by comma"
  );

  const button = screen.getByRole("button", {
    name: "Create game",
  });

  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNamesInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm></GameForm>);
  const form = screen.getByRole("form", {
    name: "Create a new game",
  });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleSubmit = jest.fn();
  render(<GameForm onCreateGame={handleSubmit}></GameForm>);
  const user = userEvent.setup();

  const nameOfGameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText(
    "Player names, separated by comma"
  );
  const button = screen.getByRole("button", {
    name: "Create game",
  });

  await user.type(nameOfGameInput, "my game input");
  await user.type(playerNamesInput, "John, Jane, Sven");

  await user.click(button);

  expect(handleSubmit.mock.calls).toHaveLength(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    nameOfGame: "my game input",
    playerNames: ["John", "Jane", "Sven"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const handleSubmit = jest.fn();
  render(<GameForm onCreateGame={handleSubmit}></GameForm>);

  const user = userEvent.setup();

  const nameOfGameInput = screen.getByLabelText("Name of game");
  const button = screen.getByRole("button", {
    name: "Create game",
  });

  await user.type(nameOfGameInput, "my game input");
  await user.click(button);

  expect(handleSubmit.mock.calls).toHaveLength(0);
});
