import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {departments} from "../data";



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
    const [departmentName, setDepartmentName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setDepartmentName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">departments</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={departmentName}
                    onChange={handleChange}
                    input={<OutlinedInput label="departments" />}

                >
                    {departments.map((departments) => (
                        <MenuItem
                            key={departments}
                            value={departments}
                        >
                            {departments}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
