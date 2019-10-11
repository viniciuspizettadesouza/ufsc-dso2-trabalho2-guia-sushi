import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Image, AsyncStorage } from 'react-native'

import RestaurantList from '../components/RestaurantList'

import logo from '../assets/logo.png'

export default function List() {

    return (
        <SafeAreaView style={styles.container} >
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                <RestaurantList />
            </ScrollView>
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