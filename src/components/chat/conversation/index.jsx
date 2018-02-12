import React from 'react'

const Conversation = () => (
  <ul className="chats p-0">
    <li className="text-center">
      <a href="javascript:;">Load More...</a>
    </li>
    <li className="in">
      <div className="media">
        <div className="pull-left thumb thumb-sm">
          <img className="media-object img-circle" src="assets/images/random-avatar1.jpg" alt="" />
        </div>
        <div className="media-body">
          <p className="media-heading">
            <a href="#" className="name">
              Wood Walton{' '}
            </a>
            <span className="datetime">at 12.10.2014</span>
          </p>
          <span className="body">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa.
          </span>
        </div>
      </div>
    </li>
    <li className="out">
      <div className="media">
        <div className="pull-right thumb thumb-sm">
          <img className="media-object img-circle" src="assets/images/profile-photo.jpg" alt="" />
        </div>
        <div className="media-body">
          <p className="media-heading">
            <a href="#" className="name">
              You{' '}
            </a>
            <span className="datetime">2 hours ago</span>
          </p>
          <span className="body">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim.
          </span>
        </div>
      </div>
    </li>
    <li className="in">
      <div className="media">
        <div className="pull-left thumb thumb-sm">
          <img className="media-object img-circle" src="assets/images/random-avatar1.jpg" alt="" />
        </div>
        <div className="media-body">
          <p className="media-heading">
            <a href="#" className="name">
              Wood Walton{' '}
            </a>
            <span className="datetime">2 hours ago</span>
          </p>
          <span className="body">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
            pretium.
          </span>
        </div>
      </div>
    </li>
    <li className="out">
      <div className="media">
        <div className="pull-right thumb thumb-sm">
          <img className="media-object img-circle" src="assets/images/profile-photo.jpg" alt="" />
        </div>
        <div className="media-body">
          <p className="media-heading">
            <a href="#" className="name">
              You{' '}
            </a>
            <span className="datetime">1 hours ago</span>
          </p>
          <span className="body">
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          </span>
        </div>
      </div>
    </li>
    <li className="in">
      <div className="media">
        <div className="pull-left thumb thumb-sm">
          <img className="media-object img-circle" src="assets/images/random-avatar1.jpg" alt="" />
        </div>
        <div className="media-body">
          <p className="media-heading">
            <a href="#" className="name">
              Wood Walton{' '}
            </a>
            <span className="datetime">53 minutes ago</span>
          </p>
          <span className="body">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
            ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue.
          </span>
        </div>
      </div>
    </li>
    <li className="out">
      <div className="media">
        <div className="pull-right thumb thumb-sm">
          <img className="media-object img-circle" src="assets/images/profile-photo.jpg" alt="" />
        </div>
        <div className="media-body">
          <p className="media-heading">
            <a href="#" className="name">
              You{' '}
            </a>
            <span className="datetime">40 minutes ago</span>
          </p>
          <span className="body">
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
            tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
            sed ipsum.
          </span>
        </div>
      </div>
    </li>
    <li className="out">
      <div className="media">
        <div className="pull-right thumb thumb-sm">
          <img className="media-object img-circle" src="assets/images/profile-photo.jpg" alt="" />
        </div>
        <div className="media-body">
          <p className="media-heading">
            <a href="#" className="name">
              You{' '}
            </a>
            <span className="datetime">39 minutes ago</span>
          </p>
          <span className="body">
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
            ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
            ante.
          </span>
        </div>
      </div>
    </li>
    <li className="out">
      <div className="media">
        <div className="pull-right thumb thumb-sm">
          <img className="media-object img-circle" src="assets/images/profile-photo.jpg" alt="" />
        </div>
        <div className="media-body">
          <div>
            <div
              className="p-15 text-left bg-white text-md"
              contenteditable="true"
              style={{ 'min-height': '100px' }}
            />
            <div className="panel-footer text-left">
              <button className="btn btn-link text-default pull-right">
                <i className="fa fa-trash-o" />
              </button>
              <button className="btn btn-greensea btn-ef btn-ef-7 btn-ef-7b b-0 br-2">
                <i className="fa fa-envelope" /> Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
)

export default Conversation
