import { action } from "easy-peasy";

export default {
  usernames: [
    "tfue1",
    "tfue2",
    "tfue3",
    "tfue4",
    "tfue5",
    "tfue6",
    "tfue7",
    "tfue8",
    "tfue9",
  ],
  add: action((state, username) => {
    state.usernames = [...state.usernames, username];
  }),
  remove: action((state, username) => {
    state.usernames = state.usernames.filter((uname) => uname !== username);
  }),
};
