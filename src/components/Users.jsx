import React, { Component } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null,
      selectedCountry: null,
    };
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.dobRef = React.createRef();
  }

  addUser = () => {
    const newUser = {
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      dob: this.dobRef.current.value,
    };
    this.setState({
      users: [...this.state.users, newUser],
    });
    this.firstNameRef.current.value = "";
    this.lastNameRef.current.value = "";
    this.dobRef.current.value = "";
  };

  deleteUser = (index) => {
    const updatedUsers = [...this.state.users];
    updatedUsers.splice(index, 1);
    this.setState({
      users: updatedUsers,
    });
  };

  associateCountry = () => {
    if (this.state.selectedUser && this.state.selectedCountry) {
      console.log(`Associating ${this.state.selectedCountry} with ${this.state.selectedUser}`);
    }
  };

  render() {
    return (
      <div>
        <h1>Utilisateurs</h1>

        <Card className="mb-3">
          <Card.Header>Ajouter utilisateur</Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    ref={this.firstNameRef}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    ref={this.lastNameRef}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Date de naissance"
                    ref={this.dobRef}
                  />
                </Col>
                <Col>
                  <Button variant="primary" onClick={this.addUser}>
                    Ajouter
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>

        <Card className="mb-3">
          <Card.Header>Liste des utilisateurs</Card.Header>
          <Card.Body>
            <ul>
              {this.state.users.map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName}, Date de naissance : {user.dob}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => this.deleteUser(index)}
                  >
                    Supprimer
                  </Button>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Associer un pays à un utilisateur</Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    as="select"
                    onChange={(e) => this.setState({ selectedUser: e.target.value })}
                  >
                    <option value="">Sélectionner un utilisateur</option>
                    {this.state.users.map((user, index) => (
                      <option key={index} value={user.firstName}>
                        {user.firstName} {user.lastName}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    onChange={(e) => this.setState({ selectedCountry: e.target.value })}
                  >
                    <option value="">Sélectionner un pays</option>
                    {/* Ajoutez ici les options de pays */}
                  </Form.Control>
                </Col>
                <Col>
                  <Button variant="success" onClick={this.associateCountry}>
                    Associer
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Users;
