
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputLabel, MenuItem } from "@mui/material";

import {Footer_comp} from "./Footer";
import { Header_comp } from "./Header";
import {Select} from "@mui/material";

import { postContactoMensaje } from '../actions/contactoMail'
import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2'






export const Review_comp = () => {
  

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
      event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const info = {
      puntaje: data.get("puntaje"),
      titulo: data.get("titulo"),
      comentario: data.get("comentario"),
      
    }

    dispatch(postContactoMensaje(info))
      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu Comentario fue cargado!',
      showConfirmButton: false,
      timer: 2500
    })

    // puntaje, titulo, comentario, productoId, usuarioId
     
    }
   
   
 

  return (
    
    <>
    <Header_comp/>
      <Container component="main" maxWidth="md" sx={{marginTop:"100px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <StarHalfIcon/>
          <StarHalfIcon/>
          <StarHalfIcon/>
         


          </Avatar>
          <Typography component="h1" variant="h3">
                      Review
                    </Typography>
          
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 4 }}
          >
            <Grid container spacing={2}>
              <Box sx={{ display: "flex", flexGrow: "grow" }}>

              <Grid item xs={6}>
                <TextField
                  autoComplete="Titulo"
                  name="titulo"
                  required
                  fullWidth
                  onChange={(e)=>{setNombre(e.target.value);                                        
                  }}                
                  id="titulo"
                  label="Titulo"
                  autoFocus
                  />
              </Grid>
              <Grid item sx={{  wigth:200 }}>

          <InputLabel id="demo-simple-select-label">Puntaje</InputLabel>
  <Select
    labelId="puntaje"
    id="puntaje"
    value="puntaje"
    label="Puntaje"
    // onChange={handleChange}
    >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
  </Select>
    </Grid>
                </Box>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={(e)=>{setMensaje(e.target.value);
                    
                  }}
                  multiline
          rows={4}
                  name="comment"
                  label="Comentario..."
                  type="comment"
                  id="comment"
                />
              </Grid>
            </Grid>
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 0 }}
            >
              Enviar
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer_comp/>
      </>
  );
}
