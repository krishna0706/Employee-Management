// Importing Components from Bootstrap
import { Button, Row, Container } from "react-bootstrap";

const Header = ({ showList, visibility }) => {
  return (
    <Container>
      <Row className="text-center m-3">
        <h2 className="mb-5">Employee Management System</h2>
      </Row>
      {!visibility && (
        <Row className="justify-content-center">
          <Button
            className="text-center"
            onClick={showList}
            variant="primary"
            style={{
              width: "20%",
              padding: "10px",
              fontSize: "1em",
              borderRadius: "1em",
            }}
          >
            Add Employee
          </Button>
        </Row>
      )}
    </Container>
  );
};

export default Header;
