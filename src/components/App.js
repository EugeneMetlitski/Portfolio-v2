import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import NavBar from './sections/NavBar';
import Banner from './sections/Banner';
import Introduction from './sections/Introduction';
import SkillsAndEducation from './sections/SkillsAndEducation';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
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
          <br /><Divider variant='middle' /><br id="skillsAndEducation-anchor" />

          <Projects />
          <br /><Divider variant='middle' /><br id="contact-anchor" />
          
          <SkillsAndEducation />
          <br /><Divider variant='middle' /><br id="projects-anchor" />

          <Contact />
        </div>
      </div>

      <br /><br /><Footer />

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
  },
  content: {
    textAlign: 'justify',
    margin: '20px 40px 40px 40px',
  },
});
