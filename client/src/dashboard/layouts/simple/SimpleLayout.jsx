import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
// components
import Logo from '../../assets/logo.png';
import { Avatar, Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const StyledHeader = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  backgroundColor:'#637381',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function SimpleLayout() {
  return (
    <>
      <StyledHeader>
      <Box sx={{ px: 2.5, mb:2, display: 'flex',bgcolor:'trasparent', textAlign:'center', alignItems:'center' }}>
        <Avatar src={Logo} alt='logo' sx={{mr:3}} />
        <Typography  sx={{fontWeight:600, color:'white'}} >HEALTHY SHOP</Typography>
      </Box>
      </StyledHeader>

      <Outlet />
    </>
  );
}
