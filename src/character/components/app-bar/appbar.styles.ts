import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      padding: '1rem'
    },
    title: {
      fontSize: '2rem',
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
      marginRight: '1rem',
    },
  })
);