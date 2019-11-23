import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import SectionTitle from './../elements/SectionTitle';


export default function SkillsAndEducation() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <SectionTitle title="Skills and Education" />
        
        <br />
        <Typography className={classes.caption} variant="caption" display="block" gutterBottom>
          These are the <b>languages</b> that I have experience with.
        </Typography>

        <Paper className={classes.chips}>
          <Chip className={classes.chip} label="JavaScript" />
          <Chip className={classes.chip} label="CSS" />
          <Chip className={classes.chip} label="HTML" />
          <Chip className={classes.chip} label="C#" />
          <Chip className={classes.chip} label="Java" />
          <Chip className={classes.chip} label="C/C++" />
          <Chip className={classes.chip} label="SQL" />
          <Chip className={classes.chip} label="Python" />
          <Chip className={classes.chip} label="Matlab" />
          <Chip className={classes.chip} label="Lua" />
        </Paper>

        {/* <br /> */}
        <Typography className={classes.caption} variant="caption" display="block" gutterBottom>
          These are the <b>technologies</b> that I have experience with.
        </Typography>

        <Paper className={classes.chips}>
          <Chip className={classes.chip} label="React" />
          <Chip className={classes.chip} label="Angular" />
          <Chip className={classes.chip} label=".NET Core 2.0" />
          <Chip className={classes.chip} label="SQL Server" />
          <Chip className={classes.chip} label="Web Assembly" />
        </Paper>

        {/* EDUCATION LIST */}
        <br />
        <Typography className={classes.caption} variant="caption" display="block" gutterBottom>
          <b>Education</b>
        </Typography>
        <Paper className={classes.education}>
          <List className={classes.educationList}>
            <ListItem className={classes.educationItem} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="QUT Logo" src="" />
              </ListItemAvatar>
              <ListItemText
                primary="Bachelor of Information Technology (Feb 2016 - June 2021)"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.educationInline}
                      color="textPrimary"
                    >
                      Queensland University of Technology<br />
                    </Typography>
                    {"Major - Computer Sciene"}<br />
                    {"Minor - Data Centric Computing (Data Analysis)"}<br />
                    {"Minor - Machine Learning"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={classes.educationItem} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Tafe Logo" src="" />
              </ListItemAvatar>
              <ListItemText
                primary="Diploma of Software Development (Feb 2016 - Feb 2017)"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.educationInline}
                      color="textPrimary"
                    >
                      Queensland Tafe
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={classes.educationItem} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Tafe Logo" src="" />
              </ListItemAvatar>
              <ListItemText
                primary="Certificate 3 in Networking (Sep 2015 - Nov 2015)"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.educationInline}
                      color="textPrimary"
                    >
                      Queensland Tafe
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Paper>

        <br />
        {/* Expansion Pannel: Skills and Education */}
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
                subjects in the degree because of that).
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
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
  caption: {
    textAlign: 'center'
  },
  chips: {
    background: '#f0f1f5',
    margin: '0 40px 10px 40px',
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    background: '#263238',
    color: '#dcdee6',
  },
  education: {
    margin: '0 20px 0 20px',
  },
  educationList: {
    background: '#f0f1f5',
    borderRadius: '4px',
  },
  educationItem: {
    margin: '5px'
  },
  educationInline: {
    display: 'inline',
  },
}));
