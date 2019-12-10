import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';

import CardHeader from '@material-ui/core/CardHeader';


export default function Projects(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.container}>
      <div className={classes.card}>
        <CardActionArea className={classes.pictureContainer}>
          <CardMedia
            className={classes.picture}
            style={{paddingTop: props.paddingTop}}
            image={props.image}
            title={props.imageTitle}
          />
        </CardActionArea>

        <div className={classes.cardContentContainer}>
          <CardContent className={classes.cardContent}>
            <CardHeader className={classes.title}
              title={props.title}
            />
            <div className={classes.chips}>
              <Typography variant="subtitle2" gutterBottom className={classes.chipText}>
                Tech used: 
              </Typography>
              {props.technologies.map((tech)=> {
                return <Chip label={tech} className={classes.chip} key={tech} />
              })}
            </div>
            <Typography variant="body2" color="textSecondary" component="p"
              className={classes.introductionText}
            >
              {props.introduction}
            </Typography>
          </CardContent>

          <CardActions className={classes.links} disableSpacing>
            {props.appLink !== undefined &&
              <Tooltip title="Open app in a new tab" aria-label="open app">
                <a href={props.appLink} target="_blank" rel="noopener noreferrer">
                  <IconButton className={classes.btnIcon} aria-label="gihtub">
                    <ExitToAppIcon />
                  </IconButton>
                </a>
              </Tooltip>
            }
            {props.github !== undefined &&
              <Tooltip title="View the source at GitHub" aria-label="source code">
                <a href={props.github} target="_blank" rel="noopener noreferrer">
                  <IconButton className={classes.btnIcon} aria-label="open app">
                    <GitHubIcon />
                  </IconButton>
                </a>
              </Tooltip>
            }
            {props.download !== undefined &&
              <Tooltip title="Download the app" aria-label="download app">
                <a href={props.download} target="_blank" rel="noopener noreferrer">
                  <IconButton className={classes.btnIcon} aria-label="download">
                    <GetAppRoundedIcon />
                  </IconButton>
                </a>
              </Tooltip>
            }
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </div>
      </div>

      <div className={classes.expandContainer}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {props.children}
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',

    marginTop: '25px',
    background: '#f0f1f5',
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  expandContainer: {

  },

  pictureContainer: {
    flex: '1',
    // alignSelf: 'center',
    minWidth: '248px',
  },
  cardContentContainer: {
    flex: '2.5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '410px',
  },

  picture: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    paddingBottom: '0',
  },
  title: {
    padding: '0 15px',
  },
  chips: {
    margin: '8px 0 0 0',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chipText: {
    paddingTop: '6px',
  },
  chip: {
    background: '#263238',
    color: '#dcdee6',
  },
  introductionText: {
    paddingTop: '10px',
  },
  links: {
    // paddingTop: '0px',
    // background: 'grey',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  btnIcon: {
    "&:hover": {
      background: "rgba(0, 121, 107, 0.15)",
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      background: "rgba(0, 121, 107, 0.15)",
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));
