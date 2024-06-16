import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MotoForm from '../components/MotoForm';
import { getMotoByCodigo, addMoto, updateMoto, Moto } from '../services/motoService';
import { Box } from '@mui/material';

const MotoFormPage: React.FC = () => {
  const { codigo } = useParams<{ codigo: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<Moto | undefined>(undefined);

  useEffect(() => {
    if (codigo) {
      const moto = getMotoByCodigo(codigo);
      setInitialData(moto);
    }
  }, [codigo]);

  const handleSave = (moto: Moto) => {
    if (codigo) {
      updateMoto(moto);
    } else {
      addMoto(moto);
    }
    navigate('/motos');
  };

  return (
    <Box>
      <NavBar title={codigo ? "Editar Moto" : "Registro de Motos"} />
      <MotoForm onSave={handleSave} initialData={initialData} />
    </Box>
  );
};

export default MotoFormPage;
