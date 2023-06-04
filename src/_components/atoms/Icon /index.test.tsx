import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from ".";
import LogoImage from "../../../../public/assets/images/Logo.svg";

test("Renders Icon or Image", () => {
  render(<Icon src={LogoImage} />);
  const logo = screen.getByTestId("icon");
  expect(logo).toBeInTheDocument();
});
