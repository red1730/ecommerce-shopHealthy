import {AppBar, Toolbar, Container,} from '@mui/material';
import {Slide, useScrollTrigger} from '@mui/material';
import { useContext } from 'react';
import { Link as RouterLink, useLocation, useNavigate, useParams} from 'react-router-dom';
import firebaseApp from '../credenciales';
import { AuthContext } from "../auth/AuthContext";
import {getAuth, signOut} from 'firebase/auth'
import { type } from '../../types/index'
import { SearchBar } from './Search';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './NavDesktop';
import { NavUserMenu } from './NavUserMenu';

const HideOnScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const auth= getAuth(firebaseApp)

export const NavBar = (props) => {

  const { estadoGlobal, manejarUsuario } = useContext(AuthContext)

  const location = useLocation();

  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
//   const HandleLogout = () => {
//   dispatch({ type: type.logout})

//   navigate('/catalogo', { 
//     replace: true
//   })
// }
  const HandleLogin = () => {
    dispatch({ type: type.login})
    navigate('/catalogo', { 
     replace: true
    })
  };

  return (
    <>
    <HideOnScroll {...props} > 
    <AppBar sx={{ position:'-webkit-sticky',top:0, height:'63px'}} >
      <Container maxWidth="xl"  >
        <Toolbar >
          <NavMobile />
          <NavDesktop />
          <NavUserMenu user={user} />
        </Toolbar>
      </Container>
      {location.pathname =='/catalogo' && <SearchBar />} {/*solo debe renderizar en la ruta/catalogo */}
    </AppBar>
    </HideOnScroll>
    </>
  );
};