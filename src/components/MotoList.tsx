import React from 'react';
import { Box, Typography, IconButton, ThemeProvider } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import theme from '../themes/violeta';

// Definição da estrutura de dados para uma Moto
interface Moto {
  codigo: string;
  modelo: string;
  cor: string;
  valor: string;
  status: string;
}

// Props esperadas pelo componente MotoList
interface MotoListProps {
  motos: Moto[]; // Array de motos a serem exibidas
  onEdit: (codigo: string) => void; // Função para editar uma moto
  onDelete: (codigo: string) => void; // Função para deletar uma moto
}

// Função para retornar estilos de acordo com o status da moto
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

// Componente funcional MotoList
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
      {/* Mapeia cada moto para renderizar na lista */}
      {motos.map((moto) => {
        const statusStyles = getStatusClass(moto.status); // Obtém estilos baseados no status da moto

        return (
          <Box
            key={moto.codigo} // Chave única para cada moto na lista
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
            {/* Seção do código da moto */}
            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ color: '#8C57FF', fontWeight: 'medium', fontSize: '18px' }}>#{moto.codigo}</Typography>
            </Box>

            {/* Seção do modelo, status, valor e cor da moto */}
            <Box sx={{ width: '70%', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Box sx={{ display: 'flex', gap: '16px' }}>
                {/* Título com o modelo da moto */}
                <Typography sx={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'uppercase' }}>HONDA {moto.modelo}</Typography>
                {/* Caixa colorida que representa o status da moto */}
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
                    ...statusStyles, // Estilos dinâmicos baseados no status
                  }}
                >
                  {moto.status} {/* Exibe o status da moto */}
                </Box>
              </Box>
              {/* Informações adicionais como valor e cor da moto */}
              <Typography sx={{ fontWeight: 'medium', fontSize: '15px' }}>Valor: R$ {moto.valor}</Typography>
              <Typography sx={{ fontWeight: 'medium', fontSize: '15px' }}>Cor: {moto.cor}</Typography>
            </Box>

            {/* Seção de botões de ação (editar e excluir) */}
            <Box sx={{ width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              {/* Botão de ícone para excluir a moto */}
              <IconButton onClick={() => onDelete(moto.codigo)}>
                <DeleteOutlineIcon sx={{ color: '#FF4C51' }} />
              </IconButton>
              {/* Botão de ícone para visualizar/editar a moto */}
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

export default MotoList; // Exporta o componente MotoList como padrão
