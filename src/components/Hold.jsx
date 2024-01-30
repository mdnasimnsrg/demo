import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

const columns = [
  { id: 'stock', label: <p className = 'text-base text-blacklight font-semibold font-sans'>Stock</p>, minWidth: 170 },
  { id: 'buydate', label: <p className = 'text-base text-blacklight font-semibold font-sans'>Hold date</p>, minWidth: 100 },
  {
    id: 'avgcost',
    label: <p className = 'text-base text-blacklight font-semibold font-sans'>Avg. Cost (Rs)</p>,
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'ltp',
    label: <p className = 'text-base text-blacklight font-semibold font-sans'>LTP (Rs)</p>,
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'lp',
    label: <p className = 'text-base text-blacklight font-semibold font-sans'>P&L%</p>,
    minWidth: 170,
    align: 'right'
  }
];

function createData(stock, buydate, avgcost, ltp,lp) {
  return { stock, buydate, avgcost, ltp, lp };
}

const rows = [
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>),
  createData(<p className = 'text-sm ext-black_p font-sans'><span className = 'bg-primary-100 px-3 py-1 rounded-full mr-1 font-sans'>NSE</span> CAPLIPOINT</p>, <p className = 'text-sm font-sans'>30 January 2023</p>, <p className = 'text-sm font-sans'>688.00</p>, <p className = 'text-sm ext-black_p font-sans'>1,228.10</p>,<p className = 'text-sm text-green font-sans'>78.50%</p>)

];

export default function Hold() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx = { { width: '100%', overflow: 'hidden', boxShadow: 'none', borderRadius: '8px' } }>
      <TableContainer sx = { { minHeight: 500 } }>
        <Table stickyHeader aria-label = "sticky table">
          <TableHead>
            <TableRow>
              { columns.map((column, index) => (
                <TableCell
                  key = { index }
                  align = { column.align }
                  style = { { minWidth: column.minWidth } }
                >
                  { column.label }
                </TableCell>
              )) }
            </TableRow>
          </TableHead>
          <TableBody>
            { rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role = "checkbox" tabIndex = { -1 } key = { index }>
                    { columns.map((column,index) => {
                      const value = row[column.id];
                      return (
                        <TableCell key = { index } align = { column.align }>
                          { value }
                        </TableCell>
                      );
                    }) }
                  </TableRow>
                );
              }) }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions = { [10,20, 25, 100] }
        component = "div"
        count = { rows.length }
        rowsPerPage = { rowsPerPage }
        page = { page }
        onPageChange =  { handleChangePage }
        onRowsPerPageChange = { handleChangeRowsPerPage }
      />
    </Paper>
  );
}