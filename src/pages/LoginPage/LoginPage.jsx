import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('kotik114@gmail.com');
  const [password, setPassword] = useState('kotik114');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enter</button>
      </form>
      <Link to="/register">Don't have an account? Sign Up</Link>
    </div>
  );
}
