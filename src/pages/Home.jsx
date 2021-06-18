import React from 'react'
import {
  Container,
  Typography,
  Box,
  CssBaseline
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));
function Home(){
  return(
    <Box className="home" width='100%' >
      <CssBaseline/>
      <Container className="page-header">
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          <Typography variant="h5" gutterBottom>
            <Box fontWeight={500}>
              Hello, Admin!
            </Box>
          </Typography>
          <Typography variant="body1" gutterBottom>
            I hope you are having a great day!
          </Typography>
        </Box>
      </Container>
        
      <Container className="page-summary">
        <Box display="flex">
          <Box  width={110} py={2} px={4} m={1} boxShadow={2} borderRadius={3} bgcolor="white"> 
            <Typography>
              <Box variant="h6" textAlign="center" fontWeight={500}>
                500
              </Box>
              <Box variant="p" textAlign="center" fontSize={12} fontWeight={400} color="grey.600">
                Users
              </Box>
            </Typography>
          </Box>
          <Box width={110} py={2} px={4} m={1} boxShadow={2} borderRadius={3} bgcolor="white"> 
            <Typography>
              <Box variant="h6" textAlign="center" fontWeight={500}>
                856
              </Box>
              <Box variant="p" textAlign="center" fontSize={12} fontWeight={400} color="grey.600">
                Products
              </Box>
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container className="page-content">

      </Container>
    </Box>
  )
}


export default Home;