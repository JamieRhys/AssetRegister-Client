import React from 'react';

import CssBaseline, { Paper, TableContainer, TablePagination } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useTable } from 'react-table';

export function BaseTable({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow   
    } = useTable(
        {
            columns,
            data
        }
    );

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return(
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader { ...getTableProps }>
                    <TableHead>
                        {
                            headerGroups.map(
                                headerGroup => (
                                    <TableRow { ...headerGroup.getHeaderGroupProps() }>
                                        {
                                            headerGroup.headers.map(
                                                column => (
                                                    <TableCell 
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth, width: column.width }}
                                                        { ...column.getHeaderProps() }
                                                        >
                                                            { column.render('Header') }
                                                    </TableCell>
                                                )
                                            )
                                        }
                                    </TableRow>
                                )
                            )
                        }
                    </TableHead>
                    <TableBody { ...getTableBodyProps() }>
                    {
                        rows.map(
                            (row, i) => {
                                prepareRow(row);
                                return(
                                    <TableRow { ...row.getRowProps() }>
                                        {
                                            row.cells.map(
                                                cell => {
                                                    return <TableCell 
                                                        align={row.align}
                                                        { ...cell.getCellProps() }
                                                    >
                                                        { cell.render('Cell') }
                                                    </TableCell>
                                                }
                                            )
                                        }
                                    </TableRow>
                                )
                            }
                        )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

/*
export function BaseTable({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data
        }
    );

    return(
        <Table { ...getTableProps() }>
            <TableHead>
                {
                    headerGroups.map(
                        headerGroup => (
                            <TableRow { ...headerGroup.getHeaderGroupProps() }>
                                {
                                    headerGroup.headers.map(
                                        column => (
                                            <TableCell { ...column.getHeaderProps() }>{ column.render('Header') }</TableCell>
                                        )
                                    )
                                }
                            </TableRow>
                        )
                    )
                }
            </TableHead>
            <TableBody { ...getTableBodyProps() }>
                {
                    rows.map(
                        (row, i) => {
                            prepareRow(row);
                            return(
                                <TableRow { ...row.getRowProps() }>
                                    {
                                        row.cells.map(
                                            cell => {
                                                return <TableCell { ...cell.getCellProps() }>{ cell.render('Cell') }</TableCell>
                                            }
                                        )
                                    }
                                </TableRow>
                            )
                        }
                    )
                }
            </TableBody>
        </Table>
    );
}
*/