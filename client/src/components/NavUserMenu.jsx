import { IconButton, Menu, Tooltip, Box, Button, MenuItem, Typography, Avatar, capitalize } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HandleLogout from '../helpers/HandleLogOut';
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { usuarioLogged, admin } from "../helpers/userMenuLinks";
import { AuthContext } from "../auth/AuthContext";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export const NavUserMenu = ({user}) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
//console.log("el user: " + user)
//console.dir(user)
  return (
    <Box sx={{ flexGrow: 0, position:'relative' }}>
        <Tooltip title={(!user.logged)? 'Iniciar Sesión': 'Mi perfil'}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr:2}}>

              {user.logged?<Avatar {...stringAvatar(`${user.nombre} ${user.apellido}`)} sx={{width: 30, height: 30, fontSize:'1rem'}}  src={`https://res.cloudinary.com/dw8jw0zhx/image/upload/v1668870177/healthy_shop_users/${user.img}`} />
              :<AccountCircleIcon/>}

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
        {
          (!user.logged)
            ? <Button 
            component={RouterLink}
            sx={{textDecoration:'none', color: '#64B98B',"&:hover":{color:'#57AF57' } }}
            to='/acceso'
            > Iniciar sesión
            </Button>

            :(user.logged && user.uid == user.adminId)?
            <Box>
            {admin(user.nombre).map( (el, i) => (
            <MenuItem key={i} onClick={handleCloseUserMenu} component={RouterLink} to={el.link} >
                <Typography 
                sx={{textDecoration:'none', color: '#64B98B',"&:hover":{color:'#64B98B' } }}

                >
                {el.label}
                </Typography>
            </MenuItem>
            ))}
            <MenuItem onClick={handleCloseUserMenu}>
                <HandleLogout />
            </MenuItem>
          </Box>

            :

            <Box>
            {usuarioLogged(user.nombre).map( (el, i) => (
            <MenuItem key={i} onClick={handleCloseUserMenu} component={RouterLink} to={el.link} >
                <Typography 
                sx={{textDecoration:'none', color: '#64B98B',"&:hover":{color:'#64B98B' } }}

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
  )
}
