import React from 'react';
import {Link} from "react-router-dom";


const CreateEmployeeForm = () => {
    return (
        <>
            <form action="">
                <div>
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
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                        />
                        <label htmlFor="startDate">
                            Start Date
                        </label>
                        <input
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
                        {/*<CustomDropdown></CustomDropdown>*/}
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
