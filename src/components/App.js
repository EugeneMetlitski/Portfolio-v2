import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Content from './Content';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollUp}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  const classes = useStyles();

  return (
    <React.Fragment>

      <HideOnScroll {...props}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Eugene Metlitski - Portfolio
          </Typography>
          <Button color="inherit" className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
      </HideOnScroll>

      <div id="back-to-top-anchor" className={classes.content}>
        <Content />
      </div>
      
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    maxWidth: '950px',
    paddingTop: '75px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
    height: '1500px',
  },
  toolbar: {
    paddingLeft: '50px',
    paddingRight: '50px',
    maxWidth: '950px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // fontFamily: 'Roboto Mono, monospace',
  },
  button: {
    // fontFamily: 'Roboto Mono, monospace',
  },
  scrollUp: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default App;
