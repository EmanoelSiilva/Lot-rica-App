import react from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react";

const img = '../assets/fundo-azul.jpg'

export default function({navigation}) {
    const [login, setLogin] = useState("login")
    const [passaword, setPassword] = useState("passaword")
    const [hidePass, setHidePass] = useState(true)

    return(
        <ImageBackground
            source={require(img)}
            style={styles.mainContainer}
        >
                <View style={styles.containerLogo}>
                    <Image
                        source={require('../assets/logo_ifal.png')}
                        style={styles.logo}
                    />
                </View>

                <View>
                    <View style={styles.containerInputs}>
                        
                        <View style={styles.inputAreaLogin}>
                            <TextInput
                                placeholder="login"
                                placeholderTextColor="#FFF"
                                onChangeText={login => (setLogin(login))}
                                style={styles.textInput}
                            />
                        </View>

                        <View style={styles.inputAreaPassaword}>
                            <TextInput
                                placeholder="passaword"
                                placeholderTextColor="#FFF"
                                value={passaword}
                                onChangeText={passaword => (setPassword(passaword))}
                                style={styles.textInput}
                                secureTextEntry={hidePass}
                            />
                            <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                                {hidePass ?
                                    <Ionicons name="eye" color='#FFF' size={25}/>
                                    :
                                    <Ionicons name="eye-off" color='#FFF' size={25}/>
                                }
                                
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.containerButtonLogin}>
                    <TouchableOpacity style={styles.buttonLogin}
                        onPress={() => navigation.navigate('Resultados')}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
    ) 
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%'
    },
    
    containerLogo: {
        alignItems: 'center',
        paddingTop: 50
    },

    logo: {
        resizeMode: 'contain',
        height: 200,
    },

    containerInputs: {
        alignItems: 'center',
        marginTop: 50
    },

    inputAreaPassaword:{
        flexDirection: "row",
        width: '90%',
        backgroundColor: '#121212',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        marginTop: 15
    },

    inputAreaLogin: {
        width: '90%',
        backgroundColor: '#121212',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
    },

    textInput: {
        borderWidth: 1,
        color: '#FFF',
        width: '90%',
        padding: 8,
        fontSize: 18,
        borderRadius: 10,
        textAlign: "center",
        marginTop: 10
    },

    icon: {
        width: '10%',
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
    },

    containerButtonLogin: {
        alignItems: 'center'
    },

    buttonLogin: {
        backgroundColor: '#CCC',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '90%',
        margin: 50,
        borderRadius: 10
    }
})