import { createTheme, makeStyles } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#312D4B', 
      main: '#2A233C', 
      dark: '#312D4B', 
      contrastText: '#ffffff', 
    },
    secondary: {
      light: '#3BdDFB', 
      main: '#3BADFB', 
      dark: '#3BdDFB', 
      contrastText: '#ffffff', 
    },
    success: {
      light: '#ffffff', 
      main: '#ffffff', 
      dark: '#ffffff', 
      contrastText: '#ffffff', 
    },
    info: {
      light: '#FF4C51', 
      main: '#FF4C51', 
      dark: '#FF4C51', 
      contrastText: '#FF4C51', 
    }
  },
});



export default theme;
