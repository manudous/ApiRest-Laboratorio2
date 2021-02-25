import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './character-description.style';
import Axios from 'axios';

export const CharacterDescription = ({ characterPage }) => {
  const classes = useStyles();

  const { id, name, image, bestSentences } = characterPage;
  const [handleInput, setHandleInput] = React.useState('');

  const deleteSentence = (i) => {
    console.log('borrando frase', i)
  }

  console.log(bestSentences);
  return (
    <div>
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={7}
      >
        <Grid item xs={12} md={4}>
          <img
            src={image}
            alt={name}
            className="animate__animated animate__bounceInLeft"
          />
        </Grid>
        <Grid item xs={12} md={4} className="animate__animated animate__fadeIn">
          <Typography variant="h4" paragraph>
            {name}
          </Typography>

          <Divider />
          <Typography variant="h5" paragraph>
            Enter your best Sentences
          </Typography>
          <TextField
            id="filled-multiline-static"
            label="Insert Sentence"
            className={classes.texfield}
            type="submit"
            multiline
            rows={2}
            variant="filled"
            onChange={(e) => setHandleInput(e.target.value)}
          />

          <Divider />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" paragraph>
            Best Sentences:
          </Typography>

          {bestSentences.map((sentence, index) => (
            
              <Typography variant="h6" paragraph key={index}>
                + {sentence}
                 <Button
                  variant="contained"
                  
                  startIcon={<EditIcon />}
                />
                <Button
                  variant="contained"
                  onClick={() => deleteSentence(index)}
                  startIcon={<DeleteIcon color="secondary" />}
                />
              </Typography>
           
          ))}
        </Grid>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackOutlinedIcon />}
          >
            <span className={classes.button}>Return</span>
          </Button>
        </Link>
      </Grid>
    </div>
  );
};
