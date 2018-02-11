import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="wrap" class="animsition">
        <div class="page page-core page-login">
          <div class="text-center">
            <h3 class="text-light text-white">
              <span class="text-lightred">M</span>INOVATE
            </h3>
          </div>

          <div class="container w-420 p-15 bg-white mt-40 text-center">
            <h2 class="text-light text-greensea">Log In</h2>
            <form name="form" class="form-validation mt-20" novalidate="">
              <div class="form-group">
                <input type="email" class="form-control underline-input" placeholder="Email" />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control underline-input"
                />
              </div>
              <div class="form-group text-left mt-20">
                <a href="index.html" class="btn btn-greensea b-0 br-2 mr-5">
                  Login
                </a>
                <label class="checkbox checkbox-custom-alt checkbox-custom-sm inline-block">
                  <input type="checkbox" />
                  <i /> Remember me
                </label>
                <a href="forgotpass.html" class="pull-right mt-10">
                  Forgot Password?
                </a>
              </div>
            </form>

            <hr class="b-3x" />

            <div class="social-login text-left">
              <ul class="pull-right list-unstyled list-inline">
                <li class="p-0">
                  <a class="btn btn-sm btn-primary b-0 btn-rounded-20" href="javascript:;">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="p-0">
                  <a class="btn btn-sm btn-info b-0 btn-rounded-20" href="javascript:;">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="p-0">
                  <a class="btn btn-sm btn-lightred b-0 btn-rounded-20" href="javascript:;">
                    <i class="fa fa-google-plus" />
                  </a>
                </li>
                <li class="p-0">
                  <a class="btn btn-sm btn-primary b-0 btn-rounded-20" href="javascript:;">
                    <i class="fa fa-linkedin" />
                  </a>
                </li>
              </ul>

              <h5>Or login with</h5>
            </div>

            <div class="bg-slategray lt wrap-reset mt-40">
              <p class="m-0">
                <a href="signup.html" class="text-uppercase">
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
