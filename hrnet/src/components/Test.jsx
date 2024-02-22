import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {departments, statesUSA} from "../data";



// const departments = [
//     'Oliver Hansen',
//     'Van Henry',
//     'April Tucker',
//     'Ralph Hubbard',
//     'Omar Alexander',
//     'Carlos Abbott',
//     'Miriam Wagner',
//     'Bradley Wilkerson',
//     'Virginia Andrews',
//     'Kelly Snyder',
// ];



export default function Test() {
    const [statesUSAName, setStatesUSAName] = React.useState([]);

    const handleChangeStateUsa = (event) => {
        const {
            target: { value },
        } = event;
        setStatesUSAName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">State</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={statesUSAName}
                    onChange={handleChangeStateUsa}
                    input={<OutlinedInput label="State" />}

                >
                    {statesUSA.map((stateUSA) => (
                        <MenuItem key={stateUSA.state} value={stateUSA.state}>
                            {stateUSA.state}
                        </MenuItem>
                    ))}
                    ))
                </Select>
            </FormControl>
        </div>
    );
}
