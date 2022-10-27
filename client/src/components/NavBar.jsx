import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import firebaseApp from '../credenciales';
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
const auth= getAuth(firebaseApp)
console.dir(auth)

import { Link as RouterLink, Navigate, useLocation, useNavigate, useParams} from 'react-router-dom';
import { FilterAcordion} from './FilterAcordion';
import { useDispatch, useSelector } from 'react-redux';

import HandleLogout from '../helpers/HandleLogOut'
import { AuthContext } from "../auth/AuthContext";
import { type } from '../../types/index'
import {getAuth, signOut} from 'firebase/auth'

import { Checkbox, Grid } from '@mui/material';
import { Filters } from './Filters';
import { SearchBar } from './Search';


const logged = [
  {
    label: 'Mi perfil',
    link: '/usuario/nombre'
  },
  {
    label: 'Lista de deseos',
    link: '/usuario/nombre/lista-de-deseos'
  },{
    label: 'Compras',
    link: '/usuario/nombre/compras'
  },
]

const admin =[
  {
    label: 'Mi perfil',
    link: '/admin/nombre'
  },
  {
    label: 'Lista de deseos',
    link: '/admin/nombre/lista-de-deseos'
  },
  {
    label: 'Dashboard',
    link: '/admin/nombre/dashboard'
  },
  {
    label: 'Administracion de productos',
    link: '/admin/nombre/administracion'
  },
]

const HideOnScroll = props => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export const NavBar = (props) => {
  const { estadoGlobal, manejarUsuario } = useContext(AuthContext)

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();

  const [logeado, setLogeado] = useState(false)
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  
  const {categName, allProducts} = useSelector(state=> state.catalogReducer)


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


//   const HandleLogout = () => {
//   dispatch({ type: type.logout})

//   navigate('/catalogo', { 
//     replace: true
//   })
// }
const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};
  const HandleLogin = () => {
    dispatch({ type: type.login})

    navigate('/catalogo', { 
     replace: true
  })
  };


  return (
    <>
    <HideOnScroll {...props} > 
    <AppBar sx={{ position:'-webkit-sticky',top:0, height:'63px'}} >
      <Container maxWidth="xl">
        <Toolbar >
          <IconButton component={RouterLink} to='/' >
            <Avatar alt='logo' src={logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 0,  }} />

          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{

              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              color: 'white',
              textDecoration: 'none',

            }}
          >
            HEALTHY FOOD
          </Typography>

          <Grid container sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Grid item xs={6}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

            </Grid>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography 
                    textAlign="center"
                    component={RouterLink}
                    sx={{textDecoration:'none', color:'inherit'}}
                    to='catalogo'
                    onClick={()=> { dispatch({type:'RESET_CATALOG'})}}
                    replace={true}
                    >Catálogo</Typography>
                </MenuItem>
                
                <FilterAcordion/>   

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography 
                    textAlign="center"
                    component={RouterLink}
                    sx={{textDecoration:'none', color:'inherit'}}
                    to='contacto'
                    >Contacto</Typography>
                </MenuItem>      
              

            </Menu>
            <Grid item xs={5}>

              <IconButton component={RouterLink} to="/" >
                <Avatar
                  alt="logo"
                  src={logo}
                  sx={{ display: { xs: "flex", md: "none", },}}
                />
              </IconButton>
            </Grid>
          </Grid>

          <Box 
            alignItems="center" 
            spacing={0} 
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-around', p:0, }}>
              <Button
                onClick={()=> {dispatch({type:'RESET_CATALOG'})}}
                sx={{  color: 'white', '&:hover':{color:'#485446'}  }}
                component={RouterLink}
                to='catalogo'
              >
                Catálogo
              </Button>
            
                  {categName.map((el, i)=> (
                    <Box  key={i} sx={{float:'inline-end'}} >
                      <Filters categTitle={el} handleCloseNavMenu={handleCloseNavMenu}  />
                    </Box>
                    ) )
                  }
            

              <Button
                onClick={handleCloseNavMenu}
                sx={{  my:2, color: 'white', '&:hover':{color:'#485446'}  }}
                component={RouterLink}
                to='contacto'
              >
                Contacto
              </Button>

              {/* //a partir de aqui checkear
              {console.log(user)}
              { user.logged? 
              // <Button 
              //   onClick={() => console.log(signOut(auth))}
              //   sx={{ my: 2, color: 'white', display: 'block' }}
              //   component={RouterLink}
              //   to='catalogo'
              // >Cerrar sesión
              // </Button>
              <HandleLogout/>
              :
              <Button 
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={RouterLink}
                to={'login'}
              >Iniciar sesión
              <Button />
              //hasta aqui */}


              {/* <Button 
                onClick={() => console.dir(auth.currentUser)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={RouterLink}
                to={'login'}
              >{(auth.currentUser === null )? 'Inicia Sesión' : 'Bienvenido ' + auth.currentUser.email}
              </Button> */}
              {/* {
                (! auth.accessToken == null) ? 
              <Button 
                onClick={signOut(auth)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={RouterLink}
                to='catalogo'
              >Cerrar Sesión
              </Button> 
              :
              <Button 
               sx={{ my: 2, color: 'white', display: 'block' }}
               component={RouterLink}
               to='login'
              > Iniciar sesión
             </Button>
              } */}
              {/* <Button 
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={RouterLink}
                to='registro'
              >Regístrate
//revisar
              </Button>
                }
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings"> */}

           </Box>

          <Box sx={{ flexGrow: 0, position:'relative' }}>
            <Tooltip title={(!user.logged)? 'Iniciar Sesión': 'Mi perfil'}>

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr:2}}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {(!user.logged)
                  ? <Button 
                  component={RouterLink}
                  sx={{textDecoration:'none', color: '#64B98B',"&:hover":{color:'#57AF57' } }}
                  to='login'
                 > Iniciar sesión
                  </Button>
                  :
                  <Box>
                    {logged.map( (el, i) => (
                    <MenuItem key={i} onClick={handleCloseUserMenu}>
                        <Typography 
                        sx={{textDecoration:'none', color: '#64B98B',"&:hover":{color:'#64B98B' } }}
                        component={RouterLink}
                        to={el.link}
                        >
                        {el.label}
                        </Typography>
                    </MenuItem>
                    ))}
                    <MenuItem onClick={handleCloseUserMenu}>
                        <HandleLogout />
                    </MenuItem>
                  </Box>
              }
              </Menu>
          </Box> 
        </Toolbar>
      </Container>
      {location.pathname =='/catalogo' && <SearchBar />}
    </AppBar>
    </HideOnScroll>
    </>
  );
};