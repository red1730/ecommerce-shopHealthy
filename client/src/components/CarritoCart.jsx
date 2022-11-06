import { Card, CardMedia, Skeleton, Box, Container, Typography,Grid, capitalize, IconButton, Button } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { fCurrency } from '../dashboard/utils/formatNumber';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useDispatch } from 'react-redux';
import {TYPES} from '../actions/ShoppingCartActions'

const CarritoCart = ({ imgCard, name, price, quantity, id }) => {
  const dispatch = useDispatch();

  const delFromCart = (id,all=false)=>{
    if(all){
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
    }else{
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
    }
}
  return (
    <Container >
      <Grid container spacing={2} sx={{ m:'5px 2px', bgcolor:'#F4F6F8',  display: 'flex', alignItems:'center'}}>
        <Grid item xs={3}  >
          <Box component={RouterLink} to={`/catalogo/`}   >
            {
              <CardMedia
                component="img"
                height="90"
                image={`https://dkndrd.com/pf-healthyShop/${imgCard}` || <Skeleton height={90} />}
                alt={name}
                sx={{ width: 194, margin: '0 auto' }}
              />
            }
          </Box>
        </Grid>
        <Grid item xs={7} sx={{display:'flex',mt:-5}} >
          <Box>
            <Typography  sx={{color:'black', fontSize:'20px', fontWeight:900,}}>{capitalize(name)}</Typography>
            <Stack direction='row' spacing={8}>
              <Typography  sx={{color:'black', fontSize:'16px',}}>{`${fCurrency(price)} x ${quantity} = ${fCurrency( price * quantity )}`}</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={1}>
        <IconButton onClick={()=>delFromCart(id)  } >
            <DeleteRoundedIcon  />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarritoCart;
