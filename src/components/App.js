import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import PostList from '../containers/post-list';
import PostDetail from '../containers/post-detail';
import PostForm from '../components/post-form';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PostList />
          <PostDetail />
          <PostForm />
      </div>
    );
  }
}

export default App;
