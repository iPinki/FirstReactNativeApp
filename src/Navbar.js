import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const Navbar = ({title}) => {
    return(
        <View style={styles.navbar}>
        <Image
             source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png"}}
             style={styles.img}
            />
            <Text style={styles.text}>{title}</Text>
            <Image
             source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png"}}
             style={styles.img}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f39c12',
        paddingBottom: 10,
        paddingTop: 25
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'serif',
    },
    img: {
        width: 20,
        height: 20, 
        marginRight: 10
    }
})