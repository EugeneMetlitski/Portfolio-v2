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
        I've been learning Software Development for the past 4 ears through TAFE,
        University, by using online sources such as Udemy and Lynda.com
        and by creating personal applications.
        <br /><br />
        I have skills in creating websites using technologies such as React,
        Angular, .Net Core and SQL Server.
        {/* I enjoy developing software whether it is to make a website (front-end
        and/or back-end), mobile app, program a robot or embedded system, do
        machine-learning and data-analysis or write a program in C/C++.
        <br /><br /> */}
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
              I enjoy learning and working with many different languages and
              technologies, from making websites using TypeScript/JavaScript,
              doing machine learning and data analysis in Python or SQL Server
              to programming a fast performing program or a 3D application in
              C/C++.
              <br /><br />
              In addition to web development, I also have been learning about
              Artificial Intelligence, Machine Learning and Data Analysis through
              my Univerity degre. I have also learned to work with low-level
              C/C++ code on things such as high-performance programming using
              multi-threading, systems programming (about how operating systems
              work), some OpenGL 3D programming and how to program a robot to
              analyse images and move an arm in 3D environment.
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
    "&:hover": {
      background: "#00796b"
    },
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
