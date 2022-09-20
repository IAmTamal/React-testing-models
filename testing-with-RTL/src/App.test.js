import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";

test("Check if the Header1 is present", () => {
  render(<App />);
  const deleteElement = screen.getByTitle("ReactTestingHeader1");
  expect(deleteElement).toBeInTheDocument();
});

test("Email input should change", () => {
  render(<Login />);
  const EmailValue = screen.getByPlaceholderText(/Email/i);
  const testValue = "test";

  fireEvent.change(EmailValue, { target: { value: testValue } });
  expect(EmailValue.value).toBe(testValue);
});

test("Password input should change", () => {
  render(<Login />);
  const PasswordValue = screen.getByPlaceholderText(/Password/i);
  const testValue = "test";

  fireEvent.change(PasswordValue, { target: { value: testValue } });
  expect(PasswordValue.value).toBe(testValue);
});
