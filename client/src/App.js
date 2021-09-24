// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GameDataItem from "./components/GameDataItem.js"
import UserListItem from "./components/UserListItem.js"

function App() {
  const [data, setData] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const [currentUserGameData, setCurrentUserGameData] = React.useState(null);
  const [currentUserGameDataLoading, setCurrentUserGameDataLoading] = React.useState(false);

  const api_url = "https://nodejstest-326900.uc.r.appspot.com";

  React.useEffect(() => {
    fetch(api_url+"/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch(api_url+"/api/users/list")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className="gameDataGridDisplayDiv">
          <div className="gameDataHeader">Users</div>
          <div className="gameDataHeader">Game Data</div>
          <div className="scrollListDiv">
            {!users ? " " : 
              users.map((value, index) => {
                return <UserListItem userid={value.userid} username={value.username} onClick={() => {
                  setCurrentUserGameData(null)
                  setCurrentUserGameDataLoading(true);
                  fetch(api_url+"/api/gamedata/"+value.userid)
                    .then((res) => res.json())
                    .then((data) => setCurrentUserGameData(data.data[0]));
                }
              }/>
              })
            }
          </div>
          <GameDataItem loadingData={currentUserGameDataLoading} currentUserGameData={currentUserGameData}/>
        </div>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;