const getIsLoggedIn = state => state.auth.getIsLoggedIn;
const getUsername = state => state.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
