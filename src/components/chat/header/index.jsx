import React from 'react'

const ChatHeader = () => (
  <div className="p-15 bg-white b-b">
    <div className="btn-toolbar pull-right">
      <div className="btn-group">
        <button className="btn btn-default btn-sm br-2">
          <i className="fa fa-plus" /> New Message
        </button>
      </div>
      <div className="btn-group">
        <button className="btn btn-default btn-sm br-2">
          <i className="fa fa-cog" /> Settings
        </button>
      </div>
      <div className="btn-group">
        <button className="btn btn-default btn-sm br-2">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>

    <h3 className="custom-font m-0 mr-5 inline-block">Wood Walton</h3>
  </div>
)

export default ChatHeader
