import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

export const Header_comp = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar>
        <Toolbar>
          <Link href="/catalogo" color="inherit" underline="none">
            <Typography variant="h6" component="div">
              Healty Food
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}></Box>
      </Container>
    </React.Fragment>
  );
};