import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SectionTitle from './../elements/SectionTitle';
import { Typography } from '@material-ui/core';


export default function Contact() {
  const url = 'https://localhost:44360/api/messages';
  // const url = 'http://eugene-metlitski.com/api/messages';

  const classes = useStyles();

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const handleChangeName = (e) => {setName(e.target.value)};
  const handleChangeEmail = (e) => {setEmail(e.target.value)};
  const handleChangeMsg = (e) => {
    setMsg(e.target.value)
    if ((e.target.value === '') && (btnDisabled === false)) {
      setBtnDisabled(true);
    }
    if ((e.target.value !== '') && (btnDisabled === true)) {
      setBtnDisabled(false);
    }
  };

  const sendMsg = () => {
    const message = {'name': name, 'email': email, 'msg': msg}

    setName('');
    setEmail('');
    setMsg('');
    setBtnDisabled(true);
    
    axios.post(url, message).then((res) => {
      console.log('Successfully sent message to server: ' + res);
    }).catch((err) => {
      console.log('Error sending message to server: ' + err);
    });
  };

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
        <Input value={name} onChange={handleChangeName} />
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">
          Email
        </InputLabel>
        <Input value={email} onChange={handleChangeEmail} />
      </FormControl>

      <TextField
        label="Message"
        multiline
        rowsMax="4"
        className={classes.formControl}
        margin="normal"
        value={msg}
        onChange={handleChangeMsg}
      />

      <div>
        <Button disabled={btnDisabled} variant="contained" color="secondary"
          className={classes.button}
          size="large"
          onClick={sendMsg}
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
