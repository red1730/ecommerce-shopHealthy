import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Home } from '../pages';
import{Link as RouterLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { type } from "../../types";
import firebaseApp from '../credenciales'

import {getAuth, createUserWithEmailAndPassword, signInWithRedirect,GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
const auth= getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider();
import Swal from 'sweetalert2'
import validator from 'validator'
var emailRegex = new RegExp("^([A-Za-z]|[0-9])+$")


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href={<Home />}>
        Henry Proyecto Grupal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


export const Register_comp = () => {
  const[email, setEmail]=React.useState('')
  const[password, setPassword]=React.useState('')
  const[leyendaEmail, setLeyendaEmail]=React.useState('')
  const[leyendaPassword, setLeyendaPassword]=React.useState('')
  const[errorEmail, setErrorEmail]=React.useState(false)
  const[errorPassword, setErrorPassword]=React.useState(false)
  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setPassword(`${value}`)
      setErrorPassword(false)
      setLeyendaPassword('Excelente 😉')
    } else {
      setErrorPassword(true)
      setLeyendaPassword(
      'Escribe una clave bien fuerte 💪😉, mas de  8 caracteres, 1 minuscula, 1 mayuscula, 1 número, 1 simbolo')      
    }
  }

  const { dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // console.log(email,password,'esto viene de los estados...')

      if(!errorPassword && !errorEmail && email !== '' && password !== '' ){
        e.preventDefault();
      const correo= e.target.email.value
      const contraseña= e.target.password.value
      console.log(correo,contraseña)
      
      const usuario = await createUserWithEmailAndPassword(auth,correo,contraseña)
      console.log('DATOS USUARIO FIREBASE...')
      console.log(usuario)
      const action = {
        type: type.login,
        payload: {
          name: usuario.user.email
        }
      }
      dispatch(action)
      console.log(action)
  
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registrado con Exito! ya falta menos 😋!',
        showConfirmButton: false,
        timer: 1000
      })
        setTimeout(function(){
          navigate('/usuario/nombre') // debe Navegar a Ingresar datos faltantes del Usuario..
        }, 2000);
      }
      else {

        e.preventDefault();
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oopssss....!',
          text:'Por favor complete el formulario.'  
        })
      }
   
      
    
  };

  const handleSubmitGoogle =  async  (e) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token, 'token....')
      console.log(result , 'resultado...de google.')
      // The signed-in user info.
      const user = result.user;
      const action = {
        type: type.login,
        payload: {
          name: user.email
        }
      }
      dispatch(action)
      // ...
      console.log(user, 'Usuario.')
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

    // console.log(action)
    setTimeout(function(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido 🥰!',
        showConfirmButton: false,
        timer: 1500
      })
    }, 3000);

      setTimeout(function(){
        navigate('/usuario/nombre') 
      }, 4500);

  };

  return (
      <Container component="main" maxWidth="xs" sx={{marginTop:"100px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>


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
                  required
                  fullWidth
                  onChange={(e) => validate(e.target.value)}
                  error={errorPassword}
                  helperText={leyendaPassword}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quiero recibir ofertas y novedades via email."
                />
              </Grid> 
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>

            <Button
            onClick={handleSubmitGoogle} 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Registrate con Google
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to = '/acceso' variant="body2">
                  Ya tenes una cuenta? Has click aquí
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
};
