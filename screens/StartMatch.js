import React from 'react'

import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

const StartMatch = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Start Match</Text>
            <Button title="Fight!" onPress={ () => navigation.navigate('Match') } />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default StartMatch