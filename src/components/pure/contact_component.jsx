import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h1>Nombre y Apellido: { contact.name } { contact.lastName }</h1>
      <h3>Email: { contact.email }</h3>
      <h4>Contacto { contact.connected ? 'En Línea' : 'No Disponible' }</h4>
    </div>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
