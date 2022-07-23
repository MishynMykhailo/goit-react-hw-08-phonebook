import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ currentTarget: { name, value } }) => {
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
    console.log(email, password);
    dispatch(logIn({ email, password }));
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
};
export default LoginPage;
