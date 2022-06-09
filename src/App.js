// Importing Components
import "./App.css";
import Header from "./Header";
import List from "./List";
import Form from "./Form";
import EditForm from "./EditForm";

// Importing Packages
import { v4 as uuidv4 } from "uuid";
import { Container } from "react-bootstrap";

// Importing React Hooks
import { useState, useEffect } from "react";

const App = () => {
  // All States
  const [employees, setEmployees] = useState([]); // To Store Employees Details
  const [showForm, setShowForm] = useState(false); // To Show/Hide Form Component
  const [selectedData, setSelectedData] = useState(null); // To Store Selected Employee Details
  const [showEditForm, setShowEditForm] = useState(false); // To Show/Hide Edit Form Details

  // Fetching Data from LocalStorage
  const getEmployees = JSON.parse(localStorage.getItem("employees"));

  useEffect(() => {
    if (getEmployees == null) {
      setEmployees([]);
    } else {
      setEmployees(getEmployees);
    }
    //es-lint-disable-next-line
  }, []);

  // Add Employee Data
  const addEmployee = (data) => {
    // To Generate ID For the Employees
    const employeeId = uuidv4();

    const newEmployee = { employeeId, ...data };

    // Adding Details in Employees Array
    setEmployees([...employees, newEmployee]);

    // Storing New Employees in Local Storage
    localStorage.setItem(
      "employees",
      JSON.stringify([...employees, newEmployee])
    );
    setShowForm(!showForm);
  };

  // To Get Details Of Selected Employee
  const handleEdit = (id) => {
    // Fetching Selected Employee Details
    const [myData] = getEmployees.filter(
      (employee) => employee.employeeId === id
    );

    // Storing All Details of selected Employee
    setSelectedData(myData);
    setShowForm(true);
    setShowEditForm(true);
  };

  // To Store Selected Employee Details
  const editEmployee = (data) => {
    const editedData = getEmployees.map((employees) => {
      if (employees.employeeId === data.id) {
        return {
          ...employees,
          ...data,
        };
      }
      return employees;
    });

    // Storing Edited Details in Local Storage
    localStorage.setItem("employees", JSON.stringify(editedData));
    setShowEditForm(false);
    setShowForm(false);
    window.location.reload();
  };

  // Delete Selected Employee Details
  const handleDelete = (id) => {
    const deleteEmployee = getEmployees.filter(
      (employee) => employee.employeeId !== id
    );

    setEmployees(deleteEmployee);

    // Deleting Selected Employee
    localStorage.setItem("employees", JSON.stringify(deleteEmployee));
  };

  return (
    <Container>
      {/* App Header Component to Show Title and Add Employee Button */}
      <Header showList={() => setShowForm(!showForm)} visibility={showForm} />

      {/* Form Component to add Employee Details*/}
      {showForm && !showEditForm && <Form onAdd={addEmployee} />}

      {/* List Component to Fetch Employees Details */}
      {!showForm && (
        <List
          employees={employees}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}

      {/* Edit Form Component to edit selected Employee Details */}
      {showEditForm && (
        <EditForm selectedData={selectedData} onEdit={editEmployee} />
      )}
    </Container>
  );
};

export default App;
