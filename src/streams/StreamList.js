import React, { Component } from "react";
import { fetchStreams } from "../actions/index";
import { connect } from "react-redux";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return <div className="right floated content">edit</div>;
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camara"></i>
          <div className="content">
            {stream.title}{" "}
            <div className="description">{stream.descriptition}</div>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userID
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
