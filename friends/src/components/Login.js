import React from 'react';
import {connect} from 'react-redux';

import { fetchToken } from '../actions';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = evt => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  }
  login = evt => {
    evt.preventDefault();
    this.props.fetchToken(this.state);
  }

  render() {
    return(
      <div className="login">
        <form onSubmit={this.login}>
          <label>Username<br/>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>Password<br/>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    token: state.token,
    error: state.error
  }
}
export default connect(mapStateToProps,{fetchToken})(Login);