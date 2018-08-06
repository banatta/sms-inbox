import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.item;

    this.toggleRead = data => {
      //Here is where we would change the state of the Message
      console.log("message %s read toggled", this.state.id);
    };
  };

  render() {
    return (
      <div className={"message " + (this.state.is_new ? "unread" : "read")} onClick={this.toggleRead}>
        <p> {this.state.text} </p> 
      </div>
    )
  }
}
export default Message;