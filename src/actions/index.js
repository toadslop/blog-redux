export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

export function createPost(body) {
  const request = fetch('http://reduxblog.herokuapp.com/api/?key=bri-post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json/' },
    body: JSON.stringify(body)
  }).then(response => response.json());

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
