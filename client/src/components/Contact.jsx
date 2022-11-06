
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {Footer_comp} from "./Footer";
import { Header_comp } from "./Header";

import { postContactoMensaje } from '../actions/contactoMail'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const Contact_comp = () => {
  const[nombre, setNombre]=React.useState('')
  const[email, setEmail]=React.useState('')
  const[mensaje, setMensaje]=React.useState('')
  const[leyendaNombre, setLeyendaNombre]=React.useState('')
  const[leyendaEmail, setLeyendaEmail]=React.useState('')
  const[leyendaMensaje, setLeyendaMensaje]=React.useState('')
  const[errorNombre, setErrorNombre]=React.useState(false)
  const[errorEmail, setErrorEmail]=React.useState(false)
  const[errorMensaje, setErrorMensaje]=React.useState(false)
  var emailRegex = new RegExp("^([A-Za-z]|[0-9])+$")
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    if(nombre !==''&& email !==''&& mensaje!=='' && !errorNombre&&!errorEmail && !errorMensaje){
      event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const info = {
      nombre: data.get("firstName"),
      email: data.get("email"),
      mensaje: data.get("comment"),
    }

    dispatch(postContactoMensaje(info))
      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu mensaje ha sido enviado con Exito!',
      showConfirmButton: false,
      timer: 2500
    })

      setTimeout(function(){
        navigate('/catalogo') 
      }, 3000)

    }else{
      event.preventDefault();
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oopssss....!',
        text:'Por favor complete el formulario.'
      
      })
     
    }
   
    }
 

  return (
    // <ThemeProvider theme={theme}>
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
            <MarkunreadMailboxIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contacto
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  onChange={(e)=>{setNombre(e.target.value);
                  if(nombre.length >25){
                    setErrorNombre(true)
                    setLeyendaNombre('Nombre no puede contener mas de 25 caracteres.')
                  }else{
                    setErrorNombre(false)
                    setLeyendaNombre('')
                  }
                  }}
                  error={errorNombre}
                  helperText={leyendaNombre}
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=>{setEmail(e.target.value);
                    if(emailRegex.test(email)){
                    setErrorEmail(true)
                    setLeyendaEmail('Email no valido')
                  }else{
                    setErrorEmail(false)
                    setLeyendaEmail('')
                  }}}
                  error={errorEmail}
                  helperText={leyendaEmail}
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={(e)=>{setMensaje(e.target.value);
                     if(mensaje.length < 10 || mensaje.length > 500){
                    setErrorMensaje(true)
                    setLeyendaMensaje('Escribe al menos 25 caracteres')
                  }else{
                    setErrorMensaje(false)
                    setLeyendaMensaje('')
                  }
                }}
                  error={errorMensaje}
                  helperText={leyendaMensaje}
                  multiline
          rows={4}
                  name="comment"
                  label="Mensaje..."
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
