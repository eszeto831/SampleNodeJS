import React from "react";

class UserListItem extends React.Component {
  render() {
    return (
      <button className="userListItemDiv" onClick={this.props.onClick}>
        {this.props.username}
      </button>
    );
  }
}

export default UserListItem;