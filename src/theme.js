import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', 
    },
    secondary: {
      main: '#2B4C65', 
    },
    error: {
      main: '#A64D79', 
    },
    warning: {
      main: '#A64D79', // Highlight
    },
    background: {
      default: '#191919', // Default background
      paper: '#191919' // Cards or elevated surfaces
    },
    text: {
      primary: '#FFFFFF', // Text on dark backgrounds
      secondary: '#A64D79', // Subtle text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontFamily: 'Grenze, sans-serif', fontSize: '2.5rem', fontWeight: 600 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    button: { textTransform: 'none' },

  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1D1D1D, #0A0A0A, #0A0A0A)', // Ensure the gradient is applied
          color: '#ffffff', // Ensure text is readable
        },
      },
    },
  },
});

export default theme;
