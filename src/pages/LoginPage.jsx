import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Почта
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label>
          Пароль
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </>
  );
}
