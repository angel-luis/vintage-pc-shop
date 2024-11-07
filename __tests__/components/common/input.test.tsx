import { afterEach, describe, expect, it, vi } from "vitest";

import Input from "@/components/common/input";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Input Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders input element with minimum required props", () => {
    render(
      <Input name="test-input" type="text" value="test-value" readOnly={true} />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
    expect(input.getAttribute("name")).toBe("test-input");
    expect(input.getAttribute("type")).toBe("text");
    expect(input.getAttribute("value")).toBe("test-value");
    expect(input.hasAttribute("readonly")).toBe(true);
  });

  it("displays label when provided", () => {
    render(
      <Input
        name="test-input"
        label="Test Label"
        type="text"
        value="test-value"
        readOnly={true}
      />
    );

    const label = screen.getByText("Test Label");
    expect(label).toBeDefined();
  });

  it("handles value changes", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Input
        name="test-input"
        type="text"
        value="test-value"
        onChange={handleChange}
      />
    );

    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "hello");

    expect(handleChange).toHaveBeenCalled();
    expect(input.getAttribute("value")).toBe("test-value");
  });

  it("respects disabled state", () => {
    render(<Input name="test-input" type="text" value="" disabled={true} />);

    const input = screen.getByRole("textbox");
    expect(input.hasAttribute("disabled")).toBe(true);
  });

  it("shows placeholder when provided", () => {
    render(
      <Input
        name="test-input"
        type="text"
        value=""
        placeholder="Enter text here"
      />
    );

    const input = screen.getByRole("textbox");
    expect(input.getAttribute("placeholder")).toBe("Enter text here");
  });

  it("marks input as required when specified", () => {
    render(<Input name="test-input" type="text" value="" required={true} />);

    const input = screen.getByRole("textbox");
    expect(input.hasAttribute("required")).toBe(true);
  });
});
