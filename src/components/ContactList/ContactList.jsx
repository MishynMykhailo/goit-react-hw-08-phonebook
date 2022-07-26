import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterValueState,
  getItemsValueState,
} from 'redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operations';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);
  const contacts = useSelector(getItemsValueState);
  const filter = useSelector(getFilterValueState);

  const deleteContacts = contactsId => {
    dispatch(operations.deleteContact(contactsId));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <Stack component="ul" sx={{ padding: 0 }} spacing={1}>
      {getVisibleContacts().map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            key={id}
            id={id}
            onDeleteContacts={deleteContacts}
          />
        );
      })}
    </Stack>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
};

export default ContactList;
