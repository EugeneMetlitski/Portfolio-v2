import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import NavBar from './sections/NavBar';
import Banner from'./sections/Banner';
import Introduction from'./sections/Introduction';
import SkillsAndEducation from'./sections/SkillsAndEducation';
import Projects from'./sections/Projects';
import BtnScrollUp from './elements/BtnScrollUp';


export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />

      <div id="back-to-top-anchor" className={classes.backToTopAnchor}>
        <Banner />

        <div className={classes.content}>
          <Introduction />
          <br /><Divider variant='middle' /><br />

          <SkillsAndEducation />
          <br /><Divider variant='middle' /><br />

          <Projects />
        </div>
      </div>

      <BtnScrollUp />
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  backToTopAnchor: {
    maxWidth: '950px',
    paddingTop: '75px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
    height: '1500px',
  },
  content: {
    textAlign: 'justify',
    margin: '40px',
  },
});
