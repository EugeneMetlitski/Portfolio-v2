import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import TitleImage from './../../resources/title-image.jpg';

import SectionTitle from './../elements/SectionTitle';


export default function Banner() {
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

      <div id="introduction-anchor"></div>
      <br />
      <SectionTitle title="Full Stack Web Developer"/>

    </React.Fragment>
  );
}

const useStyles = makeStyles({
  card: {
    maxWidth: '950px',
    borderRadius: '0 0 4px 4px',
  },
});
