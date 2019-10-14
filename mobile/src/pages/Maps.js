import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
} from 'react-native'

import MapComponent from '../components/MapComponent'

import logo from '../assets/logo.png'

export default function Maps({ navigation }) {

    function handleNavigate() {
        navigation.navigate('Restaurant')
    }

    return (
        <SafeAreaView style={styles.container} >
            <TouchableWithoutFeedback onPress={() => handleNavigate()}>
                <Image style={styles.logo} source={logo} />
            </TouchableWithoutFeedback>
            <MapComponent />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 80,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 10,
    },
})