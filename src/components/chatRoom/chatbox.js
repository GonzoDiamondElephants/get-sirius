import React from 'react';

export default ({ text, username, handleTextChange, handleSubmit }) => {
  const sendChat = (e) => {
    e.preventDefault();
    e.target.reset();
    handleSubmit(e);
  };

  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <div className='chat'>
            <div className='col-xs-5 col-xs-offset-3'>
              <form onSubmit={sendChat}>
                <input
                  type='text'
                  placeholder='chat here...'
                  className='form-control'
                  onChange={handleTextChange}
                />
              </form>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
        <h4 className='greetings'>Hello, {username}</h4>
      </div>
    </div>
  );
};
