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
    const timestamp = new Date(this.state.created_at).toLocaleString();

    return (
      <div className="message" onClick={this.toggleRead}>
        <p>{sentFrom} to {sentTo}</p>
        <p className={readStatus}> {this.state.text} </p>
        <p className="timestamp">{timestamp}</p>
      </div>
    )
  }
}
export default Message;