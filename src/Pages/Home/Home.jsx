import { Text, View, StyleSheet } from 'react-native';

import Header from '../../Components/Header/Header';
import Section from '../../Components/Section/Section';
import Balance from '../../Components/Balance/Balance';

export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            <Balance saldo="9.222,00" gastos="-500"/>
            {/* <Section/> */}
        </View>
    )
};

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFF"
    }
});