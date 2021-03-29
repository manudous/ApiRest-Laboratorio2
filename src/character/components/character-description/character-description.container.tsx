import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './character-description.style';
import Axios from 'axios';
import { useCharacterCollection } from '../../character.hook';

export const CharacterDescription = () => {
  const classes = useStyles();
  const { characterPage, loadCharacter } = useCharacterCollection();
  const { id, name, image, bestSentences } = characterPage;

  const [handleInput, setHandleInput] = React.useState('');
  const [editSentence, seteditSentence] = React.useState({
    id: 0,
    sentence: '',
  });

  const [newSentence, setNewSentence] = React.useState('');
  const [characterBestSentences, setCharacterBestSentences] = React.useState(
    []
  );

  React.useEffect(() => {
    loadCharacter();
  }, [handleInput]);

  React.useEffect(() => {
    setCharacterBestSentences(bestSentences);
  }, [bestSentences]);

  const handleClick = (id) => {
    if (handleInput !== '') {
      const url = `http://localhost:3000/characters`;
      Axios.put(`${url}/${id}`, {
        ...characterPage,
        bestSentences: [
          ...bestSentences,
          {
            id: Date.now(),
            sentence: handleInput,
          },
        ],
      });
    }

    setHandleInput('');
  };

  const handleEdit = (id) => {
    const filterSentence = characterBestSentences.filter((sentence) => {
      return sentence.id === id;
    });
    seteditSentence({
      id: filterSentence[0].id,
      sentence: filterSentence[0].sentence,
    });

  };

  const changeSentence = () => {
    // console.log(editSentence, id);
  };

  console.log(editSentence);
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
        <Grid item>
          <img
            src={image}
            alt={name}
            className="animate__animated animate__bounceInLeft"
          />
        </Grid>
        <Grid item className="animate__animated animate__fadeIn">
          <Typography variant="h4" paragraph>
            {name}
          </Typography>

          <Divider />
          <Typography variant="h5" paragraph>
            Enter your best Sentences
          </Typography>
          <form onSubmit={() => handleClick(id)}>
            <TextField
              id="filled-multiline-static"
              label="Insert Sentence"
              className={classes.texfield}
              type="submit"
              multiline
              rows={2}
              value={handleInput}
              name="sentenceInput"
              variant="filled"
              onChange={(e) => setHandleInput(e.target.value)}
            />

            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </form>
        </Grid>

        <Grid item>
          <Typography variant="h5" paragraph>
            Best Sentences:
          </Typography>

          {characterBestSentences.map((sentence) => (
            <Typography variant="h6" paragraph key={sentence.id}>
              + {sentence.sentence}
              <Button
                variant="contained"
                onClick={() => handleEdit(sentence.id)}
                startIcon={<EditIcon />}
              />
            </Typography>
          ))}
        </Grid>
        <Grid item>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={() => changeSentence()}
          >
            <TextField
              label="Edit Sentence"
              name="sentence"
              value={newSentence}
              onChange={(e) => setNewSentence(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={changeSentence}
            >
              <span className={classes.button}>Edit</span>
            </Button>
          </form>
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
