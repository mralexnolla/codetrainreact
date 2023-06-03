import React from "react";
import Contact from "./Contact";
import { Row, Col } from "react-bootstrap";
//import { v4 as uuidv4 } from "uuid";

const Contacts = (/*{ contacts, editContact, deleteUser }*/) => {
  return (
    <div>
      <Row>
        
          
            <Col /*key={index}*/ style={{ marginBottom: "1rem" }}>
              <Contact
                // key={contact.id}
                // contact={contact}
                // editContact={editContact}
                // deleteUser={deleteUser}
              />
            </Col>
         
       
      </Row>
    </div>
  );
};

export default Contacts;
