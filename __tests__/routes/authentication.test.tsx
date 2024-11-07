import { BrowserRouter } from "react-router-dom";
import { afterEach, describe, expect, it, Mock, vi } from "vitest";

import { handleEmailAuth } from "@/data/firebase";
import AuthenticationPage from "@/routes/authentication";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("@/data/firebase", () => ({
  handleEmailAuth: vi.fn(),
  // unused but needed for the component to render
  handleSignInGoogle: vi.fn(),
}));

describe("Sign Up Integration", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("should handle the complete sign-up process", async () => {
    const user = userEvent.setup();
    const mockHandleEmailAuth = handleEmailAuth as Mock;
    mockHandleEmailAuth.mockResolvedValue({ success: true });

    render(
      <BrowserRouter>
        <AuthenticationPage />
      </BrowserRouter>
    );

    // Fill out the sign-up form
    await user.type(
      screen.getByRole("textbox", { name: /Your Name/i }),
      "Test User"
    );

    await user.type(
      screen.getByRole("textbox", { name: /A Valid Email Address/i }),
      "test@example.com"
    );

    await user.type(screen.getByLabelText(/A Strong Password/i), "password123");

    await user.type(
      screen.getByLabelText(/Confirm Your Password/i),
      "password123"
    );

    // Submit the form
    const createAccountButton = screen.getByText("Create Account");
    await user.click(createAccountButton);

    // Verify Firebase auth was called with correct parameters
    await waitFor(() => {
      expect(mockHandleEmailAuth).toHaveBeenCalledWith(
        "signUp",
        "test@example.com",
        "password123",
        "Test User"
      );
    });
  });

  it("should display error message on sign-up failure", async () => {
    const user = userEvent.setup();
    const mockHandleEmailAuth = handleEmailAuth as Mock;
    mockHandleEmailAuth.mockResolvedValue({
      success: false,
      error: { code: "auth/email-already-in-use" },
    });

    render(
      <BrowserRouter>
        <AuthenticationPage />
      </BrowserRouter>
    );

    // Fill and submit form
    await user.type(
      screen.getByRole("textbox", { name: /Your Name/i }),
      "Test User"
    );

    await user.type(
      screen.getByRole("textbox", { name: /A Valid Email Address/i }),
      "test@example.com"
    );

    await user.type(screen.getByLabelText(/A Strong Password/i), "password123");

    await user.type(
      screen.getByLabelText(/Confirm Your Password/i),
      "password123"
    );

    await user.click(screen.getByText("Create Account"));

    // Verify error message is displayed
    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeDefined();
      expect(
        screen.getByText("Something went wrong. Please try again.")
      ).toBeDefined();
    });
  });
});
