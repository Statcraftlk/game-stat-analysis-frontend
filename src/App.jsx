import Navbar from "./components/Navbar";

import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import {
  Box,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
export const SearchContext = createContext();
function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(
    localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : prefersDarkMode
      ? "dark"
      : "light"
  );
  useEffect(() => {
    localStorage.setItem("darkMode", mode);
  }, [mode]);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [search, setSearch] = useState({ search: "" });

  const updateSearchInputs = (input, value) => {
    setSearch((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  return (
    <>
      <SearchContext.Provider value={{ search, updateSearchInputs }}>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <Box
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
                minHeight: "100vh", // Ensure the box takes up the full height of the viewport
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Navbar setMode={setMode} mode={mode} />
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={{ xs: 0, md: 2 }} // Add the spacing prop here
                flex="1"
              >
                <Sidebar setMode={setMode} mode={mode} />
                <ContentArea />
              </Stack>
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </SearchContext.Provider>
    </>
  );
}

export default App;
