import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Main Page
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;
