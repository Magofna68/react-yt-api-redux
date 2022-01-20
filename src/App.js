import './App.css';
import React, {Component} from 'react';
// import * as YTSearchAction from './actions/yt_search_action'
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar.js';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    }
    this.videoSearch('nothing,nowhere.');
  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0],

      })
    })
  }
  render () {
    return (
      <div>
        <h2>Youtube API Project</h2>
        <h5>Brandon Magofna</h5>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
          videos={this.state.videos} 
        />
      </div>
    )
  };
};

export default App;
