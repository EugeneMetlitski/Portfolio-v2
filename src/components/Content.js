import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TitleImage from './../resources/title-image.jpg';

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

      <div className={classes.content}>
        <Button className={classes.button} variant="contained" color="secondary">
          Hello World
        </Button>
        <p>
          HELLO WORLD
        </p>
      </div>

    </React.Fragment>
  );
}

const useStyles = makeStyles({
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
    margin: '40px',
    outline: '1px dashed darkBlue',
  },
  button: {

  }
});
