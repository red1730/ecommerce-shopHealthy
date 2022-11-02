import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";

export const Footer_comp = () => {
  return (
    <Box px= {{xs:3, sm:10}} py={{xs:5, sm:10}} bgcolor="text.secondary" color= "white">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Ayuda</Box>
            <Box>
              <Link href="/" color="inherit">
                Contacto
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Soporte
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Proteccion de datos
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Cuenta</Box>
            <Box>
              <Link href="/" color="inherit">
                Login
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Registrarce
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Mensaje</Box>
            <Box>
              <Link href="/" color="inherit">
                Historia
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Contacto
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{xs:5, sm:10}} pb={{xs:5, sm:0}}>
          Healty Food &reg; {new Date().getFullYear()}

        </Box>
      </Container>
    </Box>
  );
};
