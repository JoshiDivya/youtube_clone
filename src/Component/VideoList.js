import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem.js'


const VideoList = ({videos,onVideoSelect}) => {
const ListOfVideo = videos.map((video,id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}></VideoItem> )

return (
<Grid container spacing={4} >
    {ListOfVideo}
</Grid>
)

}

export default VideoList;