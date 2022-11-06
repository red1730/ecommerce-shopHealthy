import { Card, CardMedia, Skeleton, Box, Container, Typography,Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const CarritoCart = ({ imgCard, name, price, quantity }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box component={RouterLink} to={`/catalogo/`}>
            {
              <CardMedia
                component="img"
                height="90"
                image={`https://dkndrd.com/pf-healthyShop/${imgCard}` || <Skeleton height={90} />}
                alt={name}
                sx={{ width: 194, margin: '0 auto' }}
              />
            }
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Stack direction='column'>
            <Typography variant="h4" sx={{color:'black'}}>{name}</Typography>
            <Typography variant="h5" sx={{color:'black'}}>{price * quantity}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarritoCart;
