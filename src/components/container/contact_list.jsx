import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact_component';

const ContactList = () => {
  const defaultContact = new Contact('Sergio', 'Arriagada', 'sarriagada87@gmail.com', true);

  return (
    <div>
      <h1>Lista de contactos:</h1>
      <ContactComponent contact={defaultContact} />
    </div>
  );
}

export default ContactList;
