import react from "react";
import { View, Text, StyleSheet, ScrollViewBase } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";


export default function() {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.containerBar}>
                <Ionicons name="logo-youtube" size={64} style={styles.icon}></Ionicons>
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconSena}>
                    <View>
                        <Ionicons name="flower-outline" size={128}></Ionicons>
                        <Text style={styles.txtIcons}>Mega-Sena</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.iconQuina}>
                    <Ionicons name="flower-outline" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>Quina</Text>
                </View>

                <View style={styles.iconLotoMania}>
                    <Ionicons name="flower-outline" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>Loto Mania</Text>
                </View>

                <View style={styles.iconLoto}>
                    <Ionicons name="flower-outline" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>LotoFácil</Text>
                </View>

                <View style={styles.iconTime}>
                    <Ionicons name="flower-outline" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>TimeMania</Text>
                </View>

                <View style={styles.iconDupla}>
                    <Ionicons name="flower-outline" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>DuplaSena</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%'
    },

    icon: {
        marginTop: 30
    },

    containerBar: {
        backgroundColor: '#3498DB',
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconsContainer: {
        flexDirection: "row",
        flexWrap: 'wrap',
        height: '100%',
    },

    iconSena: {
        width: '45%',
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: '#239B56',
        alignItems: "center",
        borderRadius: 10
    },

    iconLoto: {
        width: '45%',
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: '#7D3C98',
        alignItems: 'center',
        borderRadius: 10
    },

    iconQuina: {
        width: '45%',
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: '#0621E8',
        alignItems: "center",
        borderRadius: 10
    },

    iconLotoMania: {
        width: '45%',
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: '#E67E22',
        alignItems: "center",
        borderRadius: 10
    },

    iconTime: {
        width: '45%',
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: '#F1C40F',
        alignItems: "center",
        borderRadius: 10
    },

    iconDupla: {
        width: '45%',
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: '#CB4335',
        alignItems: "center",
        borderRadius: 10
    },

    txtIcons: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24
    }
})