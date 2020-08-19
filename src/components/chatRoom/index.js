import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from './chatlist';
import ChatBox from './chatbox';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: '',
      chats: [],
    };
  }

  componentDidMount() {
    const username = 'USERNAME';
    this.setState({ username });
    const pusher = new Pusher('86f0c0ffd8f31ee6eeba', {
      cluster: 'us3',
      encrypted: true,
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      this.setState({ chats: [...this.state.chats, data], text: '' });
    });
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e) {
    if (e.keyCode === 13) {
      const payload = {
        username: this.state.username,
        message: this.state.text,
      };
      axios.post('https://gitschooledalexaapp.herokuapp.com/message', payload);
    } else {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    return (
      <div className='App'>
          <p className="chatHead">What's on your mind?</p>
        <div className="chatContainer">
        <section>

          <ChatBox
            text={this.state.text}
            username={this.state.username}
            handleTextChange={this.handleTextChange}
          />
          <ChatList chats={this.state.chats} />
        </section>
        </div>
      </div>
    );
  }
}

export default Chat;
