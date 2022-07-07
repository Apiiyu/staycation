import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

test("Should have props [value, height, width, spacing]", () => {
  const height = 40, width = 40, spacing = 4
  const { container } = render(<Star width={width} key={`unique${1}`} height={height} spacing={spacing} value={2.5} />)
  const yellowStar = "div.stars div.star:not(.placeholder)"

  expect(container.querySelector("div.star")).toBeInTheDocument()
  expect(container.querySelector("div.star")).toHaveAttribute('style', expect.stringContaining(`height: ${height}px`))
  expect(container.querySelector(yellowStar)).toBeInTheDocument()
  expect(container.querySelector(yellowStar)).toHaveAttribute('style', expect.stringContaining(`width: ${width}px`))
  expect(container.querySelector(yellowStar)).toHaveAttribute('style', expect.stringContaining(`height: ${height}px`))
  expect(container.querySelector(yellowStar)).toHaveAttribute('style', expect.stringContaining(`margin-right: ${spacing}px`))
})