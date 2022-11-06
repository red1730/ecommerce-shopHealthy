
import Box from '@mui/material/Box';
import {
        SwipeableDrawer,
        List,
        ListItemButton,
        ListItem,
        ListItemIcon,
        ListItemText,
        Fab,
        Badge,
        Divider,
        Typography,
        Button
       } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CarritoCart from './CarritoCart';
import Scrollbar from '../dashboard/components/scrollbar';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useEffect } from 'react';
import {TYPES} from '../actions/ShoppingCartActions'
import { fCurrency } from '../dashboard/utils/formatNumber';
import { Link as RouterLink } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    overflowX:'hidden'
  },
}));
export const CartFlotingButton = ()=> {
  const dispatch= useDispatch()
  const {allProducts,cart, subtotal}= useSelector(state => state.catalogReducer)

  // const {products,cart}= state;

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // var subtotal = 0;
  useEffect(() => {
    dispatch({type:TYPES.TOTAL_AMOUNT})
  }, [cart, dispatch])
   

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
      sx={{ width: 450, bgcolor: "whitesmoke" , height:"100%",overflowX:'hidden'}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{mb:10}}>

        <ListItem sx={{display:'flex', justifyContent:'center', alignItems:'center',}}>
          <ShoppingBagOutlinedIcon fontSize='large'  />
        </ListItem>
        {
          cart.length
            ?
            cart.map((item, index) => {
            console.log(item.id);
            return <div key={index} >
            <ListItem  disablePadding>
              <CarritoCart id={item.id} imgCard={item.img} name={item.nombre} price={item.precio} quantity={item.quantity}/>
            </ListItem>
            <Divider sx={{border:'1px solid black'}}/>
            </div>
          })
          :<Box sx={{m:'0 auto', color: t=>t.palette.error.main , textAlign:'center', }}>
            <Typography  sx={{fontWeight:700, fontSize:'1.7rem', mt:20}} >
            Tu carrito esta vacío!
            </Typography>
            <ShoppingCartOutlinedIcon fontSize='large'/>
            
          </Box>
        
        }

        <ListItem>
          <Typography>
            { subtotal?`Subtotal: ${fCurrency(subtotal)}`:'' }
          </Typography>
        </ListItem>
        <ListItem sx={{display:'flex', justifyContent:'center', bottom:-100}}>
          <Button onClick={toggleDrawer(anchor, false)} variant='outlined' >{ cart.length? 'Seguir Comprando': 'Iniciar Compra ' }</Button>
        </ListItem>
        <ListItem sx={{display:'flex', justifyContent:'center', bottom:-100}}>
          {cart.length ? <Button component={RouterLink} to='/usuario/nombre/comprar' variant='outlined' >Finalizar Compra</Button>:''}
        </ListItem>
          
      </List>
    </Box>
  );

  return (
    <div>
        <>
          <Scrollbar
            sx={{
              height: 1,
              bgcolor:t=>t.palette.primary.light,
              '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column',
              overflowX:'hidden'
             },
            }}
          />
          <Box sx={{position: 'fixed', bottom: 30, right: 30, overflowX:'hidden'}} >
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
