import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name={"myInputName"}
      labelText={"myLabelText"}
      placeholder={"myPlaceholder"}
    ></Input>
  );

  const input = screen.getByLabelText("myLabelText");

  expect(input).toHaveAttribute("placeholder", "myPlaceholder");
});

test("calls callback on every user input", async () => {
  const callback = jest.fn();
  render(
    <Input
      name={"myInputName"}
      labelText={"myLabelText"}
      placeholder={"myPlaceholder"}
      onChange={callback}
    ></Input>
  );

  const user = userEvent.setup();

  const input = screen.getByLabelText("myLabelText");

  await user.type(input, "my input value");

  expect(callback.mock.calls).toHaveLength(14);
});
