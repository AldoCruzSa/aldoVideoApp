import React from 'react'
import{
  View,
  Text,
  Image,
  StyleSheet
}from 'react-native'

function Details(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Image style={styles.cover} source={{uri: props.medium_cover_image}} />
      <Text>{props.description_full}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cover: {
    width: 125,
    height: 190
  }
})

export default Details
