import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const [contacts, setContacts] = useState([
  //   {
  //     name: "Mark",
  //     email: "mark@mark.com",
  //     phone: "+2330543846198",
  //     location: "East legon",
  //     id: uuidv4(),
  //   },
  //   {
  //     name: "Tomy",
  //     email: "tomy@tomy.com",
  //     phone: "+2330543846198",
  //     location: "Osu",
  //     id: uuidv4(),
  //   },
  //   {
  //     name: "Emile",
  //     email: "emilek@emile.com",
  //     phone: "+2330543846198",
  //     location: "Dansoman",
  //     id: uuidv4(),
  //   },
  //   {
  //     name: "Malik",
  //     email: "malikk@emile.com",
  //     phone: "+2330543846198",
  //     location: "Tema",
  //     id: uuidv4(),
  //   },
  // ]);

  // const addContact = (templateData) => {
  //   setContacts([...contacts, templateData]);
  // };

  // const editContact = (id, updatedContact) => {
  //   setContacts(
  //     contacts.map((contact) => {
  //        return contact.id === id ? updatedContact :contact;
  //     })
  //   );
  // };

  // const deleteUser = (id) => {
  //    setContacts(
  //      contacts.filter((contact) => {
  //         return contact.id !== id
  //      })
  //    );
  // }
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md="3">
            <AddContact /*tempData={addContact}*/ />
          </Col>
          <Col>
            <Contacts
              // contacts={contacts}
              // editContact={editContact}
              // deleteUser={deleteUser}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
