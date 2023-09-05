import React from "react";

import { Text, View, StyleSheet } from 'react-native';

export default function Section(){
    return(
        <View style={styles.section}>
            <Text style={styles.userName}>Olá Daniel, Seja bem vindo!</Text>
        </View>
    )
};

const styles =  StyleSheet.create({
    section:{
        backgroundColor: 'grey',
        height: 80,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userName:{
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: 'bold',
    }
});