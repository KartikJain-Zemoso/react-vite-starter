import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeWrapper from "./wrappers/ThemeWrapper";
import { CssBaseline } from "@mui/material";
import ErrorBoundary from "./wrappers/ErrorBoundary";
import Icon from "./_components/atoms/Icon ";
function App() {
  return (
    <>
      <React.StrictMode>
        <CssBaseline>
          <ThemeWrapper>
            <ErrorBoundary>
              <BrowserRouter>
                <Routes>
                  <Route
                    index
                    element={
                      <>
                        <h1>
                          {" "}
                          <Icon src="/assets/icons/Logo.svg" />
                          React Vite Starter
                        </h1>
                        <h2>{import.meta.env.VITE_SOME_KEY}</h2>
                      </>
                    }
                  />
                </Routes>
              </BrowserRouter>
            </ErrorBoundary>
          </ThemeWrapper>
        </CssBaseline>
      </React.StrictMode>
    </>
  );
}

export default App;
