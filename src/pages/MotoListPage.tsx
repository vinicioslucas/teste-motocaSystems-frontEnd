import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MotoList from '../components/MotoList';
import { getMotos, deleteMoto, Moto } from '../services/motoService';
import { Box } from '@mui/material';


const MotoListPage: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMotos(getMotos());
  }, []);

  const handleEdit = (codigo: string) => {
    navigate(`/edit/${codigo}`);
  };

  const handleDelete = (codigo: string) => {
    deleteMoto(codigo);
    setMotos(getMotos());
  };
  
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <NavBar title="Tabela de Motos" showSearch={true} /> 
      <MotoList motos={motos} onEdit={handleEdit} onDelete={handleDelete} />
    </Box>
  );
};

export default MotoListPage;
