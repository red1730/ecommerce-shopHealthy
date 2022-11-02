import { Box, Card, Link, Typography, Stack, capitalize, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../utils/formatNumber';
// components
import Label from '../components/label';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../helpers/getProductById';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

// ShopProductCard.propTypes = {
//   product: PropTypes.object,
// };

export default function EditarProducto() {

  const { id } = useParams();
  const [product, setProduct] = useState ({});

  const dispatch = useDispatch ();
  const { isLoading } = useSelector ((state) => state.catalogReducer);

  const navigate = useNavigate ();

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: "SET_ISLOADING_TRUE" });
      try {
        const productAux = await getProductById(id);
        setProduct(productAux);
      } catch (error) {
        console.log("cayo el bendito back otra vez!");
      }
      return dispatch({ type: "SET_ISLOADING_FALSE" });
    };
    getProduct();
  }, [id, dispatch, navigate]);
    
  const { nombre, precio, img, stock, activo } = product;


  if(isLoading) return <Typography variant='h3' m='0 auto' >Cargando...</Typography>

  return (
    <Card sx={{boxShadow:15, width:'40%',m:'0 auto'}} >
      <Box sx={{ pt: '100%', position: 'relative' }}>
        
          {!activo && <Label
            variant="filled"
            color={(activo !== true && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {'inactivo'}
          </Label>}
        
        <StyledProductImg alt={nombre} src={`https://dkndrd.com/pf-healthyShop/${img}`} />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        {/* <Link color="inherit" underline="hover"> */}
          <Typography variant="subtitle2" noWrap>
            {nombre.toUpperCase()}
          </Typography>
        {/* </Link> */}

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          <Button variant='contained' >Editar</Button>
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {/* {priceSale && fCurrency(priceSale)} */}
            </Typography>
            &nbsp;
            {fCurrency(precio)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
