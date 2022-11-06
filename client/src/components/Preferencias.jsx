
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { modificarPerfil } from "../actions/perfil";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export const Preferencias_comp = () => {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
    neswsletter: false,
    menus: false,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modificarPerfil(input));
    Swal.fire("se modifico el perfil con Exito");

    setInput({
      // seteo a 0
      nombre: "",
      apellido: "",
      email: "",
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: "100px" }}>
      <CssBaseline />
      <Box
        onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Perfil
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Box sx={{ display: "flex", flexGrow: "grow" }}>
              <TextField
                sx={{ m: 1 }}
                id="nombre"
                label="Nombre"
                name="nombre"
                autoComplete="Nombre"
                value={input.nombre}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                sx={{ m: 1, wigth:200 }}
                name="apellido"
                label="Apellido"
                type="apellido"
                id="apellido"
                autoComplete="apellido"
                value={input.apellido}
                onChange={(e) => handleChange(e)}
              />
            </Box>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="email"
                value={input.email}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="telefono"
                label="Telefono"
                type="telefono"
                id="telefono"
                autoComplete="telefono"
                value={input.telefono}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="direccion"
                label="Direccion"
                type="direccion"
                id="direccion"
                autoComplete="direccion"
                value={input.direccion}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Box sx={{ display: "flex", flexGrow: "grow" }}>
              <TextField
                sx={{ m: 2 }}
                fullWidth
                name="dni"
                label="DNI"
                type="dni"
                id="dni"
                autoComplete="DNI"
                value={input.dni}
                onChange={(e) => handleChange(e)}
              />

              <TextField
                sx={{ m: 2 }}
                fullWidth
                name="Codigo Postal"
                label="Codigo Postal"
                type="Codigo Postal"
                id="Codigo Postal"
                autoComplete="Codigo Postal"
                value={input.CodigoPostal}
                onChange={(e) => handleChange(e)}
              />
            </Box>
            {/* <Box sx={{ display: "flex", flexGrow: "grow" }}>
              <FormControlLabel
                sx={{ m: 1 }}
                disabled
                control={<Switch />}
                label="Recibir Newsletter"
              />
              <FormControlLabel
                sx={{ m: 1 }}
                disabled
                control={<Switch />}
                label="Sugerencias de Menus"
              />
            </Box> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Actualizar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};