
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
import {useSelector, useDispatch} from 'react-redux';
import { catalogReducer } from '../reducers/catalogReducer';
import CarritoCart from './CarritoCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
export const CartFlotingButton = ()=> {
  const dispatch= useDispatch()
  const {allProducts,cart}= useSelector(state => state.catalogReducer)

  // const {products,cart}= state;

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
      sx={{ width: 400, bgcolor: "whitesmoke" , height:"100%",}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {cart.map((item, index) => (
          <ListItem key={index} disablePadding>
            <CarritoCart imgCard={item.img} name={item.nombre} price={item.precio} quantity={item.quantity}/>
          </ListItem>
        ))}
        
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
            sx={{opacity:"90%",}}
          >
            {productList('right')}
          </SwipeableDrawer>
        </>
    </div>
  );
}
