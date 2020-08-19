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
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { username: nextProps.currentUser.name };
  }

  componentDidMount() {
    console.log('this props from index', this.props);
    const username = 'sian is amazing';
    this.setState({ username });
    const pusher = new Pusher('86f0c0ffd8f31ee6eeba', {
      cluster: 'us3',
      encrypted: true,
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      this.setState({ chats: [...this.state.chats, data] });
    });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    const payload = {
      username: this.state.username,
      message: this.state.text,
    };
    axios.post('https://gitschooledalexaapp.herokuapp.com/message', payload);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>MUGGLES FOR LIFE</h1>
        </header>
        <section>
          <ChatList chats={this.state.chats} />

          <ChatBox
            text={this.state.text}
            username={this.state.username}
            handleTextChange={this.handleTextChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
      </div>
    );
  }
}

export default Chat;
