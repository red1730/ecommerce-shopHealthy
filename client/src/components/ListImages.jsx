
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { dataProducts } from '../helpers/categoriasPrueba';
import { ProductCard } from './ProductCard';

const data = dataProducts;

export const ListImages = ()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
                {data.map((el, i)=>(
                    <Grid key={i} item sm={6} xs={12} lg={4} >
                        <ProductCard imgCard={el.image} prodName={el.name} prodPrice={el.price} />
                    </Grid >
                ))}
        </Grid>
    </Box>
  )
}
