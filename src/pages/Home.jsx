import React from 'react'
import {
  Container,
  Typography
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
    <div className="home">
      <Container>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, officia eius. Natus, nemo quia. Placeat hic, illo ex minus earum, velit eum, recusandae pariatur explicabo id molestiae cum vel magni.
          Quas molestiae veniam eos reprehenderit nobis possimus, ab vero labore autem hic obcaecati consectetur in sint neque dolorem modi aliquid molestias inventore similique porro nihil commodi omnis mollitia. Maxime, animi!
          Fuga sapiente deserunt commodi maiores dicta labore est quisquam facere corrupti. Ea quis iusto veritatis dolorum, voluptate blanditiis distinctio sunt, cupiditate mollitia assumenda exercitationem iure facere dignissimos. Quia, molestias animi!
        </Typography>
      </Container>
    </div>
  )
}


export default Home;