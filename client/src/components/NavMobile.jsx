import { Avatar, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { FilterAcordion } from './FilterAcordion';
import logo from '../assets/logo.png';
import { useState } from 'react';


export const NavMobile = () => {
    
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

  return (
    <Grid container sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Grid item xs={6}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{mt:'7px'}}
              >
                <MenuIcon />
              </IconButton>

            </Grid>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "center",
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
                
                <FilterAcordion />   

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
  )
}
