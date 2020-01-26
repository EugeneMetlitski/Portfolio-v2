import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import SectionTitle from './../elements/SectionTitle';
import ImgQUT from './../../resources/qut.jpg';
import ImgTafeQld from './../../resources/tafeQld.jpg';


export default function SkillsAndEducation() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SectionTitle title="Skills and Education" />


      {/* EDUCATION LIST */}
      <br />
      {/* <Typography className={classes.caption} variant="caption" display="block" gutterBottom>
        <b>Education</b>
      </Typography> */}
      <Paper className={classes.education}>
        <List className={classes.educationList}>
          <ListItem className={classes.educationItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="QUT Logo" src={ImgQUT} />
            </ListItemAvatar>
            <ListItemText
              primary="Bachelor of Information Technology (Feb 2016 - June 2020)"
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
                  {"Minor - Intelligent Systems (Machine Learning)"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className={classes.educationItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Tafe Logo" src={ImgTafeQld} />
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
                    TAFE Queensland
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className={classes.educationItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Tafe Logo" src={ImgTafeQld} />
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
                    TAFE Queensland
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Paper>


      <br /><br />
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

      <Typography className={classes.caption} variant="caption" display="block" gutterBottom>
        These are the <b>technologies</b> that I have experience with.
      </Typography>

      <Paper className={classes.chips}>
        <Chip className={classes.chip} label="React" />
        <Chip className={classes.chip} label="Angular" />
        <Chip className={classes.chip} label=".NET Core 2.0" />
        <Chip className={classes.chip} label="SQL Server" />
        {/* <Chip className={classes.chip} label="Web Assembly" /> */}
      </Paper>

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
