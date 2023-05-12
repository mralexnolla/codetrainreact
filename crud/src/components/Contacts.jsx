import React from 'react'
import Contact from './Contact'
import {Row, Col} from 'react-bootstrap'

const Contacts = ({ contacts, editDeata, deletData }) => {
  return (
    <div>
      <Row>
        {contacts.map((contact, index) => {
          return (
            <Col key={index}>
              <Contact
                contact={contact}
                editDeata={editDeata}
                deletData={deletData}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Contacts
