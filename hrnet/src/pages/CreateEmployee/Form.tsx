import data from "../../data/data";
import DatePickerMui from "../../components/DatePickerMui";
import {useState} from "react";
import {Employee} from "../../employeeInit/employeeInit";

const Form = ({}) => {
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

  return (
    <div className="">
      <form action="#" id="" >
        <div className="">
          <div className="">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              required
            />
          </div>

          <div className="">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              required
            />
          </div>
        </div>

        <div className="">
          <label htmlFor="birth">Date of birth</label>
          <DatePickerMui
              value={employee.dateOfBirth}
              onChange={(date) =>
                  setEmployee((prev) => ({ ...prev, dateOfBirth: date }))
              }
          />

        </div>
        <div className="">
          <label htmlFor="start">Start Date</label>
          <DatePickerMui
              value={employee.startDate}
              onChange={(date) =>
                  setEmployee((prev) => ({ ...prev, startDate: date }))
              }
              />
        </div>

        <fieldset className="">
          <legend>Address</legend>

          <div className="">
            <div className="street">
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                name="street"
                required
              />
            </div>

            <div className="city">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                required
              />
            </div>
          </div>

          <div className="">
            <div className="state">
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                required
              >
                {data.map((state) => (
                  <option value={state.abbreviation} key={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="">
              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                name="zipCode"

                required
              />
            </div>
          </div>
        </fieldset>
        <div className="">
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            required
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
        <button className="">Save</button>
      </form>
    </div>
  );
};

export default Form;
