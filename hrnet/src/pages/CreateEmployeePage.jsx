import React from 'react';
import CreateEmployeeForm from "../components/CreateEmployeeForm";
import Test from "../components/Test";
import Test2 from "../components/Test2";
import {departments, } from "../data";


const CreateEmployeePage = () => {
    return (
        <section className="container">
            <h1>Create Employee</h1>
            {/*<CreateEmployeeForm/>*/}
            <Test  departments={departments}></Test>
            <Test2></Test2>
        </section>
    );
};

export default CreateEmployeePage;
