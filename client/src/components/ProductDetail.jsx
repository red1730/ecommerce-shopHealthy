import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Skeleton } from "@mui/material";
import { RatingProduct } from "./RatingProduct";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductDetail_comp = (prodName, prodPrice, imgCard) => {
  return (
    <Card sx={{ width: 490, height: 410 }}>
      {imgCard ? (
        <CardMedia
          component="img"
          height="194"
          image={imgCard}
          alt={prodName}
        />
      ) : (
        <Skeleton />
      )}
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {prodName}
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          textAlign="center"
          sx={{ fontWeight: 600, marginTop: 3 }}
        >
          {prodPrice + "$"}
        </Typography>
        <CreditCardIcon />
        <Typography>Aceptamos tarjetas con MercadoPago</Typography>
        <AddShoppingCartIcon />
        <Typography>Aceptamos pagos en efectivo</Typography>
        <DeliveryDiningIcon />
        <Typography>Lo llevamos a la puerta de tu casa</Typography>
      </CardContent>
      <Button>Añadir al carrito</Button>
    </Card>
  );
};
