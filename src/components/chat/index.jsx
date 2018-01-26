import React from "react";
import ChatHeader from "./header";
import Conversation from "./conversation";
import classes from "./style.css";

const Chat = () => (
  <div class="chatContainer">
    <div class="page page-full page-chat">
      <div class="tbox tbox-sm">
        {/* //right side */}
        <div class="tcol">
          {/* <!-- right side header --> */}
          <ChatHeader />
          {/* <!-- /right side header --> */}

          {/* <!-- right side body --> */}
          <div class="p-15">
            {/* <!-- chats --> */}
            <Conversation />
            {/* <!-- / chats --> */}
          </div>
          {/* <!-- /right side body --> */}
        </div>
        {/* ///right side */}
      </div>
    </div>
  </div>
);

export default Chat;
