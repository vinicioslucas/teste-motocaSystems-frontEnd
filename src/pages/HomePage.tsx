import React from 'react';
import NavBar from '../components/NavBar';

import { useNavigate } from 'react-router-dom';
import ReusableButton from '../components/ReusableButton/ReusableButton';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddNewMoto = () => {
    navigate('/add')
  }

  return (
    <div>
      <NavBar title="Home" />
      <h1>Bem-vindo ao Sistema de Gestão de Motos</h1>
      <ReusableButton label='ADD MOTO' color='secondary' onClick={handleAddNewMoto} />
    </div>
  );
};

export default HomePage;
