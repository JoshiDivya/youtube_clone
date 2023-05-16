import { Paper, Typography } from '@mui/material'
import React from 'react'

const VideoDetails = ({ video }) => {
    if (!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: 'fill-content' }}>
                <iframe style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} frameBorder='1' height='400px' width='100%' src={videoSrc} title={video.snippet.title}></iframe>
            
            <Paper elevation={4} style={{ padding: '10px' }}>
                <Typography variant='h5'>{video.snippet.title}</Typography>
                <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
                <Typography variant='subtitle2'>{video.snippet.description}</Typography>
            </Paper>
            </Paper>
        </React.Fragment>
    )
}
export default VideoDetails;