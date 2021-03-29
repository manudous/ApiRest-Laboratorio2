import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    margin: 'auto',
    marginTop: '2rem',
    width: '60%',
  },
  button: {
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  texfield: {
    width: '100%',
  },
  inputEdit: {
    '& > *': {
      margin: '.5rem',
      width: '25ch',
    },
  },
});
