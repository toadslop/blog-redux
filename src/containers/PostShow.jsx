/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';

class PostShow extends Component {
  render() {
    const { post } = this.props;
    if (!post) {
      this.props.fetchPost(this.props.match.params.id);
    }
    return (
      <div>
        <div className="post-item">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const post = state.posts.find(p => p.id === idFromUrl);
  return { post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
