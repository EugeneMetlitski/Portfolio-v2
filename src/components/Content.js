import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <p>
          HELLO WORLD
        </p>
      </React.Fragment>
    );
  }
}

export default Content;
