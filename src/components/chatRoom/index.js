import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from './chatlist';
import ChatBox from './chatbox'
import { withAuth0, useAuth0 } from '@auth0/auth0-react';



class Chat extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    showBody: false,
    text: '',
    username: '',
    chats: []
  };
}
componentDidMount() {
  const { user } = withAuth0();
  if (user) this.setState({showBody: true});
  console.log('inside componet did mount on chatroom index.js', this.state.username)
  // this.whenAuthenticated()
  // const username = window.prompt('Username: ', 'Anonymous');
  // this.setState({ username: this.state.name });
  const pusher = new Pusher('86f0c0ffd8f31ee6eeba', {
    cluster: 'us3',
    encrypted: true
  });
  const channel = pusher.subscribe('chat');
  channel.bind('message', data => {
    this.setState({ chats: [...this.state.chats, data], test: '' });
  });
  this.handleTextChange = this.handleTextChange.bind(this);
}

// whenAuthenticated(){
//   console.log('inside whenAuthtcated in chatroom indexed.js')
//   const showBody = this.props.auth0;
//   if(showBody) this.setState({showBody: true});
//   console.log('inside whenAuthtcated in chatroom indexed.js secdon time', showBody)
// }

handleTextChange(e) {
  if (e.keyCode === 13) {
    const payload = {
      username: this.state.username,
      message: this.state.text
    };
    axios.post('http://localhost:5000/message', payload);
  } else {
    this.setState({ text: e.target.value });
  }
}

   render() {
    //  console.log('inside render', this.state.username)
    //  const { user } = this.props.auth0;
    //  console.log('inside render of chatroom index.js this.props', this.props, 'this.state', this.state);
        return(
           this.state.showBody && 
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">MUGGLES FOR LIFE</h1>
            </header>
            <section>
              <ChatList chats={this.state.chats} />
              <ChatBox
                text={this.state.text}
                username={this.state.username}
                handleTextChange={this.handleTextChange}
              />
            </section>
          </div>
        );
      }
}

export default Chat;