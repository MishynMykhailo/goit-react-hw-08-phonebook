import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const UpdateContact = ({ id, changeModal, UserName, UserNumber }) => {
  const [name, setName] = useState(UserName);
  const [number, setNumber] = useState(UserNumber);
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
  const handlerSumbit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      Notify.failure('Fill in the fields');
      return;
    }
    dispatch(updateContact({ id, number, name }));
    return changeModal(false);
  };
  return (
    <Box
      component="form"
      onSubmit={handlerSumbit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
      }}
    >
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        Edit Contact
      </Typography>
      <TextField
        type="text"
        name="name"
        label="Name"
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
        value={number}
        variant="outlined"
        sx={{ mb: 2, mt: 2 }}
        autoComplete="off"
      />
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </Box>
  );
};
export default UpdateContact;
