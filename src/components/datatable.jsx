import React, {useState} from 'react';
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
    const [sort, setSort] = useState({column: undefined, reverse: false});

    const rows = data.filter( row => {
        return (
            row.origin.match(origin) &&
            row.destination.match(destination) &&
            row.freightMode.match(freightMode) &&
            row.pickupDate.match(pickupDate)
    )
    });

    const getSortIcon = column => {
        return sort.column === column
            ? sort.reverse ? "↑" : "↓"
            : "↑↓"
    };

    const handleClickSort = column => {
        setSort({
            column,
            reverse: sort.column === column ? !sort.reverse : false,
        })
    };

    const dynamicSort = column => {
        var sortOrder = sort.reverse ? -1 : 1;

        return function (a,b) {
            if(sortOrder === -1){
                return b[column].localeCompare(a[column]);
            }else{
                return a[column].localeCompare(b[column]);
            }
        }
    };

    const orderedRows = !sort.column ? rows : rows.sort(dynamicSort(sort.column));

    return (
        // TODO get the columns names into an array to simplify the code and the onClick calls
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Origin</TableCell>
                        <TableCell>Destination</TableCell>
                        <TableCell>Mode</TableCell>
                        <TableCell>Pickup Date</TableCell>
                        <TableCell onClick={()=> handleClickSort("price")}>
                            {getSortIcon("price")} Price
                        </TableCell>
                        <TableCell onClick={()=> handleClickSort("duration")}>
                            {getSortIcon("duration")} Duration
                        </TableCell>
                        <TableCell onClick={()=> handleClickSort("ETA")}>
                            {getSortIcon("ETA")} ETA
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderedRows.map((row) => (
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
