import React from 'react';
import ReactPlayer from 'react-player';
import '../static/css/player.css';
export class ResponsivePlayer extends React.Component {
    render(){

        return(
            
            <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            controls= {true}
      
            playing
            url= 'https://videosharingexampled.s3-ap-southeast-1.amazonaws.com/toto.mp4'
 
            />
            </div>
        )
    };
}