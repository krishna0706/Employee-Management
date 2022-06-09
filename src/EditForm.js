// Importing Components from Bootstrap
import {
  Row,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  Alert,
} from "react-bootstrap";

// Importing React Hook
import { useState } from "react";

const EditForm = ({ selectedData, onEdit }) => {
  // Selected Employee Id
  const id = selectedData.employeeId;

  // All States Of Selected Employee
  const [name, setName] = useState(selectedData.name);
  const [age, setAge] = useState(selectedData.age);
  const [department, setDepartment] = useState(selectedData.department);
  const [bloodGroup, setBloodGroup] = useState(selectedData.bloodGroup);
  const [address, setAddress] = useState(selectedData.address);
  const [contactNumber, setContactNumber] = useState(
    selectedData.contactNumber
  );

  // Alert State
  const [showAlert, setShowAlert] = useState(true);

  const handleEditForm = (ev) => {
    ev.preventDefault();

    // Checking Whether All Fields Are Filled
    if (
      !name ||
      !age ||
      !department ||
      !bloodGroup ||
      !address ||
      !contactNumber
    ) {
      setShowAlert(false);
    } else {
      // Passing Edited Employee Data
      onEdit({ id, name, age, department, bloodGroup, address, contactNumber });
    }
  };
  return (
    <Row>
      <h3>Edit Employee Details</h3>

      {/* Alert Component */}
      {!showAlert && (
        <Alert
          variant="danger"
          className="w-50"
          onClose={() => setShowAlert(true)}
          dismissible
        >
          <Alert.Heading>Oh! You got an error!</Alert.Heading>
          <p>All Fields are Required</p>
        </Alert>
      )}

      {/* Edit Form Component */}
      <Row className="mt-3 mb-3">
        <Form onSubmit={handleEditForm}>
          {/* Name Field */}
          <FormGroup className="mb-3">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter Employee Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              className="w-50"
            />
          </FormGroup>

          {/* Age Field */}
          <FormGroup className="mb-3">
            <FormLabel>Age</FormLabel>
            <FormControl
              type="number"
              placeholder="Enter Employee Age"
              className="w-50"
              onChange={(event) => setAge(event.target.value)}
              value={age}
            />
          </FormGroup>

          {/* Department Field */}
          <FormGroup className="mb-3">
            <FormLabel>Department</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter the Department"
              className="w-50"
              onChange={(event) => setDepartment(event.target.value)}
              value={department}
            />
          </FormGroup>

          {/* Blood Group Field */}
          <FormGroup className="mb-3">
            <FormLabel>Blood Group</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter the Blood group"
              className="w-50"
              onChange={(event) => setBloodGroup(event.target.value)}
              value={bloodGroup}
            />
          </FormGroup>

          {/* Address Field */}
          <FormGroup className="mb-3">
            <FormLabel>Address</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter Address"
              className="w-50"
              onChange={(event) => setAddress(event.target.value)}
              value={address}
            />
          </FormGroup>

          {/* Contact Number Field */}
          <FormGroup className="mb-3">
            <FormLabel>Contact Number</FormLabel>
            <FormControl
              type="tel"
              placeholder="Enter Contact Number"
              className="w-50"
              onChange={(event) => setContactNumber(event.target.value)}
              value={contactNumber}
            />
          </FormGroup>

          {/* Submit Button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Row>
  );
};

export default EditForm;
