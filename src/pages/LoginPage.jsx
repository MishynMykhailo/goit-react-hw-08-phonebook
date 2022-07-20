const LoginPage = () => {
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
      </form>
    </>
  );
};
export default LoginPage;
