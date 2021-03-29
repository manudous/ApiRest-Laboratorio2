import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useCharacterCollection } from './character.hook';
import { CharacterSentences } from './components/character-sentences/character-sentences.container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AppBarCharacter } from './components/app-bar/appbar-container';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { AddSentenceForm } from './components/addsentence-form/addSentenceForm.container';
import { EditSentenceForm } from './components/editsentence-form/editSentenceForm.container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,

      [theme.breakpoints.up('md')]: {
        margin: 'auto',
        marginTop: '2rem',
        width: '80%',
      },
    },
    appbar: {
      padding: '1rem',
    },
    paper: {
      padding: '0.15rem',
      textAlign: 'center',
      color: theme.palette.text.primary,
      fontSize: '1.5rem',
    },
    button: {
      fontWeight: 'bold',
      padding: '1rem',
      marginTop: '3rem',
    },
  })
);

export const CharacterPage: React.FC = () => {
  const classes = useStyles();

  const { characterPage, loadCharacter } = useCharacterCollection();
  const { id, name, image, bestSentences } = characterPage;

  const [newSentence, setNewSentence] = React.useState({
    id: null,
    sentence: '',
  });

  const [editing, setEditing] = React.useState(false);

  const [currentSentence, setCurrentSentence] = React.useState({
    id: null,
    sentence: '',
  });

  React.useEffect(() => {
    loadCharacter();
  }, []);

  const submitSentence = async (e) => {
    e.preventDefault();
    if (!newSentence.sentence) return;

    const url = `http://localhost:3000/characters`;
    await Axios.put(`${url}/${id}`, {
      ...characterPage,
      bestSentences: [...bestSentences, newSentence],
    });

    loadCharacter();

    setNewSentence({
      id: null,
      sentence: '',
    });
  };

  const submitEditSentence = async (id, idCharacter) => {
    setEditing(false);

    const sentenceEdit = bestSentences.find((sentence) => sentence.id === id);
    sentenceEdit.sentence = currentSentence.sentence;

    const url = `http://localhost:3000/characters`;
    await Axios.put(`${url}/${idCharacter}`, {
      ...characterPage,
      bestSentences: bestSentences,
    });

    loadCharacter();
  };

  const sentenceDelete = async (id, idCharacter) => {
    const sentenceFilter = bestSentences.filter(
      (sentence) => sentence.id !== id
    );

    const url = `http://localhost:3000/characters`;
    await Axios.put(`${url}/${idCharacter}`, {
      ...characterPage,
      bestSentences: sentenceFilter,
    });

    loadCharacter();
  };

  const handleNewSentence = (sentence) => {
    setNewSentence(sentence);
  };

  const handleSetCurrentSentence = (sentence) => {
    setCurrentSentence(sentence);
  };

  const editRow = (sentence) => {
    setEditing(true);
    setCurrentSentence({
      id: sentence.id,
      sentence: sentence.sentence,
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppBarCharacter image={image} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="initial">
              {editing ? (
                <EditSentenceForm
                  id={id}
                  currentSentence={currentSentence}
                  setCurrentSentence={handleSetCurrentSentence}
                  submitEditSentence={submitEditSentence}
                />
              ) : (
                <AddSentenceForm
                  newSentence={newSentence}
                  submitSentence={submitSentence}
                  setNewSentence={handleNewSentence}
                />
              )}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="initial">
              Sentences
            </Typography>
            <CharacterSentences
              id={id}
              bestSentences={bestSentences}
              sentenceDelete={sentenceDelete}
              editRow={editRow}
            />
          </Paper>
        </Grid>
      </Grid>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackOutlinedIcon />}
          className={classes.button}
        >
          <span>Return</span>
        </Button>
      </Link>
    </div>
  );
};
