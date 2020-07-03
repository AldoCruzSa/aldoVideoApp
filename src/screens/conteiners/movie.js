import React, { Component } from 'react'

import MovieLayout from '../components/movie.js'
import Player from '../../player/conteiners/player.js'
import Header from '../../sections/components/header.js'
import Close from '../../sections/components/close.js'
import { connect } from 'react-redux'
import Details from '../../videos/components/details.js'

class Movie extends Component {
  closeVideo = () => {
    this.props.dispatch ({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      }
    })
  }
  render() {
    return (
      <MovieLayout>
        <Header>
          <Close
            onPress={this.closeVideo} />
        </Header>
        <Player />
        <Details {...this.props.movie} />
      </MovieLayout>
    )
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  }
}

export default connect (mapStateToProps)(Movie)
