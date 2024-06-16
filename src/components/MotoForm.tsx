import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Box, Typography, ThemeProvider, MenuItem } from '@mui/material';
import theme from '../themes/violeta';
import ReusableButton from './ReusableButton/ReusableButton';

// Interface que define a estrutura de dados de uma Moto
interface Moto {
  codigo: string;
  modelo: string;
  cor: string;
  valor: string;
  status: string;
}

// Props esperadas pelo componente MotoForm
interface MotoFormProps {
  onSave: (moto: Moto) => void; // Função para salvar uma Moto
  initialData?: Moto; // Dados iniciais opcionais para preencher o formulário
}

// Opções para o campo de seleção de status da moto
const statusOptions = ['Em estoque', 'Sem estoque', 'Em trânsito'];

// Componente funcional MotoForm
export const MotoForm: React.FC<MotoFormProps> = ({ onSave, initialData }) => {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData] = useState<Moto>(initialData || {
    codigo: '',
    modelo: '',
    cor: '',
    valor: '',
    status: '',
  });

  // Estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(false);

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Evita o comportamento padrão de submit do formulário
    setIsLoading(true); // Define isLoading como true para mostrar um indicador de carregamento

    try {
      await onSave(formData); // Chama a função onSave passando os dados do formulário
    } catch (error) {
      console.error('Erro ao salvar:', error); // Loga um erro caso ocorra
    } finally {
      setIsLoading(false); // Define isLoading como false ao finalizar, independentemente de sucesso ou erro
    }
  };

  // Renderização do componente MotoForm
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
        {/* Título do formulário */}
        <Typography
          fontWeight='bold'
          fontSize='30px'
          color='white'
          variant='h5'
          sx={{ marginBottom: '40px' }}
        >
          Preencha as informações abaixo para registrar uma Moto 🏍️
        </Typography>

        {/* Formulário */}
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
          {/* Campo de entrada para o código da moto */}
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

          {/* Campo de entrada para o modelo da moto */}
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

          {/* Campo de entrada para a cor da moto */}
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

          {/* Campo de entrada para o valor da moto */}
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

          {/* Campo de seleção para o status da moto */}
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
            {/* Opções de status para seleção */}
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          {/* Botão reutilizável para submeter o formulário */}
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
