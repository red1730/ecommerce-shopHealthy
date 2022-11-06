import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Footer_comp } from '../components/Footer';
import { Grid, Typography, Box, Container, Stack, Button } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
// const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc,img, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc,img, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Nueces de Pecan', `https://res.cloudinary.com/dw8jw0zhx/image/upload/v1667676017/healthy_shop_default/DEC-MANI-HONEY-ROASTED-350G.jpg`, 100, 1.15),
  createRow('harina de soja',`https://res.cloudinary.com/dw8jw0zhx/image/upload/v1667676017/healthy_shop_default/DEC-MANI-HONEY-ROASTED-350G.jpg`, 10, 45.99),
  createRow('algo saludable',`https://res.cloudinary.com/dw8jw0zhx/image/upload/v1667676017/healthy_shop_default/DEC-MANI-HONEY-ROASTED-350G.jpg`, 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = 0 + invoiceSubtotal;

export const Shopping = ()=> {
  const navigate = useNavigate()
  return (
    <>
    <Container>
      <Box>
        <Button startIcon={<ChevronLeftIcon/>} onClick={()=>navigate(-1)}  > Volver a la tienda</Button>
        <Typography variant='subtitle2' sx={{fontSize:25, my:2}} > Finaliza tu compra </Typography>
        <Typography variant='body2' sx={{fontSize:15, mb:6}} > <WarningIcon sx={{fontSize:'small', mt:-0.4, mr:1}} /> Completá el formulario y luego revisá que tu pedido sea correcto. </Typography>

      </Box>
      <Grid container spacing={2} >
        <Grid item xs={8} >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead  >
                {/* <TableRow>
                  <TableCell align="center" colSpan={4}>
                    Detalles
                  </TableCell>
                  <TableCell align="right">Precio</TableCell>
                </TableRow> */}
                <TableRow >
                  <TableCell sx={{textAlign:'center',bgcolor:t=>t.palette.primary.main, color:'white'}}>Desc</TableCell>
                  <TableCell align="right" sx={{textAlign:'center',bgcolor:t=>t.palette.primary.main, color:'white'}} >img</TableCell>
                  <TableCell align="right" sx={{textAlign:'center',bgcolor:t=>t.palette.primary.main, color:'white'}} >Unidades</TableCell>
                  <TableCell align="right" sx={{textAlign:'center',bgcolor:t=>t.palette.primary.main, color:'white'}} >Precio Unitario</TableCell>
                  <TableCell align="right" sx={{textAlign:'center',bgcolor:t=>t.palette.primary.main, color:'white'}} >SubTotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.desc}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell sx={{maxWidth:'40px', }} > <img src={row.img} alt={row.desc} /></TableCell>
                    <TableCell align="right" sx={{textAlign:'center'}} >{row.qty}</TableCell>
                    <TableCell align="right" sx={{textAlign:'center'}} >{row.unit}</TableCell>
                    <TableCell align="right" sx={{textAlign:'center'}} >{ccyFormat(row.price)}</TableCell>
                  </TableRow>
                ))}

                {/* <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow> */}

                <TableRow sx={{bgcolor:t=>t.palette.primary.light}} >
                  <TableCell rowSpan={4} />
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell align="right" sx={{textAlign:'center'}} >{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4} >
            <Stack  spacing={3} >
              <Typography sx={{border:'1px solid black'}} >stack1</Typography>
              <Typography sx={{border:'1px solid black'}} >stack2</Typography>
              <Typography sx={{border:'1px solid black'}} >stack2</Typography>
              <Typography sx={{border:'1px solid black'}} >stack2</Typography>
            </Stack>
        </Grid>
      </Grid>


    </Container>
    <Footer_comp/>
    </>
  );
}