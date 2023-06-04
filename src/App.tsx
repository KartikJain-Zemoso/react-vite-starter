import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeWrapper from "./wrappers/ThemeWrapper";
import { CssBaseline } from "@mui/material";
import ErrorBoundary from "./wrappers/ErrorBoundary";
function App() {
  return (
    <>
      <React.StrictMode>
        <CssBaseline>
          <ThemeWrapper>
            <ErrorBoundary>
              <BrowserRouter>
                <Routes>
                  <Route index element={<h1>React Vite Starter</h1>} />
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
