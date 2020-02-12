export default (state = null, { payload, type }) => {
  switch (type) {
    case "FETCH_CURRENT_USER":
      return payload.me || false;
    case "REGISTER_USER":
      return payload.signUp || false;
    case "LOGIN_USER":
      return payload.signIn || false;
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
};
