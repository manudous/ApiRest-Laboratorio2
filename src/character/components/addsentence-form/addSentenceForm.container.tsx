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
  submitSentence: (e) => void;
  setNewSentence: (sentence) => void;
  newSentence: {
    id: null;
    sentence: string;
  };
}

export const AddSentenceForm: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { setNewSentence, submitSentence, newSentence } = props;

  const handleInputChange = (e) => {
    setNewSentence({
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={submitSentence}
    >
      <TextField
        type="text"
        name="sentence"
        value={newSentence.sentence}
        label="Insert Sentence"
        onChange={handleInputChange}
      />
      <Button onClick={submitSentence}>Save Sentence</Button>
    </form>
  );
};
