import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default function Balance({saldo , gastos}) {
    return (
        <View style={style.container}>
            <View>
                <Text style={style.itemTitle}>Saldo</Text>
                <View style={style.content}>
                    <Text style={style.currencySymbol}>R$</Text>
                    <Text style={style.balance}>
                        {saldo}
                    </Text>
                </View>
            </View>

            <View>
                <Text style={style.itemTitle}>Gastos</Text>
                <View style={style.content}>
                    <Text style={style.currencySymbol}>R$</Text>
                    <Text style={style.expenses}>
                        {gastos}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -20,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingBottom: 22,
        paddingTop: 22,
        zIndex: 99,
    },
    itemTitle:{
        fontSize: 20,
        color: "#979FA6"
    },
    content: {
        flexDirection: "row",
        alignItems: "center"
    },
    currencySymbol:{
        color: "#979FA6",
        marginRight: 6,
    },
    balance: {
        fontSize: 20,
        color: "#2ecc51"
    },
    expenses: {
        fontSize: 20,
        color: "#e74c3c"
    }

})