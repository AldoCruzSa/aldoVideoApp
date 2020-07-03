import React from 'react'
import {
  View,
  Text,
  StyleSheet
}from 'react-native'

function VerticalSeparator(props) {
  return (
    <View style={styles.separator}>
    </View>
  )
}

const styles = StyleSheet.create ({
  separator: {
    borderTopWidth: 1,
    color: '#eaeaea'
  }
})

export default VerticalSeparator
