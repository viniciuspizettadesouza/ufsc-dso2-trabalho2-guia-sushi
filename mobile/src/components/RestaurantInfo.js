import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { Text, StyleSheet, } from 'react-native'

import api from '../services/api'

function RestaurantInfo({ navigation }) {

    return (
        <Text>Test RestaurantInfo</Text>
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

export default withNavigation(RestaurantInfo)