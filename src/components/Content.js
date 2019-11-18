import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TitleImage from './../resources/title-image.jpg';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Content() {
  const classes = useStyles();

    return (
    <React.Fragment>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Title Image"
            height="300"
            image={TitleImage}
            title="Title Image"
          />
        </CardActionArea>
      </Card>

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">
        Welcome to my portfolio site!
      </Typography>

      {/* MAIN CONTENT */}
      <div className={classes.content}>

        {/* INTRODUCTION */}
        <Typography variant="body1" gutterBottom>
          I have been learning Software Development and IT for the past 4 years at
          Tafe, University and in the spare time at home. Currently I have only one
          subject left to complete my bachelor degree at University. I am hoping to
          get a job and finish my last subject at the same time at the start of 2020.
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
              I was born in Russia live in Australia since age 12 (I'm 31 years old now),
              therefore I'm fluent in English language. <br /><br />
              I enjoy developing software and writing code wether it is to make a website,
              front-end, back-end, mobile, make video-game, or write low level c/c++ code. I'm
              not an expert in any language yet, but have some experience with making many
              different types of small programs.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>

        <br /><Divider variant='middle' /><br />

        {/* SKILLS AND EDUCATION */}
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          Skills and Education
        </Typography>
        


      </div>

    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '950px',
    borderRadius: '0 0 4px 4px',
  },
  title: {
    textAlign: 'center',
    marginTop: '13px',
    textShadow: '1px 2px 3px grey',
  },
  content: {
    textAlign: 'justify',
    margin: '40px',
    // outline: '1px dashed darkBlue',
  },
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
  button: {

  }
}));
