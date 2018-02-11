import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from 'state/auth/actions'

const mapStateToProps = state => state.auth
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

class Login extends React.Component {
  componentWillReceiveProps(newProps) {
    if (newProps.user) {
      this.props.history.push('/')
    }
  }

  submit = e => {
    e.preventDefault()
    this.props.login()
  }

  render() {
    return (
      <div id="wrap" className="animsition">
        <div className="page page-core page-login">
          <div className="text-center">
            <h3 className="text-light text-white">
              <span className="text-lightred">M</span>INOVATE
            </h3>
          </div>

          <div className="container w-420 p-15 bg-white mt-40 text-center">
            <h2 className="text-light text-greensea">Log In</h2>
            <form onSubmit={this.submit} name="form" className="form-validation mt-20">
              <div className="form-group">
                <input type="email" className="form-control underline-input" placeholder="Email" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control underline-input"
                />
              </div>
              <div className="form-group text-left mt-20">
                <button type="submit" className="btn btn-greensea b-0 br-2 mr-5">
                  Login
                </button>
                <label className="checkbox checkbox-custom-alt checkbox-custom-sm inline-block">
                  <input type="checkbox" />
                  <i /> Remember me
                </label>
                <a href="forgotpass.html" className="pull-right mt-10">
                  Forgot Password?
                </a>
              </div>
            </form>

            <hr className="b-3x" />

            <div className="social-login text-left">
              <ul className="pull-right list-unstyled list-inline">
                <li className="p-0">
                  <a className="btn btn-sm btn-primary b-0 btn-rounded-20" href="javascript:;">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="p-0">
                  <a className="btn btn-sm btn-info b-0 btn-rounded-20" href="javascript:;">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="p-0">
                  <a className="btn btn-sm btn-lightred b-0 btn-rounded-20" href="javascript:;">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li className="p-0">
                  <a className="btn btn-sm btn-primary b-0 btn-rounded-20" href="javascript:;">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>

              <h5>Or login with</h5>
            </div>

            <div className="bg-slategray lt wrap-reset mt-40">
              <p className="m-0">
                <a href="signup.html" className="text-uppercase">
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
