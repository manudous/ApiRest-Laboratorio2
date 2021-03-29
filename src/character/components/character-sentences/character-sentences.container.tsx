import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useStyles } from './character-sentences.styles';

interface bestSentences {
  id: number;
  sentence: string;
}

interface Props {
  bestSentences: bestSentences[];
  id: string;
  sentenceDelete: (id, idCharacter) => void;
  editRow: (sentence) => void;
}

export const CharacterSentences: React.FC<Props> = (props) => {
  const { bestSentences, sentenceDelete, id, editRow } = props;
  const classes = useStyles();

  return (
    <>
      {bestSentences.length > 0 ? (
        <table className={classes.table}>
          <tbody>
            {bestSentences.map((sentence) => (
              <tr key={sentence.id} className={classes.sentences}>
                <td>{sentence.sentence}</td>
                <td>
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <Button onClick={() => editRow(sentence)}>Edit</Button>
                    <Button onClick={() => sentenceDelete(sentence.id, id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <p>No Sentences</p>
        </div>
      )}
    </>
  );
};
