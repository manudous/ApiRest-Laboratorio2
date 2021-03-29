import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    sentences: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '1rem',
      width: '100%',
    },
    table: {
      width: '95%',
    },
  })
);
