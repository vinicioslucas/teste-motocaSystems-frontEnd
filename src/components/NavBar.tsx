import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link para navegação e useNavigate para navegar programaticamente
import { Box, Divider, InputAdornment, TextField } from '@mui/material'; // Importa componentes de UI do Material-UI
import ReusableButton from './ReusableButton/ReusableButton'; // Importa um botão reutilizável personalizado
import SearchIcon from '@mui/icons-material/Search';

// Props esperadas pelo componente NavBar
interface NavBarProps {
  title: string; // Título da barra de navegação
  showSearch?: boolean; // Indicador se deve mostrar o campo de busca (opcional, padrão é false)
}

// Componente funcional NavBar
const NavBar: React.FC<NavBarProps> = ({ title, showSearch = false }) => {
  const navigate = useNavigate(); // Hook useNavigate para navegação programática

  // Função para lidar com a navegação para adicionar novo registro
  const handleAddNew = () => {
    navigate('/add'); // Navega para a rota '/add'
  };

  return (
    <Box>
      {/* Barra de aplicativo (AppBar) do Material-UI */}
      <AppBar position="static" sx={{ height: 150 }}> {/* Define a altura da barra de navegação */}
        <Toolbar sx={{ minHeight: 64 }}> {/* Define a altura da barra de ferramentas */}
          {/* Título da barra de navegação */}
          <Typography fontSize='30px' fontWeight='bold' variant="h5" component="div" sx={{ flexGrow: 1, marginTop: 9 }}>
            {title}
          </Typography>

          {/* Ícones e botões à direita da barra de navegação */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Botão de ícone para navegar para a página inicial */}
            <IconButton edge="end" color="inherit" aria-label="home" component={Link} to="/">
              <HomeIcon />
            </IconButton>
            {/* Botão de ícone para exibir um avatar */}
            <IconButton edge="end" color="inherit">
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Se showSearch for verdadeiro, exibe a seção de busca */}
        {showSearch && (
          <Box sx={{ display: 'flex', alignItems: 'baseline', padding: '16px' }}>
            {/* Campo de texto para busca */}
            <TextField
              placeholder='Buscar por código, nome e cor'
              InputProps={{
                style: { borderRadius: '10px', color: 'white' },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="success" />
                  </InputAdornment>
                ),
              }}
              sx={{ marginLeft: 150, flexGrow: 1, marginRight: 2 }}
            />
            {/* Botão reutilizável para adicionar novo registro */}
            <ReusableButton
              onClick={handleAddNew} // Função a ser executada ao clicar no botão
              type="submit"
              color="secondary"
              label="NOVO REGISTRO"
              sx={{ marginBottom: '20px' }}
            />
          </Box>
        )}
      </AppBar>
      {/* Linha divisória abaixo da barra de navegação */}
      <Divider variant="middle" />
    </Box>
  );
};

export default NavBar; // Exporta o componente NavBar como padrão
