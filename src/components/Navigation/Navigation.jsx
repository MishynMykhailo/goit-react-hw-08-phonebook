import AuthNav from 'components/AuthNav/AuthNav';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        contacts
      </NavLink>
      <AuthNav />
    </nav>
  );
};
export default Navigation;
