import React from 'react';
import TextareaAutosize from 'react-textarea-autosize'
import './app.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  function add() {
    var element = document.getElementById('element')
    var test = document.createElement('h3')
    var texto = document.getElementById('texto')
    var text = document.createTextNode(`${texto.value}`)
    console.log(texto.value)
    test.appendChild(text)
    element.appendChild(test)
  }
  return (
    <div >
      <div className='chatbox'>
        <div className='chatbox-title'>
          <span>ChatBot</span>
        </div>
        <div id='element' className='chatbox-chat'>
          <div className='chatbox-bot'>
            <span>Olá, em que posso ajudar?</span>
          </div>
          <div className='chatbox-user'>
            <span>Olá, em que posso ajudar?</span>
          </div>
          <div className='chatbox-user'>
            <span>Olá</span>
          </div>
        </div>
        <div className='chatbox-send'>
          <TextareaAutosize className='chatbox-input' />
          <i className='fa fa-paper-plane fa-lg'></i>
        </div>
      </div>
    </div>

  );
}

export default App;
