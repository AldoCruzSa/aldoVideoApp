import React, { Component } from 'react'
import Video from 'react-native-video'
import {
  StyleSheet,
  ActivityIndicator,
  Text
}from 'react-native'
import Layout from '../components/layout.js'
import ControlLayout from '../components/control-layout.js'
import PlayPause from '../components/play-pause.js'

class Player extends Component {
  state = {
    loading: true,
    paused: false,
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }
  onLoad = () => {
    this.setState({
      loading: false
    })
  }
  playPlause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  render() {
    return(
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
            style={styles.video}
            resizeMode="cover"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={
          <ActivityIndicator color="red"/>
        }
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPlause}
              paused={this.state.paused}
            />
          <Text>progress bar</Text>
          <Text>time left</Text>
          <Text>fullscreen</Text>
          </ControlLayout>
        }
      >
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
})

export default Player
