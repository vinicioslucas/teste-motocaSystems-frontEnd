import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Divider, InputAdornment, TextField } from '@mui/material';
import ReusableButton from './ReusableButton/ReusableButton';
import SearchIcon from '@mui/icons-material/Search';

interface NavBarProps {
  title: string;
  showSearch?: boolean; 
}

const NavBar: React.FC<NavBarProps> = ({ title, showSearch = false }) => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate('/add')
  }

  return (
    <Box>
      <AppBar position="static" sx={{height: 150}}>
        <Toolbar sx={{ minHeight: 64,}}>
          <Typography fontSize='30px' fontWeight='bold' variant="h5" component="div" sx={{ flexGrow: 1, marginTop: 9}}>
            {title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="end" color="inherit" aria-label="home" component={Link} to="/">
              <HomeIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>

        {showSearch && (
          <Box sx={{ display: 'flex', alignItems: 'baseline', padding: '16px' }}>
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
            <ReusableButton
            onClick={handleAddNew}
              type="submit"
              color="secondary"
              label="NOVO REGISTRO"
              sx={{ marginBottom: '20px' }}
            />
          </Box>
        )}

       

      </AppBar>
      <Divider variant="middle" />
    </Box>
    
  );
};

export default NavBar;
