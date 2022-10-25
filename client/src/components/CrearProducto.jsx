import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";


export const Crear_comp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const marca = e.target.password.value;
    const categoria = e.target.password.value;
    const descripcion = e.target.descripcion.value;
    const stock = e.target.stock.value;
   

  };

 

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: "100px" }}>
      <CssBaseline />
      <Box onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Agregar Producto
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="nombre"
                label="Nombre"
                name="nombre"
                autoComplete="Nombre"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="marca"
                label="Marca"
                type="marca"
                id="marca"
                autoComplete="marca"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="categoria"
                label="Categoria"
                type="categoria"
                id="categoria"
                autoComplete="categoria"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="descripcion"
                label="Descripcion"
                type="descripcion"
                id="descripcion"
                autoComplete="descripcion"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", flexGrow: "grow" }}>
            <TextField
              sx={{ m: 1 }}
              required
              fullWidth
              name="stock"
              label="Stock"
              type="stock"
              id="stock"
              autoComplete="stock"
            />
            <TextField
              sx={{ m: 1 }}
              required
              fullWidth
              name="Precio"
              label="precio"
              type="precio"
              id="precio"
              autoComplete="precio"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Box>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Agregar
          </Button >
          <Grid container justifyContent="flex-end">
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
