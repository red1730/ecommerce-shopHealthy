import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Skeleton } from '@mui/material';
import { RatingProduct } from './RatingProduct';
import {Link as RouterLink} from 'react-router-dom'
import { Contador } from './Contador';


export const ProductCard = ({imgCard, prodName, prodPrice,id})=> {

  return (
    <Card sx={{ width: 345, height:450, }} >
      <Box component={RouterLink} to={`/catalogo/${id}`} >
          {<CardMedia
            component="img"
            height="194"
            image={`https://dkndrd.com/pf-healthyShop/${imgCard}`||<Skeleton height={194}/>}
            alt={prodName}
            sx={{width:194, margin:"0 auto"}}
          /> }
      </Box>
      <CardContent>
            <RatingProduct sx={{alingItems:"center"}} />
            <Typography variant="body2" color="text.primary" textTransform="uppercase" fontWeight="bold">
                {prodName}
            </Typography>
            <Typography variant="body1" color="text.primary" textAlign='center' sx={{fontWeight:600, margin: "20px 0"}} >
                {prodPrice+'$'}
            </Typography>
            <Box sx={{display:'flex', justifyContent:'center', alingItems:'center'}}>
                <Contador sx={{marginTop:4}}  />
            </Box>
      </CardContent>
      
    </Card>
  );
}
