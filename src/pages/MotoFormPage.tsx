import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Importa o hook useParams para obter parâmetros da URL e useNavigate para navegação
import NavBar from '../components/NavBar'; // Importa o componente de barra de navegação
import MotoForm from '../components/MotoForm'; // Importa o componente de formulário de moto
import { getMotoByCodigo, addMoto, updateMoto, Moto } from '../services/motoService'; // Importa funções de serviço para obter, adicionar e atualizar dados da moto
import { Box } from '@mui/material'; // Importa componente Box do Material-UI para estruturação

// Componente funcional MotoFormPage
const MotoFormPage: React.FC = () => {
  const { codigo } = useParams<{ codigo: string }>(); // Obtém o parâmetro 'codigo' da URL usando o hook useParams
  const navigate = useNavigate(); // Hook useNavigate para navegação programática entre páginas
  const [initialData, setInitialData] = useState<Moto | undefined>(undefined); // Estado para armazenar os dados iniciais da moto a ser editada

  // Efeito useEffect para carregar os dados da moto inicial com base no 'codigo' da URL
  useEffect(() => {
    if (codigo) {
      const moto = getMotoByCodigo(codigo); // Chama a função getMotoByCodigo para obter os dados da moto com o código fornecido
      setInitialData(moto); // Define os dados da moto encontrada no estado initialData
    }
  }, [codigo]); // Dependência do efeito useEffect, disparado sempre que 'codigo' muda

  // Função para lidar com o salvamento das alterações na moto
  const handleSave = (moto: Moto) => {
    if (codigo) {
      updateMoto(moto); // Chama a função updateMoto para atualizar os dados da moto se 'codigo' existir
    } else {
      addMoto(moto); // Chama a função addMoto para adicionar uma nova moto se 'codigo' não existir
    }
    navigate('/motos'); // Navega para a rota '/motos' após salvar as alterações
  };

  return (
    <Box>
      {/* Componente NavBar com título dinâmico baseado na presença de 'codigo' */}
      <NavBar title={codigo ? "Editar Moto" : "Registro de Motos"} />

      {/* Renderiza o componente MotoForm passando onSave e initialData como props */}
      <MotoForm onSave={handleSave} initialData={initialData} />
    </Box>
  );
};

export default MotoFormPage; // Exporta o componente MotoFormPage como padrão
