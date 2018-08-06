import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.item;

    //Here is where we would change the state of the Message  
    this.toggleRead = data => {
      console.log("message %s read toggled", this.state.id);
    };
  };

  render() {
    const sentFrom = this.state.from;
    const sentTo = this.state.to.map(to => to.number).join(", ");
    const readStatus = (this.state.is_new ? "unread" : "read");

    return (
      <div className={"message " + readStatus} onClick={this.toggleRead}>
        <p>{sentFrom} to {sentTo}: {this.state.text} </p> 
      </div>
    )
  }
}
export default Message;