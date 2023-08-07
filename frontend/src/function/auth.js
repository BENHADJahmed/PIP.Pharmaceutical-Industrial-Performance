// auth.js

let isLoggedIn = false;
let userRole = '';

export const isAuthenticated = () => {

  return isLoggedIn;
};

export const login = (role) => {

  isLoggedIn = true;
  userRole = role;
};

export const logout = () => {

  isLoggedIn = false;
  userRole = '';
};
