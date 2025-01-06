import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Team from './pages/Team';
import Expertise from './pages/Expertise';
import theme from './theme';  
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import Goals from './pages/Goals';
import { GlobalStyles } from '@mui/material';
import ScrollToTop from './helper/ScrollToTop';


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <GlobalStyles
        styles={{
          body: {
            background: 'linear-gradient(100deg, #1F1F1F, #0A0A0A, #0A0A0A)',
            margin: 0,
            padding: 0,
            minHeight: '100vh',
            color: '#ffffff', // Ensures text is readable
          },
        }}
      />
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/goals" element={<Goals/>} />
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
