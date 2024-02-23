import React from 'react';
import {Link} from "react-router-dom";
import {DatePicker} from "@mui/x-date-pickers";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {POST_EMPLOYEE} from "../store/actions/constant";
import {departments, statesUSA} from "../data";
import OutlinedInput from "@mui/material/OutlinedInput";

const CreateEmployeeForm = ({statesUSA, departments}) => {
    const [departmentName, setDepartmentName] = React.useState([]);
    const [statesUSAName, setStatesUSAName] = React.useState([]);

    const handleChangeDepartment = (event) => {
        const {
            target: {value},
        } = event;
        setDepartmentName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
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
        <>
            <form action="" className="createEmployeeForm">
                <div className="container">
                    <div className="container_infos">
                        <label htmlFor="firstname">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            placeholder="First name"
                        />
                        <label htmlFor="lastname">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            placeholder="Last Name"
                        />

                        <label htmlFor="BirthDate">
                            Date of Birth
                        </label>
                        <DatePicker label="Date of Birth"
                                    type="date"
                                    id="birthDate"
                                    name="birthDate"
                        />
                        <label htmlFor="startDate">
                            Start Date
                        </label>
                        <DatePicker label="Start date"
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                        />
                        <div className="department">
                            <label htmlFor="department">Department</label>
                            <FormControl sx={{m: 1, width: 300}}>
                                <InputLabel id="demo-multiple-name-label">departments</InputLabel>
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={departmentName}
                                    onChange={handleChangeDepartment}
                                    input={<OutlinedInput label="departments"/>}
                                >
                                    {departments.map((department) => (
                                        <MenuItem key={department.value} value={department.value}>
                                            {department.label}
                                        </MenuItem>
                                    ))}
                                    ))
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <fieldset>
                        <legend>Adress</legend>
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            id="street"
                        />
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                        />
                        <label htmlFor="state">State</label>
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
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="number" id="zipCode"/>
                    </fieldset>
                    <div id="formSave">
                        <input type="submit" value="save"/>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateEmployeeForm;
