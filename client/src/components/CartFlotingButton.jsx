
import Box from '@mui/material/Box';
import {
        SwipeableDrawer, 
        List, 
        ListItemButton, 
        ListItem, 
        ListItemIcon, 
        ListItemText,
        Fab,
        Badge
       } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
export const CartFlotingButton = ()=> {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({right: open });
  };

  const productList = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['producto', 'otro', 'mas', 'y asi'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <p>
            Tarea: renderizar en este espacio los productos que el cliente vaya añadiendo
            y guardar en el local storage. mirar <a href="https://almacensaludable.ar/"> almacen saludable </a> 
            para más detalles.
            En lo posible crear nuevos componente para cada cosa y no sobrecargar este componente
          </p>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
        <>
          <Box sx={{position: 'fixed', bottom: 30, right: 30,}} >
            <Fab 
              color="white" 
              aria-label="add" 
              onClick={toggleDrawer('right', true)} >
                <StyledBadge badgeContent={5} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
            </Fab>
          </Box>

          <SwipeableDrawer
            anchor='right'
            open={state.right}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {productList('right')}
          </SwipeableDrawer>
        </>
    </div>
  );
}
