import React from 'react'
import { withNavigation } from 'react-navigation'
import { Text, StyleSheet, } from 'react-native'

import api from '../services/api'

function RestaurantDescription({ navigation }) {
    return (
        <Text>Test RestaurantDescription</Text>
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

export default withNavigation(RestaurantDescription)