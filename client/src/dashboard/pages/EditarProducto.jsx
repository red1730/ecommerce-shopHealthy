import React from 'react';
import { Box, Card, Link, Typography, Stack, capitalize, Button, TextField, Alert, InputLabel, FormControl } from '@mui/material';
import { styled,alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
// utils
import { fCurrency } from '../utils/formatNumber';
// components
import Label from '../components/label';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../helpers/getProductById';
import { useForm, Controller } from "react-hook-form";
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});
const RedditTextField = styled(React.forwardRef((props, ref) => (
    <TextField ref={ref} InputProps={{ disableUnderline: true }} {...props} />
  )))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      border: '1px solid #e2e2e1',

      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
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
    
  const { nombre, precio, img, stock, activo, descripcion } = product;
  console.log(nombre)

  const { handleSubmit, formState:{errors}, control } = useForm({
    defaultValues:{
        nombre:nombre,
        precio,
        stock,
        activo,
        descripcion
    }
  });
  const onSubmit = e=>{
    e.preventDefault();
    console.log(e)
  }

  if(isLoading) return <Typography variant='h3' m='0 auto' >Cargando...</Typography>

  return (
    <>
    <Card sx={{boxShadow:15, width:{xs:'100%',md:'40%'}, m:'0 auto'}} >
      <Box sx={{ pt: '100%', position: 'relative', }}>
        
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={1}>
                <Controller 
                    name="nombre"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <RedditTextField
                                            label="Nombre"
                                            id="nombre"
                                            variant="filled"
                                            style={{ marginTop: 11 }}
                                            {...field}
                                        />}
                
                />
                {errors.nombre?.type === 'required' &&  <Alert sx={{height:'25px', p:0, m:0}} severity="error">El nombre es requerido</Alert>}
                <Controller 
                    name="marca"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <RedditTextField
                                            label="Precio"
                                            defaultValue={precio}
                                            id="precio"
                                            variant="filled"
                                            style={{ marginTop: 11 }}
                                            {...field}
                                        />}
                
                />
                {errors.nombre?.type === 'required' &&  <Alert sx={{height:'25px', p:0, m:0}} severity="error">El nombre es requerido</Alert>}
                <Controller 
                    name="categoria"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <RedditTextField
                                            label="Stock"
                                            defaultValue={stock}
                                            id="stock"
                                            variant="filled"
                                            style={{ marginTop: 11 }}
                                            {...field}
                                        />}
                
                />
                {errors.nombre?.type === 'required' &&  <Alert sx={{height:'25px', p:0, m:0}} severity="error">El nombre es requerido</Alert>}
                <Controller 
                    name="descripcion"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <RedditTextField
                                            label='Activo:'
                                            defaultValue={activo}
                                            id="activo"
                                            variant="filled"
                                            style={{ marginTop: 11 }}
                                            {...field}
                                        />}
                
                />
                {errors.nombre?.type === 'required' &&  <Alert sx={{height:'25px', p:0, m:0}} severity="error">El nombre es requerido</Alert>}
                {/* <LoadingButton fullWidth size="large" type="submit" variant="contained">
                    Login
                </LoadingButton> */}

            </Stack>
        </form>
    </Card>
    </>
  );
}
