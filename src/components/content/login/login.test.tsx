import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FormLogin } from "./FormLogin";

describe("FormLogin", () => {
  it("renders FormLogin component", () => {
    render(<FormLogin />);
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("validates the email input", () => {
    render(<FormLogin />);
    const emailInput = screen.getByPlaceholderText("Email");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.blur(emailInput);

    expect(emailInput).toHaveValue("test@example.com");
    expect(emailInput).not.toHaveClass("bg-red-200");
  });

  it("validates the password input", () => {
    render(<FormLogin />);
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.blur(passwordInput);

    expect(passwordInput).toHaveValue("password123");
    expect(passwordInput).not.toHaveClass("bg-red-200");
  });

  it("enable the button with valid input values", async () => {
    render(<FormLogin />);
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.blur(emailInput);
    fireEvent.change(passwordInput, { target: { value: "admin123" } });
    fireEvent.blur(passwordInput);

    expect(loginButton).toBeEnabled();
  });

  it("disables the button with invalid input values", () => {
    render(<FormLogin />);
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "testexample.com" } });
    fireEvent.blur(emailInput);
    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.blur(passwordInput);

    expect(loginButton).toBeDisabled();
  });
});
