import './App.css';
import React, {Component} from 'react';
import YTSearch from 'youtube-search-api';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: []
    }
    this.videoSearch('music');
  }
  videoSearch(searchTerm) {
    YTSearch({key: `${process.env.REACT_APP_API_KEY}`, term: searchTerm}, (data) => {
      console.log(data);
      this.setState({
        videos: data
      })
    })
  }
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    )
  };
};

export default App;
