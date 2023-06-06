import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("default paragraph text is present", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const paragraphText = screen.getByText("It's good to see you");
    expect(paragraphText).toBeInTheDocument();
  });

  test("render changed text if button is clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphText = screen.getByText("Changed!");
    expect(paragraphText).toBeInTheDocument();
  });

  test("default paragraph disappears after clicking button", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphText = screen.queryByText("It's good to see you");
    expect(paragraphText).toBeNull();
  });
});
