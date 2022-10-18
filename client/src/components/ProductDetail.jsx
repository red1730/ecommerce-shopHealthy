
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Button, Skeleton } from "@mui/material";
import { RatingProduct } from "./RatingProduct";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../helpers/getProductById";
import { Container } from "@mui/system";

export const ProductDetail_comp = () => {


  const {id} = useParams();
  const [product, setProduct] = useState({});
  
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state=>state.catalogReducer)

  const navigate = useNavigate()

  useEffect(() => {
      const getProduct= async()=>{
          dispatch({type:'SET_ISLOADING_TRUE'})
          try {
              const productAux = await getProductById(id);
              dispatch({type:'SET_ISLOADING_FALSE'})
              setProduct(productAux)
          } catch (error) {
              console.log("cayo el bendito back otra vez!")
          }
      }
      getProduct()
  }, [id, dispatch, navigate])
  
  // if(!isLoading) return <Skeleton/>

  const {img, nombre, precio} = product;

  return (
    <Container sx={{margin:"90px auto", }}>
      <Card sx={{ width: 490, height: 410, margin:'0 auto' }}>
        {img ? (
          <CardMedia
            component="img"
            height="194"
            image={img}
            alt={nombre}
          />
        ) : (
          <Skeleton variant="rectangular" sx={{height:"194px"}} />
        )}
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {nombre}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            textAlign="center"
            sx={{ fontWeight: 600, marginTop: 3 }}
          >
            {precio + "$"}
          </Typography>
          {/* <RatingProduct/> */}
          <CreditCardIcon />
          <Typography>Aceptamos tarjetas con MercadoPago</Typography>
          <AddShoppingCartIcon />
          <Typography>Aceptamos pagos en efectivo</Typography>
          <DeliveryDiningIcon />
          <Typography>Lo llevamos a la puerta de tu casa</Typography>
        </CardContent>
        <Button>Añadir al carrito</Button>
      </Card>
    </Container>
  );
};
