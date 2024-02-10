import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import { Box, Stack } from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <ContentArea />
          </Stack>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
