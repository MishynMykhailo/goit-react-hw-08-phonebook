import { useSelector, useDispatch } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  console.log(name);
  return (
    <div>
      <h2>yes</h2>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      {/* <span>Welcome, {name}</span> */}
      {/* <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      ></button> */}
    </div>
  );
}
