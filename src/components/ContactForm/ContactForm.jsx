import PropTypes from 'prop-types';
import { useState } from 'react';

import { getItemsValueState } from 'redux/contacts/contacts-selectors';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import * as operations from '../../redux/contacts/contacts-operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItemsValueState);
  const dispatch = useDispatch();

  const handlerChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContacts = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      Notify.failure(`${name} is already in contacts`);
    } else {
      return dispatch(operations.addContact({ name, number }));
    }
  };

  const handlerSumbit = e => {
    e.preventDefault();
    reset();
    return addContacts({ name, number });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handlerSumbit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
        }}
      >
        <TextField
          type="text"
          name="name"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handlerChange}
          value={name}
          variant="outlined"
          autoComplete="off"
        />
        <TextField
          type="tel"
          name="number"
          label="Number"
          onChange={handlerChange}
          // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="The phone number must be 13 digits long and may contain numbers, spaces, dashes, paunches, and may begin with +"
          value={number}
          variant="outlined"
          sx={{ mb: 2, mt: 2 }}
          autoComplete="off"
        />
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </Box>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
