import React, {useState, useCallback} from 'react';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function YoutubePlay(props){
  const [playing, setPlaying] = useState(false);
  const videoId = props;
  return (
    <View>
      <YoutubePlayer
        height={300}
        videoId={videoId.videoId}
        webViewProps={{androidLayerType: 'hardware'}}
      />

    </View>
  );
};
