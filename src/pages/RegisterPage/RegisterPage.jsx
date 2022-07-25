import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      Notify.failure('Fill in all the fields');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            alignItem: 'center',
            marginTop: 3,
            marginBottom: 3,
            width: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <TextField
            required
            autoFocus
            type="name"
            name="name"
            value={name}
            label="Name"
            placeholder="Email"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            sx={{ marginBottom: 2, marginTop: 2 }}
            required
            type="email"
            name="email"
            value={email}
            label="Email address"
            placeholder="Email"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            required
            type="password"
            name="password"
            value={password}
            label="Password"
            placeholder="Password"
            variant="outlined"
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mb: 2, mt: 3 }}
          >
            Login
          </Button>

          <Link margin="normal" to="/login">
            Already have an account? Sign in
          </Link>
        </Box>
      </Box>
    </>
  );
}
