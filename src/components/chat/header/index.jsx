import React from "react";

const ChatHeader = () => (
  <div class="p-15 bg-white b-b">
    <div class="btn-toolbar pull-right">
      <div class="btn-group">
        <button class="btn btn-default btn-sm br-2">
          <i class="fa fa-plus" /> New Message
        </button>
      </div>
      <div class="btn-group">
        <button class="btn btn-default btn-sm br-2">
          <i class="fa fa-cog" /> Settings
        </button>
      </div>
      <div class="btn-group">
        <button class="btn btn-default btn-sm br-2">
          <i class="fa fa-search" />
        </button>
      </div>
    </div>

    <h3 class="custom-font m-0 mr-5 inline-block">Wood Walton</h3>
  </div>
);

export default ChatHeader;
