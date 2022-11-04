import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import Logo from '../assets/logo.png'

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

export default function NotFound404() {
  return (
    <>
      <Helmet>
        <title> 404 | No existe la página </title>
      </Helmet>

      <Box sx={{display: 'flex',bgcolor:'#637381', height:'90px', textAlign:'center', alignItems:'center' }}>
        <Avatar src={Logo} alt='logo' sx={{mr:3}} />
        <Typography  sx={{fontWeight:600, color:'white'}} >HEALTHY SHOP</Typography>
      </Box>
      <Container >
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            ¡Página no encontrada!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
          Lo sentimos, no pudimos encontrar la página que estás buscando. ¿Quizás has escrito mal la URL? Asegúrate de revisar tu ortografía.
          </Typography>

          <Box
            component="img"
            src="/src/dashboard/assets/illustration_404.svg"
            sx={{ height: 150, mx: 'auto', my: { xs: 5, sm: 6 } }}
          />
        <Stack direction='row' spacing={3}>
          <Button to="/catalogo" size="large" variant="contained" component={RouterLink} sx={{bgcolor:'#637381', '&:hover':{bgcolor:'#637381', color:'black' }}} >
            Regresar 👉 Catálogo
          </Button>
        </Stack>
        </StyledContent>
      </Container>
    </>
  );
}
