import React from 'react';
import {Link} from "react-router-dom";
import {DatePicker} from "@mui/x-date-pickers";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const CreateEmployeeForm = () => {
    return (
        <>
            <form action="">
                <div className="container">
                    <div>
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
                        </div>
                    </div>
                    <fieldset>
                        <legend>Adress</legend>
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            id="street"
                        />
                        <label htmlFor="state">State</label>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"


                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <label htmlFor="zipCode">Zip Code</label>
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
