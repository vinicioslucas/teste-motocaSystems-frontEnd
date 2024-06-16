import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface ReusableButtonProps extends ButtonProps {
  isLoading?: boolean;
  label: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ isLoading, label, ...props }) => {
  return (
    <Button
      {...props}
      variant="contained"
      startIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : <AddIcon />}
    >
      {isLoading ? 'Carregando...' : label}
    </Button>
  );
};

export default ReusableButton;
