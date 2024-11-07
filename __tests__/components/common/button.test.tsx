import { afterEach, describe, expect, it, vi } from "vitest";

import Button from "@/components/common/button";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders children correctly", () => {
    render(<Button style="primary">Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("applies primary style classes correctly", () => {
    render(<Button style="primary">Button</Button>);
    const button = screen.getByRole("button");
    expect(button.className).includes("bg-teal-500");
    expect(button.className).includes("text-white");
  });

  it("applies secondary style classes correctly", () => {
    render(<Button style="secondary">Button</Button>);
    const button = screen.getByRole("button");
    expect(button.className).includes("bg-gray-200");
    expect(button.className).includes("text-black");
  });

  it("applies tertiary style classes correctly", () => {
    render(<Button style="tertiary">Button</Button>);
    const button = screen.getByRole("button");
    expect(button.className).includes("bg-navy-500");
    expect(button.className).includes("text-white");
  });

  it("applies full width class when widthFull is true", () => {
    render(
      <Button style="primary" widthFull>
        Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button.className).includes("w-full");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button style="primary" onClick={handleClick}>
        Button
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with correct button type", () => {
    render(
      <Button style="primary" type="reset">
        Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button.getAttribute("type")).toBe("reset");
  });
});
