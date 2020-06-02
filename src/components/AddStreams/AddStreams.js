import React, { useState } from "react";
import "./AddStreams.css";

import { useStoreState, useStoreActions } from "easy-peasy";
const AddStreams = () => {
  const usernames = useStoreState((state) => state.usernames);
  const remove = useStoreActions((actions) => actions.remove);
  const add = useStoreActions((actions) => actions.add);
  const [newStream, setNewStream] = useState("");
  return (
    <div className="mainApp">
      <ul className="list-group">
        {usernames &&
          usernames.map((username) => {
            return (
              <button
                className="row-height list-group-item list-group-item-action list-group-item-dark"
                onClick={() => remove(username)}
                key={username}
              >
                {username}
                <span className="float-right">x</span>
              </button>
            );
          })}
      </ul>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add(newStream);
            setNewStream("");
          }}
          className="p-0 m-0"
        >
          <input
            type="text"
            className="row-height w-100 p-3 fixed-bottom"
            placeholder="Twitch Username"
            value={newStream}
            onChange={(e) => setNewStream(e.target.value)}
            disabled={usernames.length === 9 ? true : false}
          />
        </form>
      </div>
    </div>
  );
};
export default AddStreams;
