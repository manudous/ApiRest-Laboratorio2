import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '95%',
      },
    },
  })
);

interface Props {
  id: string;
  currentSentence: {
    id: null;
    sentence: string;
  };
  setCurrentSentence: (sentence) => void;
  submitEditSentence: (id, idCharacter) => void;
}

export const EditSentenceForm: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { id, currentSentence, setCurrentSentence, submitEditSentence } = props;

  const handleInputChange = (e) => {
    setCurrentSentence({
      ...currentSentence,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={() => submitEditSentence(currentSentence.id, id)}
    >
      <TextField
        type="text"
        name="sentence"
        value={currentSentence.sentence}
        label="Edit Sentence"
        onChange={handleInputChange}
      />
      <Button onClick={() => submitEditSentence(currentSentence.id, id)}>
        Edit Sentence
      </Button>
    </form>
  );
};
