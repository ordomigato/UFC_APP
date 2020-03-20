import React from 'react'

import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'


const AboutScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AboutScreen