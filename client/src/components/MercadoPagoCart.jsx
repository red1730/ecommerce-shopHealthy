import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MercadoLogo from '../assets/mercadopago.png'

export const MercadoPagoCart = ()=> {
  return (
    <Card sx={{ maxWidth: 345, bgcolor:'white' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={MercadoLogo}
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Paga con mercado pago
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
