import React, { useContext } from 'react';
import { TableContexts } from '../../context/context';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IDb, TableContextType } from '../../types/types';

const ViewTable = () => {
  const { data, selectedRow, setSelectedRow } = useContext<TableContextType | undefined>(TableContexts) as TableContextType;

  const handleClickRow = (row: IDb | null) => {
    setSelectedRow(row);
  }

  return (
    <Grid container direction = 'column' spacing={2}>
      <TableContainer component={Paper} sx={{ maxHeight: 500, minHeight: 500, overflow: 'auto', width: 'auto' }}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table" >
      <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Subscription</TableCell>
            <TableCell align="right">Employment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? data.map((item: IDb, i: number) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => handleClickRow(item)}
              selected = {selectedRow === item}
            >
            <TableCell component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell align="right">{item.age}</TableCell>
            <TableCell align="right">{item.subscription}</TableCell>
            <TableCell align="right">{item.employment}</TableCell>
          </TableRow>
          )): <TableRow>
                <TableCell>no name</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>}
        </TableBody>
      </Table>
      </TableContainer>
    </Grid>
  );
}

export default ViewTable