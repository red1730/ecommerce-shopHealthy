import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NotFound from '../assets/notFount.jpg'

import { Box, Button, Divider, Grid, Skeleton } from "@mui/material";
import { RatingProduct } from "./RatingProduct";
import { Contador } from './Contador';

import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../helpers/getProductById";


export const ProductDetail_comp = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.catalogReducer);

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: "SET_ISLOADING_TRUE" });
      try {
        const productAux = await getProductById(id);
        dispatch({ type: "SET_ISLOADING_FALSE" });
        setProduct(productAux);
      } catch (error) {
        console.log("cayo el bendito back otra vez!");
      }
    };
    getProduct();
  }, [id, dispatch, navigate]);
  
  // if(!isLoading) return <Skeleton/>
  
  const { nombre, precio, img, stock } = product;
  

  return (
    <Box sx={{alignItems:'center', justifyContent:'center', display: 'flex', }}>
    
    <Grid container 
          spacing={2} 
          sx={{ alignItems:'center', justifyContent:'space-between', mt:15, width:'65%',  }} >
      <Grid item xs={12} md={7} sx={{alignItems:'center', justifyContent:'center',}} >
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}} >
          <CardMedia  
          component="img" 
          sx={{width:'auto', maxHeight:{xs:"300px", md:'400px', xl:"450px", margin:'0 auto'}}} 
          src={!`https://dkndrd.com/pf-healthyShop/${img}`?NotFound:`https://dkndrd.com/pf-healthyShop/${img}`} 
          alt={nombre}/>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} sx={{justifyContent:'center', alignItems:'center', }}>
        <Typography sx={{fontSize:30, textAlign:'center'}}
          variant="body2"
          color="text.primary"
          textTransform="uppercase"            
          fontWeight="bold"       
        >
          {nombre}
          
        </Typography>
        <Divider sx={{border:'1px solid black', my:2}} />
        <Typography
          variant="body1"
          color="text.primary"
          textAlign="center"
          sx={{ fontWeight: 600, marginTop: 1, fontSize:25 }}
        >
          {precio + " $"}
        </Typography>
        <Divider/>
        <RatingProduct sx={{alignItems: "center"}}/>
        <Divider/>
        <Typography>
          <CreditCardIcon color="secondary" sx={{ fontSize: 24, ml:{md:2, xs:0} }} /> Aceptamos tarjetas todas las tarjetas.
        </Typography>
        <Typography>
          <AddShoppingCartIcon color="secondary" sx={{ fontSize: 24, ml:{md:2, xs:0} }} /> Aceptamos pagos en efectivo.
        </Typography>
        <Typography>
          <DeliveryDiningIcon color="secondary" sx={{ fontSize: 24, ml:{md:2, xs:0} }} /> Lo llevamos a la puerta de tu casa.
        </Typography>
        <Typography>
          <Inventory2OutlinedIcon color="secondary" sx={{ fontSize: 24, ml:{md:2, xs:0} }} /> {`En stock: ${stock} udds`}
        </Typography>
        <Box sx={{ my:3, justifyContent:'center', alignItems:'certer', display:'flex' }}>
          <Contador  sx={{marginTop:4}}  />
        </Box>
      </Grid>
  
    </Grid>
    </Box>
  );
};
