import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback, Button } from 'react-native'

import api from '../services/api'

function RestaurantDescription({ navigation }) {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        async function loadRestaurants() {
            const response = await api.get('/restaurants', {
            })
            setRestaurants(response.data)
        }
        loadRestaurants()
    }, [])

    function handleNavigate() {
        navigation.navigate('Maps')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.guide}>Guia de Sushi Wellness</Text>
            <TouchableOpacity onPress={() => handleNavigate()} style={styles.button} >
                <Button title="Ver mapa" color="#fffafa" />
            </TouchableOpacity>
            <FlatList
                style={styles.list}
                data={restaurants}
                keyExtractor={restaurant => restaurant._id}
                showsHorizontalScrollIndicator={false}

                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text>Cardápio: <Text style={styles.address}>{item.menu}</Text></Text>
                        <Text>Bebidas: <Text style={styles.address}>{item.drinks}<Text> </Text></Text></Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignContent: "center",
    },
    guide: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#333',
        marginTop: -10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    description: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold: {
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15,
    },
    thumbnail: {
        width: 250,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },
    address: {
        fontSize: 15,
        color: '#999',
        marginTop: 5,
    },
    button: {
        height: 32,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15,
    },
    guri: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 100,
    }
})

export default withNavigation(RestaurantDescription)