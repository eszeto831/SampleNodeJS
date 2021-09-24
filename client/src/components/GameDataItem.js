import React from "react";

class GameDataItem extends React.Component {
  render() {
    return (
      <div className="gameDataItemDiv">
        {!this.props.loadingData || (this.props.loadingData && this.props.currentUserGameData) ? "" : "Loading"}
        <div className="gameDataDisplayDiv">
          {!this.props.currentUserGameData ? "" : "userid: "+this.props.currentUserGameData.userid}
          <br/>
          {!this.props.currentUserGameData ? "" : "level: "+this.props.currentUserGameData.level}
          <br/>
          {!this.props.currentUserGameData ? "" : "exp: "+this.props.currentUserGameData.exp}
          <br/>
          {!this.props.currentUserGameData ? "" : "credits: "+this.props.currentUserGameData.credits}
        </div>
      </div>
    );
  }
}

export default GameDataItem;