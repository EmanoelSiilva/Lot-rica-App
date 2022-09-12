import react from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
 
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
        backgroundColor: '#3498DB'
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
        color: '#F39C12'
    },

    txt2: {
        fontSize: 18,
        textAlign: 'center',
        color: '#BFC9CA',
    },

    buttonContainer: {
        backgroundColor: '#FFF',
        margin: 150,
        backgroundColor: '#3498DB',
    },

    button: {
        flexDirection: 'row',
        width: 210,
        borderRadius: 15,        
        backgroundColor: '#FFF',
    },

})