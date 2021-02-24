import React from 'react';
import {
    TextField,
    MenuItem,
    Button,
} from '@material-ui/core'

const freightModes = [
    "road",
    "air"
]
const Search = ({handleChange}) => {
    const today = new Date();

    return (
        <div id="search">
            <TextField id="origin" label="Origin" />
            <TextField id="destination" label="Destination" />
            <TextField id="freightMode" label="Mode" defaultValue={freightModes[0]} select>
                { freightModes.map(mode => {
                    return <MenuItem key={mode} value={mode}>{mode}</MenuItem>
                })}
            </TextField>
            <TextField
                id="pickupDate"
                label="Pickup Date"
                type="date"
                defaultValue={today.toISOString().slice(0, 10)}
            />
            <Button id="searchButton" onClick={handleChange}>Search</Button>
        </div>
    )
}

export default Search;
