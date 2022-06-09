// Importing Components  from Bootstrap
import { Button, Container, Table } from "react-bootstrap";

const List = ({ employees, handleEdit, handleDelete }) => {
  return (
    <Container className="mt-4">
      {/* Table to Display Employee Details */}
      <Table striped bordered hover>
        {/* Table Headings */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Blood Group</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.employeeId}>
                <td>{i + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.department}</td>
                <td>{employee.bloodGroup}</td>
                <td>{employee.address}</td>
                <td>{employee.contactNumber}</td>
                <td>
                  {/* Edit Button */}
                  <Button
                    variant="secondary"
                    onClick={() => handleEdit(employee.employeeId)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  {/* Delete Button */}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(employee.employeeId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr key={0}>No Employee Records Found</tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default List;
