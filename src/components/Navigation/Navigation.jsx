import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import s from './Navigation.module.css';
const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Main Page
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};
export default Navigation;
