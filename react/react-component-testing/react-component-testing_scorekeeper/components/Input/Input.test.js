import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  // Test data
  const labelText = "Test label";
  const placeholder = "Test placeholder";
  const name = "testName";
  const value = "Test Value";
  const required = true;
  const handleChange = jest.fn();

  // Render Input component
  render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
    />
  );
});

test("calls callback on every user input", async () => {});
