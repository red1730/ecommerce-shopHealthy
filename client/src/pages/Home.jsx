import { ListImages } from '../components/ListImages'
import { Box, CardMedia, Container } from '@mui/material';
import Banner from '../assets/banner.jpg'

export const Home = () => {
  return (
    <Container sx={{marginTop:'30px'}} >
        <Box sx={{margin:'30px 0', marginRight:4}}>
          <CardMedia
            component="img"
            image={Banner}
            alt="Paella dish"
          />
        </Box>
        <ListImages/>
    </Container>
  )
}
