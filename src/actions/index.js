export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';
export const DELETE_POST = 'DELETE_POST';

export function deletePost(postId, callback) {
  const request = fetch(`http://reduxblog.herokuapp.com/api/posts/${postId}?key=bri-post`, {
    method: 'DELETE'
  }).then(callback);

  return {
    type: DELETE_POST,
    payload: request
  };
}

export function createPost(body, callback) {
  const request = fetch('http://reduxblog.herokuapp.com/api/posts?key=bri-post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  console.log(request);
  return {
    type: POST_CREATED,
    payload: request
  };
}

export function fetchPost(id) {
  const promise = fetch(`http://reduxblog.herokuapp.com/api/${id}?key=bri-post`)
    .then(response => response.json());

  return {
    type: FETCH_POST,
    payload: promise
  };
}

export function fetchPosts() {
  const promise = fetch('http://reduxblog.herokuapp.com/api/posts?key=bri-post')
    .then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  };
}
