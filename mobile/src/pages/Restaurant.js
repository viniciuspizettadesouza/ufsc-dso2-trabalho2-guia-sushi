import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
} from 'react-native'

import RestaurantDescription from '../components/RestaurantDescription'

import logo from '../assets/logo.png'

export default function Restaurant({ navigation }) {

    function handleNavigate() {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => handleNavigate()}>
                <Image style={styles.logo} source={logo} />
            </TouchableWithoutFeedback>
            <ScrollView>
                <RestaurantDescription />
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