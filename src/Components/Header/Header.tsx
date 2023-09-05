import React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity  } from 'react-native';

import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.userName}>Daniel Ferreira</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.userButton}>
                <Feather name='user' size={27} color='#FFFFFF'></Feather>
            </TouchableOpacity>
        </View>
    </View>
     
  )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom:44
    },
    userButton:{
        width:45,
        height:45,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        flex:1,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userName:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});