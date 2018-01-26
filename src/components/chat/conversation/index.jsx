import React from "react";

const Conversation = () => (
  <ul class="chats p-0">
    <li class="text-center">
      <a href="javascript:;">Load More...</a>
    </li>
    <li class="conversation-divider">
      <span>Conversation started at 26.03.2014</span>
    </li>
    <li class="in">
      <div class="media">
        <div class="pull-left thumb thumb-sm">
          <img
            class="media-object img-circle"
            src="assets/images/random-avatar1.jpg"
            alt=""
          />
        </div>
        <div class="media-body">
          <p class="media-heading">
            <a href="#" class="name">
              Wood Walton{" "}
            </a>
            <span class="datetime">at 12.10.2014</span>
          </p>
          <span class="body">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </span>
        </div>
      </div>
    </li>
    <li class="conversation-divider">
      <span>Today</span>
    </li>
    <li class="out">
      <div class="media">
        <div class="pull-right thumb thumb-sm">
          <img
            class="media-object img-circle"
            src="assets/images/profile-photo.jpg"
            alt=""
          />
        </div>
        <div class="media-body">
          <p class="media-heading">
            <a href="#" class="name">
              You{" "}
            </a>
            <span class="datetime">2 hours ago</span>
          </p>
          <span class="body">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </span>
        </div>
      </div>
    </li>
    <li class="in">
      <div class="media">
        <div class="pull-left thumb thumb-sm">
          <img
            class="media-object img-circle"
            src="assets/images/random-avatar1.jpg"
            alt=""
          />
        </div>
        <div class="media-body">
          <p class="media-heading">
            <a href="#" class="name">
              Wood Walton{" "}
            </a>
            <span class="datetime">2 hours ago</span>
          </p>
          <span class="body">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium.
          </span>
        </div>
      </div>
    </li>
    <li class="out">
      <div class="media">
        <div class="pull-right thumb thumb-sm">
          <img
            class="media-object img-circle"
            src="assets/images/profile-photo.jpg"
            alt=""
          />
        </div>
        <div class="media-body">
          <p class="media-heading">
            <a href="#" class="name">
              You{" "}
            </a>
            <span class="datetime">1 hours ago</span>
          </p>
          <span class="body">
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim.
          </span>
        </div>
      </div>
    </li>
    <li class="in">
      <div class="media">
        <div class="pull-left thumb thumb-sm">
          <img
            class="media-object img-circle"
            src="assets/images/random-avatar1.jpg"
            alt=""
          />
        </div>
        <div class="media-body">
          <p class="media-heading">
            <a href="#" class="name">
              Wood Walton{" "}
            </a>
            <span class="datetime">53 minutes ago</span>
          </p>
          <span class="body">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue.
          </span>
        </div>
      </div>
    </li>
    <li class="out">
      <div class="media">
        <div class="pull-right thumb thumb-sm">
          <img
            class="media-object img-circle"
            src="assets/images/profile-photo.jpg"
            alt=""
          />
        </div>
        <div class="media-body">
          <p class="media-heading">
            <a href="#" class="name">
              You{" "}
            </a>
            <span class="datetime">40 minutes ago</span>
          </p>
          <span class="body">
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing sem neque sed ipsum.
          </span>
        </div>
      </div>
    </li>
    <li class="out">
      <div class="media">
        <div class="pull-right thumb thumb-sm">
          <img
            class="media-object img-circle"
            src="assets/images/profile-photo.jpg"
            alt=""
          />
        </div>
        <div class="media-body">
          <p class="media-heading">
            <a href="#" class="name">
              You{" "}
            </a>
            <span class="datetime">39 minutes ago</span>
          </p>
          <span class="body">
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante.
          </span>
        </div>
      </div>
    </li>
    <li class="out">
      <div class="media">
        <div class="pull-right thumb thumb-sm">
          <img
            class="media-object img-circle"
            src="assets/images/profile-photo.jpg"
            alt=""
          />
        </div>
        <div class="media-body">
          <div>
            <div
              class="p-15 text-left bg-white text-md"
              contenteditable="true"
              style={{ "min-height": "100px" }}
            />
            <div class="panel-footer text-left">
              <button class="btn btn-link text-default pull-right">
                <i class="fa fa-trash-o" />
              </button>
              <button class="btn btn-greensea btn-ef btn-ef-7 btn-ef-7b b-0 br-2">
                <i class="fa fa-envelope" /> Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
);

export default Conversation;
