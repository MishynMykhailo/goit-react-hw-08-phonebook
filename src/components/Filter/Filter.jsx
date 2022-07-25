import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getFilterValueState } from 'redux/contacts/contacts-selectors';
import TextField from '@mui/material/TextField';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValueState);

  const changeFilter = e => {
    dispatch(actions.changeFilter(e.currentTarget.value));
  };
  return (
    <>
      <TextField
        variant="outlined"
        type="text"
        name="filter"
        label="Find contacts by name"
        value={filter}
        onChange={changeFilter}
        sx={{ mb: 2, mt: 2 }}
      />
    </>
  );
};

export default Filter;
