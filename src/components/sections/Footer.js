import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


export default function Contact() {
  const classes = useStyles();

  return (
    <footer className={classes.container}>

      <Typography variant="subtitle2" align="center" component="p">
        © 2019, Eugene Metlitski
      </Typography>

    </footer>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3),
    height: '70px',
    background: theme.palette.primary.main,
    color: '#dcdee6',
  },
}));
