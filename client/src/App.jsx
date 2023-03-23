import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import Dashboard from "./Pages/DashBoard"
import LogIn from "./Pages/Login" 
import AppBar from "./components/AppBar"
import Footer from "./components/Footer"
import Missions from "./Pages/Missions"
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Formulaire from "./checkout/Formulaire"
import Forum from "./Pages/Forum"


const mdTheme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/DashBoard" element={<Dashboard />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/Missions" element={<Missions />} />
              <Route path="/Formulaire" element={<Formulaire />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App;
