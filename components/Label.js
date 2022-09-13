import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import WavyBackground from "react-native-wavy-background";

export default function() {
    return(
        <View>
            <WavyBackground
                height={200}
                width={1100}
                amplitude={15}
                frequency={1}
                offset={150}
                color="#3498DB"
                bottom={false}
        />
        </View>
    )
}