import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function ContactForm({ onAddContact }) {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = contact;
    const id = uuidv4();
    onAddContact({ id, name, number });
    setContact({ name: '', number: '' });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={contact.number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;