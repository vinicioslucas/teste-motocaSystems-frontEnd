import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MotoListPage from './pages/MotoListPage';
import MotoFormPage from './pages/MotoFormPage';
import EditMotoPage from './pages/EditMotoPage';  
import theme from './themes/violeta';
import { ThemeProvider, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
   <ThemeProvider theme={theme}>
    <CssBaseline />
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/motos" element={<MotoListPage />} />
        <Route path="/add" element={<MotoFormPage />} />
        <Route path="/edit/:codigo" element={<EditMotoPage />} /> 
      </Routes>
    </Router>
   </ThemeProvider>
  );
};

export default App;
