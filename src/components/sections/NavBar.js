import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';


export default function NavBar(props) {
  const classes = useStyles();
  const onClickIntroduction = (event) => {handleClick(event, '#introduction-anchor')};
  const onClickSkillsAndEducation = (event) => {handleClick(event, '#skillsAndEducation-anchor')};
  const onClickProjects = (event) => {handleClick(event, '#projects-anchor')};
  const onClickContact = (event) => {handleClick(event, '#contact-anchor')};

  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Eugene Metlitski
          </Typography>
          <Button color="inherit" className={classes.button} onClick={onClickIntroduction}>
            Introduction
          </Button>
          <Button color="inherit" className={classes.button} onClick={onClickSkillsAndEducation}>
            Skills & Education
          </Button>
          <Button color="inherit" className={classes.button} onClick={onClickProjects}>
            Projects
          </Button>
          <Button color="inherit" className={classes.button} onClick={onClickContact}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

const useStyles = makeStyles(theme => ({
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
    marginLeft: '7px',
    // fontFamily: 'Roboto Mono, monospace',
  },
}));


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const handleClick = (event, elementId) => {
  const anchor = (event.target.ownerDocument || document).querySelector(elementId);

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
