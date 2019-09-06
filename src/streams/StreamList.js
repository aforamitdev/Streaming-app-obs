import React, { Component } from "react";
import { fetchStreams } from "../actions/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <div className="ui button negative">Delete</div>
        </div>
      );
    }
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      );
    }
  }
  renderList() {
    return this.props.streams.map(stream => {
      console.log(stream);
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camara"></i>
          <div className="content">
            {stream.title}{" "}
            <div className="description">{stream.descriptition}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
