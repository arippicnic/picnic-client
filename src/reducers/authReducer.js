
export default (state = null, { payload, type }) => {
  switch (type) {
    case "LOGIN_USER":
      return payload.signIn || false;
    case 'LOGOUT_USER':
      return null
    default:
      return state;
  }
};
