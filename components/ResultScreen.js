import react from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import WavyBackground from "react-native-wavy-background";
import { Ionicons } from '@expo/vector-icons'
import Label from "./Label";


export default function() {
    return(
        <ScrollView>            
            <Label
                style={styles.container}
            />
            <View style={styles.iconSena}>
                <Ionicons name="rocket-sharp" size={64} style={{alignSelf: 'center'}}></Ionicons>
            </View>

            <View>
                <Text style={styles.txt1}>Resultados!</Text>
                <Text>13/09/2022</Text>

                <View style={styles.ballsContainer}>
                    <View style={styles.ball}><Text style={styles.textBall}>14</Text></View>
                    <View style={styles.ball}><Text style={styles.textBall}>14</Text></View>
                    <View style={styles.ball}><Text style={styles.textBall}>14</Text></View>
                    <View style={styles.ball}><Text style={styles.textBall}>14</Text></View>
                    <View style={styles.ball}><Text style={styles.textBall}>14</Text></View>
                    <View style={styles.ball}><Text style={styles.textBall}>14</Text></View>
                </View>

                <Text style={{margin: 10, fontSize: 16}}>Extimativa de prêmio do próximo concurso: 15/09/2022</Text>
                <Text style={{margin: 10, fontSize: 32, fontWeight: 'bold'}}>R$ 5.700.000,00</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 350,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },

    txt1: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10
    },

    iconSena: {
        alignSelf: 'center',
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: '#239B56',
        alignItems: "center",
        borderRadius: 10
    },

    ballsContainer: {
        flexDirection: "row",
    },

    ball: {
        width: '10.5%',   
        height: '70%',
        backgroundColor: '#239B56',
        margin: 11,
        borderRadius: 40.25
    },

    textBall: {
        fontSize: 32,
    }
})