import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação programática
import NavBar from '../components/NavBar'; // Importa o componente de barra de navegação
import MotoList from '../components/MotoList'; // Importa o componente de lista de motos
import { getMotos, deleteMoto, Moto } from '../services/motoService'; // Importa funções de serviço para obter e deletar motos
import { Box } from '@mui/material'; // Importa o componente Box do Material-UI para estruturação do layout

// Componente funcional MotoListPage
const MotoListPage: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]); // Estado para armazenar a lista de motos
  const navigate = useNavigate(); // Hook useNavigate para navegação entre páginas

  // Efeito useEffect para carregar a lista de motos ao montar o componente
  useEffect(() => {
    setMotos(getMotos()); // Chama a função getMotos para obter a lista de motos e atualiza o estado 'motos'
  }, []);

  // Função para lidar com a edição de uma moto
  const handleEdit = (codigo: string) => {
    navigate(`/edit/${codigo}`); // Navega para a rota de edição com o código da moto selecionada
  };

  // Função para lidar com a exclusão de uma moto
  const handleDelete = (codigo: string) => {
    deleteMoto(codigo); // Chama a função deleteMoto para excluir a moto com o código fornecido
    setMotos(getMotos()); // Atualiza a lista de motos após a exclusão
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Componente NavBar com título "Tabela de Motos" e opção de busca habilitada */}
      <NavBar title="Tabela de Motos" showSearch={true} /> 

      {/* Renderiza o componente MotoList passando a lista de motos, funções de edição e exclusão como props */}
      <MotoList motos={motos} onEdit={handleEdit} onDelete={handleDelete} />
    </Box>
  );
};

export default MotoListPage; // Exporta o componente MotoListPage como padrão
