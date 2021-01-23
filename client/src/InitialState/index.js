const initialState = {
  loggedIn: {
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
  },
};

export default initialState;
