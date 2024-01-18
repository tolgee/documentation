import { styled } from '@mui/material';
import React, { FC } from 'react';

export const TableInner = styled('table')`
  display: table;
`;

export const TableContainer = styled('div')`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.palette.custom.tableBorder};
  overflow: auto;
  display: inline-block;
`;

export const Table: FC = (props) => {
  return (
    <TableContainer>
      <TableInner>{props.children}</TableInner>
    </TableContainer>
  );
};

export const TableHead = styled('thead')`
    background-color: ${(props) =>
      props.theme.palette.custom.tableHeadBackground};
    color: ${(props) => props.theme.palette.primary.main};
    border: 0;

    tr {
        border-bottom: 1px solid ${(props) =>
          props.theme.palette.custom.tableBorder};
    }
}
`;

export const TableBody = styled('tbody')``;

export const TableRow = styled('tr')`
  border: 0;
`;

export const TableCell = styled('td')`
  border: 0;
  background-color: ${(props) => props.theme.palette.custom.tableRowBackground};
`;

export const TableHeadCell = styled('th')`
  border: 0;
`;
