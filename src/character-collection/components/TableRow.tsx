import React from 'react';
import { Link, generatePath } from 'react-router-dom';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

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

export const TableRows = ({ character }) => {
  const { id, image, name, status, gender, species } = character;

  return (
    <StyledTableRow>
      <StyledTableCell align="left">
        <Link
          to={generatePath('/character/:id', { id })}
        >
          <img src={image} alt="" style={{ width: '7rem' }} />
        </Link>
      </StyledTableCell>
      <StyledTableCell align="right">{name}</StyledTableCell>
      <StyledTableCell align="right">{status}</StyledTableCell>
      <StyledTableCell align="right">{gender}</StyledTableCell>
      <StyledTableCell align="right">{species}</StyledTableCell>
    </StyledTableRow>
  );
};
