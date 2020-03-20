import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { globalStyles } from '../styles/global'
import StartMatch from './StartMatch'
import Match from './Match'

const Stack = createStackNavigator();

const Home = ({ navigation }) => {

    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                backgroundColor: '#222',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Start Match"
                component={StartMatch}
                options={{
                    title: 'UFC App',
                }}
            />
            <Stack.Screen
                name="Match"
                component={Match}
                options={{
                    title: 'Match',
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default Home