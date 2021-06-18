import React from 'react'

// Material UI Core
import {
  Container,
  Typography,
  Box,
  CssBaseline,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
} from '@material-ui/core';

// Material UI Icons
import {
  ArrowForward,
  ExpandMore,
  NotificationsNone
} from '@material-ui/icons';

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
        <Box width="50%">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Events</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box width='100%'>
                <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <NotificationsNone />
                        </Avatar>
                      </ListItemAvatar>
                        <ListItemText 
                          primary="Artikel 1"
                          secondary='Deskripsi singkat artikel 1'
                        />
                      <ListItemSecondaryAction >
                        <IconButton edge="end" aria-label="delete">
                            <ArrowForward/>
                        </IconButton>
                      </ListItemSecondaryAction>
                      
                    </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  )
}


export default Home;