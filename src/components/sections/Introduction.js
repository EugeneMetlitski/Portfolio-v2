import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function Introduction() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Typography variant="body1" gutterBottom>
        I have been learning Software Development and IT for the past 4 years at
        Tafe, University and in the spare time at home. Currently I have only one
        subject left to complete my bachelor degree at University. I am hoping to
        find a job and finish my last subject at the start of 2020.
      </Typography>

      {/* Expansion Pannel: Introduction */}
      <div className={classes.expansionPanelContainer}>

        <ExpansionPanel>
          <ExpansionPanelSummary className={classes.expansionPanelSummary}
            expandIcon={<ExpandMoreIcon className={classes.expansionButton} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.expansionPanelHeading}>
              More Info
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.expansionPanelDetails}>
            <Typography>
              Since discovering the world of IT 4 years ago, I've completed Certificate 3 in
              Networking, Diploma of Software Development and almost finished Bachelor of
              Information Technology degree with 1 subject left to complete next year. The
              reason why I have 1 subject left to complete is because I've changed my second
              major half way through the study from computationial science to 2 minors in
              machine learning and datacentric computing, and this added a few subject to the
              degree. Another reason is that during some semestors I undertook 3 subjects per
              semester and during other semesters I undertook 4 subject per semester (Also
              having done Diploma in Tafe gave credits for some subjects and I had to do less
              subjects in the degree because of that).<br /><br />
              I was born in Russia and have lived in Australia since the age of 12 (I'm 31 years old now),
              therefore I'm fluent in English language. <br /><br />
              I enjoy developing software and writing code whether it is to make a website
              (front-end and/or back-end) mobile app, video-game, do some data analysis, machine learning
              or write a program in low level c/c++ code. I'm not an expert in any language yet, but have
              some experience with making many different types of small programs (mostly from Tafe
              and University).
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>

    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  expansionPanelContainer: {
    width: '100%',
    margin: '15px 0 0 0',
  },
  expansionPanelSummary: {
    background: '#00695c',
    color: 'white',
  },
  expansionButton: {
    color: 'white',
  },
  expansionPanelDetails: {
    paddingTop: '20px',
    background: '#b2dfdb',
  },
  expansionPanelHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fonrStyle: 'italic',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
}));
