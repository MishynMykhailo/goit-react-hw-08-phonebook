const RegisterPage = () => {
  return (
    <>
      <h1>Login Page</h1>
      <form autoComplete="off">
        <label>
          Логин
          <input type="login" name="login" />
        </label>
        <label>
          Пароль
          <input type="password" name="password" />
        </label>
        <label>
          Почта
          <input type="email" name="email" />
        </label>
      </form>
    </>
  );
};
export default RegisterPage;
