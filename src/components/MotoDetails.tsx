import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';


interface Moto {
  codigo: string;
  modelo: string;
  cor: string;
  valor: string;
  status: string;
}

interface MotoDetailsProps {
  moto: Moto;
}


const MotoDetails: React.FC<MotoDetailsProps> = ({ moto }) => {

  return (
    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
      <Grid item xs={12} sm={8} md={6}>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {moto.modelo}
        </Typography>
        <Typography  color="textSecondary" >
          Código: {moto.codigo}
        </Typography>
        <Typography color="textSecondary">
          Cor: {moto.cor}
        </Typography>
        <Typography color="textSecondary">
          Valor: R$ {moto.valor}
        </Typography>
        <Typography color="textSecondary">
          Status: {moto.status}
        </Typography>
      </CardContent>
    </Card>
      </Grid>
    </Grid>
  );
};

export default MotoDetails;
