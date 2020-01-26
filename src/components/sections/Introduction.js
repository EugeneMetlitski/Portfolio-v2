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
        I am graduating from university with an Information Technology (Computer
        Science major) degree very soon and I'm looking to find my first job in
        software development. I'm not an expert in any language yet, but have
        experience with making many different types of small programs (mostly from
        Tafe and University). I have also been learning more programming in the spare
        time at home (with React, Angular, .Net Core, SQL Server, c/c++ and OpenGL).
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
              I enjoy many different types of programming, whether it's to make a web or
              mobile app (front-end and back-end), write low level code for a robot or
              embedded systems, write high performance and milti-threaded programs, do
              machine learning, data analysis and make video games.
              <br /><br />
              Most of the Software Development skills I've learned are through
              education. I'm not an expert in any language or technology,
              but I feel comfortable to get up and running with a React/Angular
              project, C#/Java project, data analysis and machine learning project
              in python or matlab, and with a c/c++ project.
              <br /><br />
              At University I learned the fundementals of Computer Science, low
              level programming in C, high performance and multi-threaded
              programming, operating-system programming, machine-learning,
              robot vision and movement programming, data-analysis, project
              management and other Software Development related topics.
              <br /><br />
              Diploma in Software Development taught me about the front and
              back-end development in C#, Java and HTML/CSS/JS. It had
              also taught me about the Software Development Lifecycles and how
              to gather project requirements from clients.
              <br /><br />
              In the spare time I learned more about HTML, CSS, JavaScript,
              Angular, React, .Net Core, C/C++ and OpenGL.
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
