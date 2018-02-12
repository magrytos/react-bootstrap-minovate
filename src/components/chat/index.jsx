import React from 'react'
import ChatHeader from './header'
import Conversation from './conversation'
import './style.css'

const Chat = () => (
  <div className="chatContainer">
    <div className="page page-full page-chat">
      <div className="tbox tbox-sm">
        <div className="tcol">
          {/* <ChatHeader /> */}
          <div className="p-15">
            <Conversation />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Chat
