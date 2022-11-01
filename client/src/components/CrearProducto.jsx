import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import AttachFileIcon from "@mui/icons-material/AttachFile";


import { createProduct } from "../actions/createProduct";

import { useRef } from "react";
import { color, style } from "@mui/system";





export const Crear_comp = () => {

  const [arrayProductos, setArrayProductos] = useState(null);
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e)=> {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "HealtyFood_image");
    setLoading(true);
    const res = await fetch("https://api.cloudinary.com/v1_1/dt9tiuufp/HealtyFood_image/upload",
    {
      method: "POST",
      body: data,
      mode: 'no-cors'
    })
    console.log(res)
    const file = await res.json();
    setImage(file.secure_url)
    setLoading(false)
  }

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
                name="nombre"
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
                name="marca"
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
                onChange={(e) => handleChange(e)}
                value={input.descripcion}
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
              onChange={(e) => handleChange(e)}
              value={input.stock}
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
              onChange={(e) => handleChange(e)}
              value={input.precio}
              name="precio"
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
                onChange={uploadImage}
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
