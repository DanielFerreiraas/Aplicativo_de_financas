import { Text, View, StyleSheet } from 'react-native';

import Header from '../../Components/Header/Header';
import Section from '../../Components/Section/Section';

export default function Home(){
    return(
        <View style={styles.container}>
            <Header></Header>
            <Section></Section>
        </View>
    )
};

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFF"
    }
});