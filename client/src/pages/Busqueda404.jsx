import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import Logo from '../assets/logo.png'
import { useDispatch } from 'react-redux';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Busqueda404({producto = ''}) {

    const dispatch = useDispatch()
  return (
    <>
      <Helmet>
        <title> 404 | Producto no existe </title>
      </Helmet>

      <Container >
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            ¡Producto no encontrado!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
          {`Lo sentimos, no contamos con el producto ${producto.slice(24)}`}
          </Typography>

          <Box
            component="img"
            src="/src/dashboard/assets/illustration_404.svg"
            sx={{ height: 150, mx: 'auto', my: { xs: 5, sm: 6 } }}
          />
        <Stack direction='row' spacing={3}>
          <Button 
            size="large" 
            variant="contained" 
            sx={{bgcolor:'#637381', '&:hover':{bgcolor:'#637381', color:'black' }}}
            onClick={e=>dispatch({type:'RESET_CATALOG'})}            
            >
            Recargar Catálogo
          </Button>
        </Stack>
        </StyledContent>
      </Container>
    </>
  );
}
