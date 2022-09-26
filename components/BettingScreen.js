import react from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
import Label from "./Label";



export default function({navigation}) {
    return(
        <ScrollView style={styles.mainContainer}>
            <Label/>

            <TouchableOpacity onPress={() => navigation.navigate('Tela do Usuario')}>
                <View style={styles.userIcon}>
                    <Image
                        source={require('../assets/user-icon.png')}
                        style={styles.imgIcon}
                    />
                    <Text>Tela do Usuário</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.containerBar}>
                <Ionicons name="logo-react" size={128} style={styles.icon}></Ionicons>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconSena} onPress={() => navigation.navigate('Resultados Mega Sena')}>
                    <View>
                        <Ionicons name="rocket-sharp" size={128}></Ionicons>
                        <Text style={styles.txtIcons}>Mega-Sena</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.iconQuina}>
                    <Ionicons name="rocket-sharp" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>Quina</Text>
                </View>

                <View style={styles.iconLotoMania}>
                    <Ionicons name="rocket-sharp" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>Loto Mania</Text>
                </View>

                <View style={styles.iconLoto}>
                    <Ionicons name="rocket-sharp" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>LotoFácil</Text>
                </View>

                <View style={styles.iconTime}>
                    <Ionicons name="rocket-sharp" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>TimeMania</Text>
                </View>

                <View style={styles.iconDupla}>
                    <Ionicons name="rocket-sharp" size={128}></Ionicons>
                    <Text style={styles.txtIcons}>DuplaSena</Text>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
    },

    icon: {
        justifyContent: "center"
    },

    containerBar: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
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
    },

    userIcon:{
        alignSelf: 'flex-end',
        alignItems: 'center',
        width: '50%',
    },

    imgIcon: {
        height: 50,
        width: 50
    }
})