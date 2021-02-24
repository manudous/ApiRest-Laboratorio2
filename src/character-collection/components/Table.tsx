import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    width: 700,
  },
});

export default function CustomizedTables({ characterCollection }) {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Species</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characterCollection.map((character) => (
              <StyledTableRow key={character.id}>
                <StyledTableCell align="left">
                  <img src={character.image} alt="" style={{ width: '7rem' }} />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link
                    to={generatePath("characters/:id", {character.id})}
                  >{character.name}</Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {character.status}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {character.gender}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {character.species}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
