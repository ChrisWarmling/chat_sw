import React from 'react';
import TextareaAutosize from 'react-textarea-autosize'
import './app.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  function sendMsg() {
    var msg = document.getElementById('msg')
    var textMsg = document.createTextNode(`${msg.value}`)
    if(msg.value === '') {alert('Escreva Algo')}
    else{
    var element = document.getElementById('element')
    var spanMsg = document.createElement('span')
    console.log(msg.value)
    spanMsg.appendChild(textMsg)
    element.appendChild(spanMsg)}
    msg.value = ''
    var rolar = document.getElementById("chatbox-scroll");
      rolar.scrollTop = rolar.scrollHeight;
  }
  return (
    <div >
      <div className='chatbox'>
        <div className='chatbox-title'>
          <span>ChatBot</span>
        </div>
        <div id='chatbox-scroll' className='chatbox-chat'>
          <div className='chatbox-bot'>
            <span>Olá, em que posso ajudar?</span>
          </div>
          <div id='element' className='chatbox-user'>
          </div>
        </div>
        <div className='chatbox-send'>
          <TextareaAutosize id='msg' className='chatbox-input' />
          <i className={`fa fa-paper-plane fa-lg`} onClick={sendMsg}></i>
        </div>
      </div>
    </div>

  );
}

export default App;
