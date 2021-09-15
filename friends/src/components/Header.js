import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <h2>Auth Friends</h2>
      <nav>
        {
          !props.token
            ? <Link to="/login">Login</Link>
            : <Link to="/logout">Logout</Link>
        }
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  }
}
export default connect(mapStateToProps)(Header);
