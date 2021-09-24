import React from "react";

class GameDataItem extends React.Component {
  render() {
    return (
      <div className="gameDataItemDiv">
        {!this.props.userid ? "" : "userid: "+this.props.userid}
      </div>
    );
  }
}

export default GameDataItem;