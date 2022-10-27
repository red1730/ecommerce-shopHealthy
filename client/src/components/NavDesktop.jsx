import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Filters } from './Filters'
import logo from '../assets/logo.png';

export const NavDesktop = () => {

  const {categName, allProducts} = useSelector(state=> state.catalogReducer);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
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
    >HEALTHY FOOD
    </Typography>

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
              <Filters categTitle={el}  />
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
  </Box>
  </>
  )
}
