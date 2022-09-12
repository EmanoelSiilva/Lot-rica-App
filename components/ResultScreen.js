import react from "react";
import { View, Text, StyleSheet } from "react-native";


export default function() {
    return(
        <View style={styles.container}>
            <Text style={styles.txt1}>ÚLTIMO COMPONENTE AQUI</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    
    txt1: {
        justifyContent: 'center'
    }
})