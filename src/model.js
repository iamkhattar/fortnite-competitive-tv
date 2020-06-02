import { action } from "easy-peasy";

export default {
  usernames: ["tfue"],
  add: action(
    (state, username) => (state.usernames = [...state.usernames, username])
  ),
  remove: action(
    (state, username) =>
      (state.usernames = state.usernames.filter((uname) => uname !== username))
  ),
};
