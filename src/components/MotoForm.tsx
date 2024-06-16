import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Box, Typography, ThemeProvider, MenuItem } from '@mui/material';
import theme from '../themes/violeta';
import ReusableButton from './ReusableButton/ReusableButton';

interface Moto {
  codigo: string;
  modelo: string;
  cor: string;
  valor: string;
  status: string;
}

interface MotoFormProps {
  onSave: (moto: Moto) => void;
  initialData?: Moto;
}

const statusOptions = ['Em estoque', 'Sem estoque', 'Em trânsito'];

export const MotoForm: React.FC<MotoFormProps> = ({ onSave, initialData }) => {
   const [formData, setFormData] = useState<Moto>(initialData || {
    codigo: '',
    modelo: '',
    cor: '',
    valor: '',
    status: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSave(formData);
    } catch (error) {
      console.error('Erro ao salvar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Typography
          fontWeight='bold'
          fontSize='30px'
          color='white'
          variant='h5'
          sx={{ marginBottom: '40px' }}
        >
          Preencha as informações abaixo para registrar uma Moto 🏍️
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
          <TextField
            label='Código'
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { borderRadius: '10px', border: '1px solid white', color: 'white' },
            }}
          />

          <TextField
            label="Modelo"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { borderRadius: '10px', border: '1px solid white', color: 'white' },
            }}
          />

          <TextField
            label="Cor"
            name="cor"
            value={formData.cor}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { borderRadius: '10px', border: '1px solid white', color: 'white' },
            }}
          />

          <TextField
            label="Valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="string"
            variant="filled"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { borderRadius: '10px', border: '1px solid white', color: 'white' },
            }}
          />

          <TextField
            select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { borderRadius: '10px', border: '1px solid white', color: 'white' },
            }}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <ReusableButton
            type="submit"
            color="secondary"
            fullWidth
            isLoading={isLoading}
            label="REGISTRAR"
            sx={{ marginTop: '15px' }}
          />
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default MotoForm;



