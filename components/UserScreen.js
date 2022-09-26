import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import Label from "./Label";

export default function() {
    
    const modalizeRef = useRef(null);

    function onOpen() {
        modalizeRef.current?.open();
    }

    return(
        <View style={styles.containter}>
            <Label/>
            <View style={styles.components}>
                <Image
                        source={require('../assets/user-icon.png')}
                        style={styles.imgIcon}
                    />
            </View>

            <TouchableOpacity onPress={onOpen} style={[styles.button, {backgroundColor: '#F39C12'}]}>
                <Text style={styles.txtDefault}>Histórico</Text>
            </TouchableOpacity>

            <Modalize
                ref={modalizeRef}
                snapPoint={180}
                modalHeight={360}
            >
                <View style={styles.containterModal}>
                    <Text style={styles.txtDefault}>Últimas 5 apostas!</Text>
                    <Text>Aposta 1</Text>
                    <Text>Aposta 2</Text>
                    <Text>Aposta 3</Text>
                    <Text>Aposta 4</Text>
                    <Text>Aposta 5</Text>
                </View>
            </Modalize>
        </View>
    )
}

const styles = StyleSheet.create({
    containter: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containterModal: {
        flex: 1, 
        height: 180, 
        flexDirection: 'column', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 8
    },

    imgIcon: {
        margin: 15,
        height: 50,
        width: 50
    },

    components: {
        padding: 15
    },

    txtDefault: { 
        fontSize: 18, 
        fontWeight: 'bold'
    }
})