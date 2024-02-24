import { Link } from "react-router-dom";
import Form from "./Form";
import {useState} from "react";


function CreateEmployee() {
    const [modal, setModal] = useState(false);
    const handleSubmit = () => {
        setModal(true);
    };

    const handleClose = () => {
        setModal(false);
    };

  return (
    <section className="">
        <h1>HRnet</h1>
        <Link to={"/employees"}>View Current Employees</Link>
        <h3>Create Employee</h3>
        <Form onSubmit={handleSubmit}/>
    </section>
  )
}

export default CreateEmployee
