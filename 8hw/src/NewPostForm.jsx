import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewPost } from './postsSlice';

const NewPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewPost({ title }));
    setTitle('');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewPostForm;