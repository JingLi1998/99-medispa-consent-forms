import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </ChakraProvider>
    </BrowserRouter>
  ),
];
