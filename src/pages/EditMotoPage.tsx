import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MotoForm from '../components/MotoForm';
import { getMotoByCodigo, updateMoto, Moto } from '../services/motoService';

const EditMotoPage: React.FC = () => {
  const { codigo } = useParams<{ codigo: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<Moto | undefined>(undefined);

  useEffect(() => {
    if (codigo) {
      const moto = getMotoByCodigo(codigo);
      if (moto) {
        setInitialData(moto);
      } else {
        console.log(`Moto com codigo ${codigo} não encontrado.`);
      }
    }
  }, [codigo]);

  const handleSave = (moto: Moto) => {
    updateMoto(moto);
    navigate('/motos');
  };
  return (
    <div>
      <NavBar title="Editar" />
      {initialData && <MotoForm onSave={handleSave} initialData={initialData} />}
    </div>
  );
};

export default EditMotoPage;
