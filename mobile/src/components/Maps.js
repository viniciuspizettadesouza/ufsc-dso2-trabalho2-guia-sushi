import React from 'react'
import { withNavigation, MapView } from 'react-navigation'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle} initialRegion ></MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});