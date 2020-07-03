import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

function Header(props) {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.jpg')}
          style={styles.logo}
        />
        <View style={styles.right}>
          {props.children}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'cover'
  },
  container: {
    padding: 10,
    flexDirection: 'row'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default Header
