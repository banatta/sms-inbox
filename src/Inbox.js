import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message.js';
import messageData from './messageData.json';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = messageData;
  };

  componentDidMount() {
      this.scrollToBot();
  }

  componentDidUpdate() {
      this.scrollToBot();
  }

  scrollToBot() {
      ReactDOM.findDOMNode(this.refs.items).scrollTop = ReactDOM.findDOMNode(this.refs.items).scrollHeight;
  }

  render() {
    const {items} = this.state;
    const unreadCount = items.filter((item, i) => {return item.is_new;}).length;
    
    return (
      <div>
        <h2>Unread: {unreadCount}</h2>
        <div className="inbox" ref="items">
          {
            //Todo: Order Chronologically
            items.map((item, i) => 
              <Message key={i} item={item}/>
            )
          }
        </div>
      </div>
    );
  };



};

export default Inbox;
