import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SectionTitle from './../elements/SectionTitle';
import { Typography } from '@material-ui/core';


export default function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <SectionTitle title="Contact" />

      <br />
      <Typography variant="caption" display="block" align="center" gutterBottom>
        For any enquiries, feel free to leave a message
      </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">
          Name
        </InputLabel>
        <Input id="component-simple" />
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">
          Email
        </InputLabel>
        <Input id="component-simple" />
      </FormControl>

      <TextField
        id="standard-multiline-static"
        label="Message"
        multiline
        rowsMax="4"
        className={classes.formControl}
        margin="normal"
      />

      <div>
        <Button variant="contained" color="secondary"
          className={classes.button}
          size="large"
        >
          Send
        </Button>
      </div>

    </React.Fragment>
  );
}

const useStyles = makeStyles(({
  formControl: {
    marginTop: '17px',
    width: '70%',
    minWidth: '350px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  button: {
    marginTop: '23px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
}));
