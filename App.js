import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

//Fix for uuid in react-native
import 'react-native-get-random-values'
import { uuid } from 'uuidv4'


import Header from './components/Header'

const App = () => {

  const [menuItems, setMenuItems] = useState([
    { name: 'Item 1', id: uuid() },
    { name: 'Item 2', id: uuid() },
    { name: 'Item 3', id: uuid() },
    { name: 'Item 4', id: uuid() },
  ])

  return (
    <View>
      <Header />
      <FlatList
        keyExtractor={(item) => item.id}
        data={ menuItems }
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default App;
