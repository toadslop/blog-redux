/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from '../actions/index';

class PostShow extends Component {
  componentDidMount() {
    console.log("post from did mount", this.props.post);
    if (!this.props.post) {
      console.log("in the if");
      this.props.fetchPost(this.props.match.params.id);
    }
  }

  handleClick = (event) => {
    this.props.deletePost(event.target.id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="post-item">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
        <div className="show-buttons">
          <Link className="show-button" to="/">
            Back
          </Link>
          <p
            onClick={this.handleClick}
            id={post.id}
            className="show-button"
          >
            Delete
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const post = state.posts.find(p => p.id === idFromUrl);
  console.log("id from url", idFromUrl);
  console.log("posts", state.posts);
  console.log("post from find", post);
  return { post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
