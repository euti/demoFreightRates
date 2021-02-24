import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core'
import data from '../data/mockData.json';

const DataTable = ({origin, destination, freightMode, pickupDate}) => {
    const rows = data.filter( row => {
        return (
            row.origin.match(origin) &&
            row.destination.match(destination) &&
            row.freightMode.match(freightMode) &&
            row.pickupDate.match(pickupDate)
    )
    });

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Origin</TableCell>
                        <TableCell>Destination</TableCell>
                        <TableCell>Mode</TableCell>
                        <TableCell>Pickup Date</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>ETA</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.origin}</TableCell>
                            <TableCell>{row.destination}</TableCell>
                            <TableCell>{row.freightMode}</TableCell>
                            <TableCell>{row.pickupDate}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.duration}</TableCell>
                            <TableCell>{row.ETA}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable;
