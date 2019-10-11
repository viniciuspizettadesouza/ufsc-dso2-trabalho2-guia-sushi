import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
} from 'react-native'

import RestaurantInfo from '../components/RestaurantInfo'

import logo from '../assets/logo.png'

export default function List({ navigation }) {

    function handleNavigate() {
        navigation.navigate('List')
    }

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => handleNavigate()}>
                <Image style={styles.logo} source={logo} />
            </TouchableWithoutFeedback>
            <ScrollView>
                <RestaurantInfo />
            </ScrollView>
        </SafeAreaView >
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