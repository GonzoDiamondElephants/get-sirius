import React, { useState, useEffect} from 'react'

const ChatForm = () => {

 const [name, setName] = useState('');

 const onSubmit = (e)=> {
   e.preventDefault();
   alert(`Name from ChatFrom: ${name}`);
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Make it sparkle for Sian"
        onChange={(e)=> {
          setName(e.target.value)
        }}
        />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default ChatForm

