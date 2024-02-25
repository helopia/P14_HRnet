import {TextField} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useContext, useMemo, useState} from "react";
import {EmployeeInit} from "../../employeeInit/employeeInit";

function Table() {
    const { state, dispatch } = useContext(EmployeeInit);

    const { employees } = state;

    const [searchingEmployee, setSearchingEmployee] = useState("");

    const handleSearchingEmployee = (event: any) => {
        setSearchingEmployee(event.target.value);
    };

    // Filter employee list
    const employeesArray = useMemo(() => {
        return employees
            .filter(
                (employee) =>
                    employee.firstName.toLowerCase().includes(searchingEmployee.toLowerCase()) ||
                    employee.lastName.toLowerCase().includes(searchingEmployee.toLowerCase()) ||
                    employee.department.toLowerCase().includes(searchingEmployee.toLowerCase()) ||
                    employee.street.toLowerCase().includes(searchingEmployee.toLowerCase()) ||
                    employee.city.toLowerCase().includes(searchingEmployee.toLowerCase()) ||
                    employee.state.toLowerCase().includes(searchingEmployee.toLowerCase()) ||
                    employee.zipCode.toLowerCase().includes(searchingEmployee.toLowerCase())
            )
            .map((employee, index) => {
                return { ...employee, id: index };
            });
    }, [employees, searchingEmployee]);
    //Created columns field
    const columns = [
        { headerName: "First Name", field: "firstName", width: 100 },
        { headerName: "Last Name", field: "lastName", width: 100 },
        { headerName: "Start Date", field: "startDate", width: 150 },
        { headerName: "Department", field: "department", width: 150 },
        { headerName: "Date of Birth", field: "dateOfBirth", width: 150 },
        { headerName: "Street", field: "street", width: 220 },
        { headerName: "City", field: "city", width: 100 },
        { headerName: "State", field: "state", width: 100 },
        { headerName: "Zip Code", field: "zipCode", width: 100 },
    ];
    return (
        <div className="data-grid-container" data-testid='container-table'>
            <TextField
                label="Search"
                value={searchingEmployee}
                onChange={handleSearchingEmployee}
                variant="outlined"
                margin="normal"
            />
            <DataGrid
                columns={columns}
                rows={employeesArray}
                getRowId={(row) => row.id}
                autoHeight
                pageSizeOptions={[5, 10, 25, 50, 100]}
            />
        </div>
    );

}

export default Table;
