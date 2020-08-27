const getIsAuthenticated = state => state.auth.isAuthenticated;
const getError = state => state.auth.error;
const getUsername = state => state.auth.user.name;

export default { getIsAuthenticated, getUsername, getError };
