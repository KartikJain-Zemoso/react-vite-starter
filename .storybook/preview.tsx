import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/core-utils/theme";
const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ margin: "3em" }}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          {Story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
