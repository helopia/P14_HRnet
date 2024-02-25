import { Link } from "react-router-dom"
import Table from "./Table";



function CurrentEmployees() {

  return (
    <main className="current-employee-container">
      <h1>Current Employees</h1>
        <Table/>
      <Link to='/'>Home</Link>
    </main>
  )
}

export default CurrentEmployees
