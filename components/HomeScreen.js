import react from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import Label from './Label';
 
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Label/>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Ionicons name='logo-react' size={128}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity title='Acesse a sua conta' style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.txt1}>Acesse a sua conta</Text>
                <Ionicons name="enter-outline" size={32}/>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={styles.txt2}>
          https://github.com/EmanoelSiilva/Lot-rica-App
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 16,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt1: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
        color: '#000'
    },

    txt2: {
        fontSize: 15,
        textAlign: 'center',
        color: '#BFC9CA',
    },

    buttonContainer: {
        margin: 150,
    },

    button: {
        flexDirection: 'row',
        width: 210,
        borderRadius: 15,        
        backgroundColor: '#F39C12',
    },

})