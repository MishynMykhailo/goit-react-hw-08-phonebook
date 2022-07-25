import PropTypes from 'prop-types';
import s from '../ContactItem/ContactItem.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const ContactItem = ({ name, number, id, onDeleteContacts }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Item
      component="li"
      sx={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 2,
        alignItems: 'center',
        color: 'black',
        border: '1px solid #1976d278',
      }}
    >
      {name}: {number}
      <Button
        variant="outlined"
        onClick={() => onDeleteContacts(id)}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContacts: PropTypes.func,
};

export default ContactItem;
