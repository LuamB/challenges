import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// Mock the onChange callback
const mockOnChange = jest.fn();

beforeEach(() => {
  // Reset the mock function before each test
  mockOnChange.mockClear();
});

test("renders a label and an input with the correct attributes", () => {
  // Test data
  const labelText = "Test label";
  const placeholder = "Test placeholder";
  const name = "testName";
  const value = "Test Value";
  const required = true;
  // const mockOnChange = jest.fn();

  // Render Input component
  render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={mockOnChange}
      required={required}
    />
  );

  // Check rendering of label & input with correct attributes
  const label = screen.getByText(labelText);
  const input = screen.getByRole("textbox");

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("id", name);
  expect(input).toHaveAttribute("name", name);
  expect(input).toHaveAttribute("placeholder", placeholder);
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("value", value);
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  // Set up userEvent
  const user = userEvent.setup();

  // Render Input component with mocked onChange callback
  render(
    <Input labelText="Test label" name="testName" onChange={mockOnChange} />
  );

  // Simulate user input
  const inputValue = "Test value";
  const input = screen.getByLabelText(/test label/i);

  await user.type(input, inputValue);

  expect(mockOnChange).toHaveBeenCalledTimes(inputValue.length);
  expect(mockOnChange).toHaveBeenCalledWith(
    expect.objectContaining({ target: expect.any(Object) })
  );
});
