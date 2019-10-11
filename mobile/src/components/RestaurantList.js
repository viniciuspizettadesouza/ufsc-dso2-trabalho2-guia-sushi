import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'

import api from '../services/api'

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        async function loadRestaurants() {
            const response = await api.get('/restaurants', {
            })
            setRestaurants(response.data)
        }
        loadRestaurants()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.guide}>Guia de Sushi Wellness</Text>
            <FlatList
                style={styles.list}
                data={restaurants}
                keyExtractor={restaurant => restaurant._id}
                showsHorizontalScrollIndicator={false}

                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
                        <Text >Endereço: <Text style={styles.address}>{item.address}</Text></Text>
                        <Text>Horário de Funcionamento: <Text style={styles.bold}>{item.opening}</Text></Text>
                    </View>
                )}
            />
            <Text style={styles.guri}>EH US GURI</Text>
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
    guri: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 100,
    }
})

export default withNavigation(RestaurantList)