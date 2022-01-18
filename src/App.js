import './App.css';
import React, {Component} from 'react';
// import * as YTSearchAction from './actions/yt_search_action'
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar.js';
import YTSearch from 'youtube-api-search';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
    this.videoSearch('music');
  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
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
        <VideoList videos={this.state.videos} />
      </div>
    )
  };
};

export default App;
