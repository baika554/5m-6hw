import React from 'react';
import { Provider } from 'react-redux';
import PostsList from './PostsList';
import store from './store';
import NewPostForm from './NewPostForm';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>Posts App</h1>
        <div className="content">
          <PostsList />
          <NewPostForm />
        </div>
      </div>
    </Provider>
  );
}

export default App;
