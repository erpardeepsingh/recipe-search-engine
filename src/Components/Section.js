import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
export default class Section extends Component {
    render() {
        return (
          <React.Fragment>
          <CssBaseline />
          <Container >
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto', width:'50vh' }} >
              sd
              </Typography>
          </Container>
        </React.Fragment>
        )
    }
}
