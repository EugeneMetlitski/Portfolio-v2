import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TitleImage from './../resources/title-image.jpg';
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
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';



export default function Content() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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



        {/* SKILLS AND EDUCATION */}
        <br /><Divider variant='middle' /><br />
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          Skills and Education
        </Typography>
        
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



        {/* PROJECTS */}
        <br /><Divider variant='middle' /><br />
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          Personal Projects
        </Typography>

        <Card className={classes.projects}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.projectsAvatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.projectsMedia}
            image={TitleImage}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.projectsExpand, {
                [classes.projectsExpandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>


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
  projects: {
    maxWidth: 345,
  },
  projectsMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  projectsExpand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  projectsExpandOpen: {
    transform: 'rotate(180deg)',
  },
  projectsAvatar: {
    backgroundColor: red[500],
  },
}));
