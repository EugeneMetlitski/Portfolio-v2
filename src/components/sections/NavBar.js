import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import withWidth from '@material-ui/core/withWidth';

export function NavBar(props) {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null); };
  const handleMobileMenuOpen = event => { setMobileMoreAnchorEl(event.currentTarget); };

  
  const handleClick = (event, elementId) => {
    const anchor = (event.target.ownerDocument || document).querySelector(elementId);

    // If this is small screen (i.e. collapsed menu)
    if (props.width === 'sm' || props.width === 'xs') {
      setMobileMoreAnchorEl(null); // close the menu

      // Scroll to the documen are after 5 milliseconds because closing menu
      // and scrolling at the same time doesn't work
      setTimeout(() => {
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 5);
    }
    else { // If the menu is not collapsed
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  const onClickIntroduction = (event) => {handleClick(event, '#introduction-anchor')};
  const onClickSkillsAndEducation = (event) => {handleClick(event, '#skillsAndEducation-anchor')};
  const onClickProjects = (event) => {handleClick(event, '#projects-anchor')};
  const onClickContact = (event) => {handleClick(event, '#contact-anchor')};


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.menuItem} onClick={onClickIntroduction}>
        <p className={classes.menuText}>INTRODUCTION</p>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={onClickSkillsAndEducation}>
        <p className={classes.menuText}>SKILLS & EDUCATION</p>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={onClickProjects}>
        <p className={classes.menuText}>PROJECTS</p>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={onClickContact}>
        <p className={classes.menuText}>CONTACT</p>
      </MenuItem>
    </Menu>
  );


  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Eugene Metlitski
          </Typography>

          <div className={classes.sectionDesktop}>
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
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>

            {renderMobileMenu}
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
export default withWidth()(NavBar);

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingLeft: '30px',
    paddingRight: '30px',
    maxWidth: '950px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  title: {
    flexGrow: 1,
    // fontFamily: 'Roboto Mono, monospace',
  },
  button: {
    marginLeft: '7px',
    // fontFamily: 'Roboto Mono, monospace',
    "&:hover": {
      background: "rgba(0, 121, 107, 0.3)",
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuItem: {
    "&:hover": {
      background: "#00796b",
      color: '#dcdee6',
    },
  },
  menuText: {
    margin: '15px',
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
