import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


export default function SectionTitle(props) {
  const classes = useStyles();
  const marginTop = props.marginTop? props.marginTop : '13px';

  return (
    <Typography gutterBottom variant="h5" component="h2"
      className={classes.title}
      style={{marginTop: marginTop}}
    >
      { props.title }
    </Typography>
  );
}

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    textShadow: '1px 2px 3px grey',
  },
});
