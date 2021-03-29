import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './appbar.styles';

export const AppBarCharacter = (props) => {
  const classes = useStyles();
  const { image } = props;

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Avatar alt="Remy Sharp" src={image} className={classes.large} />
        <Typography variant="h1" className={classes.title}>
          Best Sentences
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
