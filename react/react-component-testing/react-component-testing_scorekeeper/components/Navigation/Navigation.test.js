import { getByRole, render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  // Render the Navigation component
  render(<Navigation players={[]} />);

  // Check rendering of 'Play' & 'History' links, using the role "link"
  const playLink = screen.getByRole("link", { name: /Play/i });
  const historyLink = screen.getByRole("link", { name: /History/i });

  // Check presence of links in document
  expect(playLink).toBeInTheDocument();
  expect(historyLink).toBeInTheDocument();
});
