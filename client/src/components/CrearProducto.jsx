import * as React from "react";
import { useState, useEffect } from "react";

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
import AttachFileIcon from "@mui/icons-material/AttachFile";
import firebaseApp from "../credenciales";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(firebaseApp);




export const Crear_comp = () => {
  const [arrayProductos, setArrayProductos] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const marca = e.target.marca.value;
    const categoria = e.target.categoria.value;
    const descripcion = e.target.descripcion.value;
    const stock = e.target.stock.value;
  };

  async function buscarDocumentOrCrearDocumento(idDocumento) {
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    // buscar documento
    const consulta = await getDoc(docuRef);
    // revisar si existe
    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      return infoDocu.productos;
    } else {
      // si no existe
      await setDoc(docuRef, { productos: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.productos;
    }
  }

  useEffect(() => {
    async function fetchProductos() {
      const productosFetchadas = await buscarDocumentOrCrearDocumento(
        correoUsuario
      );
      setArrayProductos(productosFetchadas);
    }

    fetchProductos();
  }, []);







  async function filehandler(e) {
    const archivoLocal = e.target.files[0];    
    const archivoRef = ref(storage, `documentos/${archivoLocal.nombre}`);
    await uploadBytes(archivoRef, archivoLocal);
    const urlDescarga = await getDownloadURL(archivoRef);
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
            <Button variant="contained" component="label" >
              <AttachFileIcon/>
              <input hidden accept="image/*" multiple type="file" onChange={filehandler}/>
            </Button>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Agregar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};