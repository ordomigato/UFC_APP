import 'react-native-gesture-handler' //MUST BE AT TOP
import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Fix for uuid in react-native
import 'react-native-get-random-values'
import { uuid } from 'uuidv4'

import Home from './screens/Home'
import About from './screens/About'


const App = () => {

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({

})

export default App;
