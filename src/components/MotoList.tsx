import React from 'react';
import { Box, Typography, IconButton, ThemeProvider } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import theme from '../themes/violeta';

interface Moto {
  codigo: string;
  modelo: string;
  cor: string;
  valor: string;
  status: string;
}

interface MotoListProps {
  motos: Moto[];
  onEdit: (codigo: string) => void;
  onDelete: (codigo: string) => void;
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Em estoque':
      return {
        backgroundColor: '#354546',
        color: '#56CA00'
      };
    case 'Sem estoque':
      return {
        backgroundColor: '#55304C',
        color: '#FF4C51'
      };
    case 'Em trânsito':
      return {
        backgroundColor: '#544146',
        color: '#FFB400'
      };
    default:
      return {};
  }
};

const MotoList: React.FC<MotoListProps> = ({ motos, onEdit, onDelete }) => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      {motos.map((moto) => {
        const statusStyles = getStatusClass(moto.status);

        return (
          <Box
            key={moto.codigo}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#312D4B',
              padding: '16px',
              borderRadius: '12px',
              color: 'white',
              height: '134px',
              marginTop: '20px',
            }}
          >
            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ color: '#8C57FF', fontWeight: 'medium', fontSize: '18px' }}>#{moto.codigo}</Typography>
            </Box>

            <Box sx={{ width: '70%', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'uppercase' }}>HONDA {moto.modelo}</Typography>
                <Box
                  sx={{
                    borderRadius: '35px',
                    width: '111px',
                    height: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'medium',
                    fontSize: '15px',
                    ...statusStyles,
                  }}
                >
                  {moto.status}
                </Box>
              </Box>
              <Typography sx={{ fontWeight: 'medium', fontSize: '15px' }}>Valor: R$ {moto.valor}</Typography>
              <Typography sx={{ fontWeight: 'medium', fontSize: '15px' }}>Cor: {moto.cor}</Typography>
            </Box>

            <Box sx={{ width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <IconButton onClick={() => onDelete(moto.codigo)}>
                <DeleteOutlineIcon sx={{ color: '#FF4C51' }} />
              </IconButton>
              <IconButton onClick={() => onEdit(moto.codigo)}>
                <RemoveRedEyeIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Box>
          </Box>
        );
      })}
    </Box>
  </ThemeProvider>
);

export default MotoList;
