import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions/index";

class GoogleAuth extends React.Component {
  state = {
    isSignIn: null
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "712918829401-3c6a24t7qj0tkpdv3ed2k86ujpt5ubqq.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignIn: this.auth.isSignedIn.get() });
        });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthBtn() {
    if (this.state.GoogleAuth === null) {
      return null;
    } else if (this.state.isSignIn) {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);
