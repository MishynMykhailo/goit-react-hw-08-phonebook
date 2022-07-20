import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';
const AuthNav = () => {
  return (
    <>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        register
      </NavLink>
    </>
  );
};
export default AuthNav;
