import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

//TODO: Melhoria implementar paginação
export default function TableComponent({ columns, rows, editUser, deleteUser }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center" key={column.field}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => editUser(row)} startIcon={<EditIcon />} variant="contained" color="success" >
                    Editar
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => deleteUser(row.id)} startIcon={<DeleteIcon />} variant="contained" color="error" >
                    Remover
                  </Button>
                </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}