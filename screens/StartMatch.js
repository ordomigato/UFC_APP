import React, { useState } from 'react'

import { StyleSheet, View, Modal, Button, ImageBackground } from 'react-native'
import { globalStyles } from '../styles/global'
import InputField from '../components/InputField'
import backgroundImage from '../assets/img/background-image.jpg'

const StartMatch = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const [fighters, setFighters] = useState({
        fighterA: {
            name: ''
        },
        fighterB: {
            name: ''
        }
    })

    const registerFighter = (nameA, nameB) => {
        setFighters({
            fighterA: {
                name: nameA
            },
            fighterB: {
                name: nameB
            }
        })
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container }>

                {fighters.fighterA.name === '' && fighters.fighterB.name === '' ? 

                <Button title="add fighters" onPress={() => setModalOpen(true)} />

                :    

                <Button title="Fight!" onPress={ () => navigation.push('Match') } />

                }

                <Modal visible={modalOpen} animationType='slide'>
                    <Button title="close" onPress={() => setModalOpen(false)} />
                </Modal>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(34, 2, 0, 0.7)',
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    titleText: {
        ...globalStyles.titleText,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        padding: 10
    }
})

export default StartMatch