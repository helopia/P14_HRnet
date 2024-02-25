import data from "../../data/data";
import DatePickerMui from "../../components/DatePickerMui";
import {FormEvent, useContext, useState} from "react";
import {Employee, EmployeeInit} from "../../employeeInit/employeeInit";



type Props = {
    onSubmit: (employee: Employee) => void;
};
const Form = ({onSubmit}: Props) => {
    const { state, dispatch } = useContext(EmployeeInit);
    const [employee, setEmployee] = useState<Employee>({
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        startDate: null,
        street: "",
        city: "",
        state: "AL",
        zipCode: "",
        department: "Sales",
    });
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setEmployee((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(employee);
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: employee,
        });
        setEmployee({
            firstName: "",
            lastName: "",
            dateOfBirth: null,
            startDate: null,
            street: "",
            city: "",
            state: "Alabama",
            zipCode: "",
            department: "Sales",
        });
    };
    return (
        <div className="">
            <form action="#" id="create-employee" onSubmit={(e) => handleSubmit(e)}>
                <div className="names">
                    <div className="first-name">
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={employee.firstName}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>

                    <div className="last-name">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={employee.lastName}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                </div>

                <div className="birth-date-datepicker">
                    <label htmlFor="birth">Date of birth</label>
                    <DatePickerMui
                        value={employee.dateOfBirth}
                        onChange={(date) =>
                            setEmployee((prev) => ({...prev, dateOfBirth: date}))
                        }
                    />

                </div>
                <div className="start-date-datepicker">
                    <label htmlFor="start">Start Date</label>
                    <DatePickerMui
                        value={employee.startDate}
                        onChange={(date) =>
                            setEmployee((prev) => ({...prev, startDate: date}))
                        }
                    />
                </div>

                <fieldset className="adress-container">
                    <legend>Address</legend>

                    <div className="street-city-container">
                        <div className="street">
                            <label htmlFor="street">Street</label>
                            <input
                                id="street"
                                type="text"
                                name="street"
                                value={employee.street}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>

                        <div className="city">
                            <label htmlFor="city">City</label>
                            <input
                                id="city"
                                type="text"
                                name="city"
                                value={employee.city}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                    </div>

                    <div className="state-zipcode-container">
                        <div className="state">
                            <label htmlFor="state">State</label>
                            <select
                                id="state"
                                name="state"
                                value={employee.state}
                                onChange={(e) => handleChange(e)}
                                required
                            >
                                {data.map((state) => (
                                    <option value={state.abbreviation} key={state.abbreviation}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="zipcode">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input
                                id="zip-code"
                                type="number"
                                name="zipCode"
                                value={employee.zipCode}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                    </div>
                </fieldset>
                <div className="department">
                    <label htmlFor="department">Department</label>
                    <select
                        name="department"
                        id="department"
                        value={employee.department}
                        onChange={(e) => handleChange(e)}
                        required
                    >
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </div>
                <button className="save-btn">Save</button>
            </form>
        </div>
    );
};

export default Form;
