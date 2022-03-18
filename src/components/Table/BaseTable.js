import React from 'react';

import CssBaseline from '@material-ui/core';
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