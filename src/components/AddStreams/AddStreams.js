import React, { useState } from "react";
import "./AddStreams.css";

import { useStoreState, useStoreActions } from "easy-peasy";
const AddStreams = () => {
  const usernames = useStoreState((state) => state.usernames);
  const remove = useStoreActions((actions) => actions.remove);
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
          onSubmit={() => {
            setNewStream("");
          }}
        >
          <input
            type="text"
            className="row-height w-100 p-3 fixed-bottom"
            placeholder="Twitch Username"
            value={newStream}
            onChange={(e) => setNewStream(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
export default AddStreams;
