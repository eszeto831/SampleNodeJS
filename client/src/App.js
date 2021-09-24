// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GameDataItem from "./components/GameDataItem.js"
import UserListItem from "./components/UserListItem.js"

function App() {
  const [data, setData] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const [currentUserId, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/api/users/list")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className="gameDataGridDisplayDiv">
          <div className="scrollListDiv">
            {!users ? "" : 
              users.map((value, index) => {
                return <UserListItem userid={value.userid} username={value.username} onClick={() => setCurrentUser(value.userid)}/>
              })
            }
          </div>
          <GameDataItem userid={currentUserId}/>
        </div>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;