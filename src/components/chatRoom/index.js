import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from './chatlist';
import ChatBox from './chatbox'
// function Chat(props) {
//   const [userName, setUserName] = useState('');
//   const [text, setText] = useState('');
//   const [message, setMessage] = useState([]);
//   const [chats, setChats] = useState([]);
//   const handleTextChange = useCallback((e) => {
//     if (e.keyCode === 13) {
//       const payload = {
//         userName: userName,
//         message: text
//       };
//       axios.post('http://localhost:5000/message', payload);
//     } else {
//       setText(e.target.value);
//     }
//   })
//   useEffect(() => {
//     const userName = window.prompt('Username: ', 'Anonymous');
//     setUserName({ userName });
//     const pusher = new Pusher('86f0c0ffd8f31ee6eeba', {
//       cluster: 'us3',
//       encrypted: true
//     });
//     const channel = pusher.subscribe('chat');
//     //This is breaking here. this was channel.bind.this
//     channel('message', data => {
//       console.log('in the channel: ', data);
//       setChats([...chats, data]);
//     });
//     handleTextChange();
//   }, [handleTextChange])
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="App-title">MUGGLES FOR LIFE</h1>
//       </header>
//       <section>
//         <ChatList chats={message} />
//         <ChatBox
//           text={text}
//           username={userName}
//           handleTextChange={handleTextChange}
//         />
//       </section>
//     </div>
//   );
// }
class Chat extends Component {
constructor(props) {
  super(props);
  this.state = {
    text: '',
    username: '',
    chats: []
  };
}
componentDidMount() {
  const username = window.prompt('Username: ', 'Anonymous');
  this.setState({ username });
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
handleTextChange(e) {
  if (e.keyCode === 13) {
    const payload = {
      username: this.state.username,
      message: this.state.text
    };
    axios.post('https://gitschooledalexaapp.herokuapp.com/message', payload);
  } else {
    this.setState({ text: e.target.value });
  }
}
   render() {
        return (
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