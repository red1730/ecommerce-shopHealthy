// import { AuthContext } from "../auth/AuthContext";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Home, Register } from "../pages";
import { Link as RouterLink } from "react-router-dom";
import firebaseApp from '../credenciales'
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import {getAuth, createUserWithEmailAndPassword, signInWithRedirect,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth'
import { type } from "../../types";
import Swal from 'sweetalert2'
import validator from 'validator'
const auth= getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider();

//var passwordRegex = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$', 'g')  
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


export const Login_comp =  () => {
  const[email, setEmail]=React.useState('')
  const[password, setPassword]=React.useState('')
  const[leyendaEmail, setLeyendaEmail]=React.useState('')
  const[leyendaPassword, setLeyendaPassword]=React.useState('')
  const[errorEmail, setErrorEmail]=React.useState(false)
  const[errorPassword, setErrorPassword]=React.useState(false)
  

  const {dispatch} = useContext(AuthContext); 
  // console.log(user)
  let navigate = useNavigate();

  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorPassword(false)
      setLeyendaPassword('Excelente 😉')
    } else {
      setErrorPassword(true)
      setLeyendaPassword(
      'Escribe una clave bien fuerte 💪😉, mas de  8 caracteres, 1 minuscula, 1 mayuscula, 1 número, 1 simbolo')      
    }
  }
 

const handleSubmit = async (e) => {

if(errorEmail || errorPassword){
  e.preventDefault();
 Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Oopssss....!',
    text:'Por favor complete el formulario.'  
  })
}else{
  e.preventDefault();    
  const correo= e.target.email.value
  const contraseña= e.target.password.value
  // console.log(correo,contraseña)
  const usuario = await signInWithEmailAndPassword(auth,correo,contraseña)

  const action = {
    type: type.login,
    payload: {
      name: usuario.user.email
    }
  }
  dispatch(action)
  console.log(action)
  // console.log(usuario)
  // let valor = true;
  // updateState(valor)
  // console.log(logeado, 'estado en el Login')
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Bienvenido 🥰!',
    showConfirmButton: false,
    timer: 1500
  })

    setTimeout(function(){
      navigate('/catalogo') 
    }, 2000);
      // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
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

    // const result = await getRedirectResult(auth);
    // console.log(result)
    // if (result) {
    //   // This is the signed-in user
    //   const user = result.user;
    //   // This gives you a Facebook Access Token.
    //   const credential = provider.credentialFromResult(auth, result);
    //   const token = credential.accessToken;
    // }

  
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
        navigate('/catalogo') 
      }, 4500);

  };




  return (
      <Container component="main" maxWidth="xs" sx={{marginTop:"100px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
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
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => validate(e.target.value)}
              error={errorPassword}
              helperText={leyendaPassword}
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>


            <Button onClick={handleSubmitGoogle} 
            type="submit" fullWidth variant="contained" to='/catalogo' sx={{ mt: 1 }} >
             Inicia Sesión con Google

            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste el password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/registro" variant="body2">
                  {"No tenes cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
};
