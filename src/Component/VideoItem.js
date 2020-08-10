import React from 'react'
import { Grid ,Paper, Typography} from '@material-ui/core'

const VideoItem= ({video,onVideoSelect})=> {
return(
    <Grid item xs={12}>
<Paper style={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} elevation={3} variant= "outlined" onClick={()=>onVideoSelect(video)}>
    <img style={{marginRight:'30px'}} src= {video.snippet.thumbnails.medium.url} alt="thumbnail"></img>
</Paper>
<Typography variant= 'subtitle1' style={{cursor:'pointer'}} ><b onClick={()=>{onVideoSelect(video)}}>{video.snippet.title}</b></Typography>
    </Grid>
)

}
export default VideoItem;