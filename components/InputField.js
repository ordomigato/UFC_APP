import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'

const InputField = ({ }) => {

    const [text, setText] = useState('')

    const onChangeA = (textValue) => setText(textValue)
    const onChangeB = (textValue) => setText(textValue)

    return (
        <View>
            <TextInput 
                style={styles.textInput}
                placeholder='Fighter A'
                onChangeText={onChangeA}
            />
            <TextInput 
                style={styles.textInput}
                placeholder='Fighter B'
                onChangeText={onChangeB}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        ...globalStyles.textInput,
    }
})

export default InputField