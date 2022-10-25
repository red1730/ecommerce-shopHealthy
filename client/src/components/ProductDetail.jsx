import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NotFound from '../assets/notFount.jpg'

import { Box, Button, Divider, Grid, Skeleton } from "@mui/material";
import { RatingProduct } from "./RatingProduct";
import { Contador } from './Contador';

import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
  
  const { nombre, precio, img } = product;
  

  return (
    <Box sx={{alignItems:'center', justifyContent:'center', display: 'flex', minWidth:'100vh'}}>
    
    <Grid container 
          spacing={0} 
          sx={{ alignItems:'center', justifyContent:'center', mt:15, width:'60%' }} >
      <Grid item xs={6} sx={{margin:"0 auto"}} >
        <CardMedia  component="img" sx={{width:'auto', maxHeight:"450px"}} src={`https://dkndrd.com/pf-healthyShop/${img}`?NotFound:true} alt={nombre}/>
      </Grid>
      <Grid item xs={6} sx={{margin:"0 auto"}}>
        <Typography sx={{fontSize:30}}
          variant="body2"
          color="text.primary"
          textTransform="uppercase"            
          fontWeight="bold"       
        >
          {nombre}
          
        </Typography>
        <Divider/>
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
          <CreditCardIcon color="secondary" sx={{ fontSize: 24 }} /> Aceptamos
          tarjetas todas las tarjetas.
        </Typography>
        <Typography>
          <AddShoppingCartIcon color="secondary" sx={{ fontSize: 24 }} />
          Aceptamos pagos en efectivo.
        </Typography>
        <Typography>
          <DeliveryDiningIcon color="secondary" sx={{ fontSize: 24 }} /> Lo
          llevamos a la puerta de tu casa.
        </Typography>
        <Contador  sx={{marginTop:4}}  />
      </Grid>
  
    </Grid>
    </Box>
  );
};
