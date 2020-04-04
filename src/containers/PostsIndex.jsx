import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchPosts, deletePost } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleClick = (event) => {
    this.props.deletePost(event.target.id, () => {
      this.props.history.push('/');
    });
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div>
          <button
              className="btn btn-primary"
              onClick={this.handleClick}
              id={post.id}
            >
            Delete Post
            </button>
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            Let's write a post!
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
