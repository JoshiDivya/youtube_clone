import React from 'react'
import VideoItem from './VideoItem.js'
import { Grid } from '@mui/material'


const VideoList = ({videos,onVideoSelect}) => {
const ListOfVideo = videos.map((video,id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}></VideoItem> )

return (
<Grid container spacing={4} >
    {ListOfVideo}
</Grid>
)

}

export default VideoList;