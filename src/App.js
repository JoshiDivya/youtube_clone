import React from 'react';

import {  Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';

function App() {
 state={
   videos:[],
   selectedVideo: null,
    }

  componentDidMount(){
  this.handleSubmit('motivation')
}

  onVideoSelect = (video) => {
      this.setState({selectedVideo:video});
    }


handleSubmit = async (searchTerm) => {
const response = await youtube.get("search", {
  params:{
  part: 'snippet',
    maxResults: 5,
    key:'AIzaSyBbHsl4F6hGgW5Sy05AW4Hb7OD77c0PQc8',
    q: searchTerm,
  }
  });
this.setState({videos:response.data.items, selectedVideo: response.data.items[0] });

}

render() {
const {selectedVideo, videos} = this.state;
    return (
      <Grid style={{ justifyContent: "center", overflow:'hidden'}} container >
      <Grid item xs ={12}>
      <Grid container spacing={5}>
          <Grid item xs={12}>
           <SearchBar onFormSubmit={this.handleSubmit} />
           </Grid>
          <Grid item xs={8}>
           <VideoDetail video={selectedVideo}  />
            </Grid>
             <Grid item xs={4}>
             <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
              </Grid>
  </Grid>
  </Grid>
  </Grid>

    )
  }
}

export default App;
