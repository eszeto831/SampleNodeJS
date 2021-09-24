import React from "react";

class GameDataItem extends React.Component {
  render() {
    return (
      <div className="gameDataItemDiv">
      	{!this.props.loadingData || (this.props.loadingData && this.props.currentUserGameData) ? "" : "Loading"}
        {!this.props.currentUserGameData ? "" : 
        	"userid: "+this.props.currentUserGameData.userid
        	+"<br>"+
        	"level: "+this.props.currentUserGameData.level
        	+"<br>"+
        	"exp: "+this.props.currentUserGameData.exp
        	+"<br>"+
        	"credits: "+this.props.currentUserGameData.credits
    	}
      </div>
    );
  }
}

export default GameDataItem;