import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { css, Global } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            body {
              background-color: ${theme.colors.brand[500]};
            }
          `}
        />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
