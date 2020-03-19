import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'

const Header = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>UFC APP</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: 'darkslateblue',
        alignContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    }
  })
  
  export default Header;
  