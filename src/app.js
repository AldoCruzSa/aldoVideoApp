import React, { Component } from 'react'
import {
  Text
}from 'react-native'
import { connect } from 'react-redux'

import Home from './screens/conteiners/home.js'
import Header from './sections/components/header.js'
import SuggestionList from './videos/conteiners/suggestion-list.js'
import Api from '../utils/api.js'
import CategoryList from './videos/conteiners/category-list.js'
import Movie from './screens/conteiners/movie.js'

class AppLayout extends Component {
  async componentDidMount() {
    const suggestionList = await Api.getSuggestion(10)
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    const categoryList = await Api.getMovies()
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <CategoryList />
        <SuggestionList />
      </Home>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout)
