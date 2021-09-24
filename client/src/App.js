// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GameDataItem from "./components/GameDataItem.js"
import UserListItem from "./components/UserListItem.js"

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="gameDataGridDisplayDiv">
          <div className="scrollListDiv">
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          <UserListItem/>
          </div>
          <GameDataItem/>
        </div>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;