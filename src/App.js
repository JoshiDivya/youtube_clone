import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SearchBar from './Component/SearchBar';
import VideoDetails from './Component/VideoDetails';
import VideoList from './Component/VideoList';
import youtube from './api/youtube';
import { Grid } from '@mui/material';

 
const  key='AIzaSyAAZmIyyctj9u56E-Czcq9ePvg8GvA8eyw'
export default class App extends Component {
    state= { videos : [],selectedVideo: null};


    componentDidMount(){
        this.onTermSubmit('nature');
    }

    onTermSubmit = async term => {
        const response=await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 30,
            key: key
          }
        });
        this.setState({videos: response.data.items,selectedVideo:response.data.items[4]
        })
    }

 onVideoSelect =(video)=>{
   this.setState({selectedVideo:video});
 
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
               <VideoDetails video={selectedVideo}  />
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
