import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Skeleton } from '@mui/material';
import { RatingProduct } from './RatingProduct';


export const ProductCard = ({imgCard, prodName, prodPrice})=> {


  return (
    <Card sx={{ maxWidth: 345 }}>
      {imgCard? <CardMedia
        component="img"
        height="194"
        image='https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie-768.jpg'
        alt="Paella dish"
      />: <Skeleton/>}
      <CardContent>
        <RatingProduct/>
        <Typography variant="body2" color="text.primary"  >
          {prodName}
        </Typography>
        <Typography variant="body1" color="text.primary" textAlign='center' sx={{fontWeight:600, marginTop: 3}} >
          {prodPrice+'$'}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
