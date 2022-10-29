import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Swal from 'sweetalert2'

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import firebaseApp from "../credenciales";

import { createProduct } from "../actions/createProduct";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { color, style } from "@mui/system";

const firestore = getFirestore();
const storage = getStorage(firebaseApp);

export const Crear_comp = () => {
  const [arrayProductos, setArrayProductos] = useState(null);
  const dispatch = useDispatch();

  //Firebase
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
      await setDoc(docuRef, { productos: [..."no foto"] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.productos;
    }
  }
  useEffect(() => {
    async function fetchProductos() {
      const productosFetchadas = await buscarDocumentOrCrearDocumento();
      // correoUsuario
      setArrayProductos(productosFetchadas);
    }
    fetchProductos();
  }, []);

  async function filehandler(e) {
    const archivoLocal = e.target.files[0];
    const archivoRef = ref(storage, `documentos/${archivoLocal.nombre}`);
    await uploadBytes(archivoRef, archivoLocal);
    const urlDescarga = await getDownloadURL(archivoRef);
  }

  // const inputNombre = useRef(null);
  // const inputMarca = useRef(null);
  // const inputCategoria = useRef(null);
  // const inputDescripcion = useRef(null);
  // const inputStock = useRef(null);
  // const inputPrecio = useRef(null);

  const [input, setInput] = useState({
    nombre: "",
    marca: "",
    categoria: "",
    descripcion: "",
    stock: "",
    precio: "",
  });
  const handleChange = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value, // cargamos los name="" de cada input
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(input));
    Swal.fire("Producto Agregado");

    setInput({
      // seteo a 0
      nombre: "",
      marca: "",
      categoria: "",
      descripcion: "",
      stock: "",
      precio: "",
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
                onChange={(e) => handleChange(e)}
                id="nombre"
                label="Nombre"
                value={input.nombre}
                autoComplete="Nombre"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={(e) => handleChange(e)}
                value={input.marca}
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
                onChange={(e) => handleChange(e)}
                value={input.categoria}
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
                onChange={(e) => handleChange(e)}
                value={input.descripcion}
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
              onChange={(e) => handleChange(e)}
              value={input.stock}
              label="Stock"
              type="stock"
              id="stock"
              autoComplete="stock"
            />
            <TextField
              sx={{ m: 1 }}
              required
              fullWidth
              onChange={(e) => handleChange(e)}
              value={input.precio}
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
            <Button variant="contained" component="label">
              <AttachFileIcon />

              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={filehandler}
              />
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
