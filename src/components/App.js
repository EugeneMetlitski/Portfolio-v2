import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Content from './Content';

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <Content />
      </div>

    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  content: {
    maxWidth: '900px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
    padding: '20px',
    background: 'green',
    height: '1500px',
  },
  toolbar: {
    paddingLeft: '40px',
    paddingRight: '40px',
    maxWidth: '900px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default App;
