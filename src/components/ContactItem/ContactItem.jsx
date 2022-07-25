import PropTypes from 'prop-types';
import s from '../ContactItem/ContactItem.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const ContactItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <li className={s.li}>
      <div className={s.divItemContainer}>
        {name}: {number}
        <Button
          variant="outlined"
          onClick={() => onDeleteContacts(id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContacts: PropTypes.func,
};

export default ContactItem;
