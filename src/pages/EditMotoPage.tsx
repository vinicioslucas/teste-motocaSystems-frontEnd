import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa o hook useParams para obter parâmetros da URL e useNavigate para navegação
import NavBar from '../components/NavBar'; // Importa o componente de barra de navegação
import MotoForm from '../components/MotoForm'; // Importa o componente de formulário de moto
import { getMotoByCodigo, updateMoto, Moto } from '../services/motoService'; // Importa funções de serviço para obter e atualizar dados da moto

// Componente funcional EditMotoPage
const EditMotoPage: React.FC = () => {
  const { codigo } = useParams<{ codigo: string }>(); // Obtém o parâmetro 'codigo' da URL usando o hook useParams
  const navigate = useNavigate(); // Hook useNavigate para navegação programática entre páginas
  const [initialData, setInitialData] = useState<Moto | undefined>(undefined); // Estado para armazenar os dados iniciais da moto a ser editada

  // Efeito useEffect para carregar os dados da moto inicial com base no 'codigo' da URL
  useEffect(() => {
    if (codigo) {
      const moto = getMotoByCodigo(codigo); // Chama a função getMotoByCodigo para obter os dados da moto com o código fornecido
      if (moto) {
        setInitialData(moto); // Define os dados da moto encontrada no estado initialData
      } else {
        console.log(`Moto com código ${codigo} não encontrado.`); // Log de erro caso a moto não seja encontrada
      }
    }
  }, [codigo]); // Dependência do efeito useEffect, disparado sempre que 'codigo' muda

  // Função para lidar com o salvamento das alterações na moto
  const handleSave = (moto: Moto) => {
    updateMoto(moto); // Chama a função updateMoto para atualizar os dados da moto no serviço
    navigate('/motos'); // Navega para a rota '/motos' após salvar as alterações
  };

  return (
    <div>
      {/* Componente NavBar com título "Editar" */}
      <NavBar title="Editar" />

      {/* Renderiza o componente MotoForm somente se houver initialData */}
      {initialData && <MotoForm onSave={handleSave} initialData={initialData} />}
    </div>
  );
};

export default EditMotoPage; // Exporta o componente EditMotoPage como padrão
