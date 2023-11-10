import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { colors, common } from "../styles";
import { useEffect, useState } from "react";

export const Alarm: React.FC = () => {
    const date = new Date();
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    // const sound = new Audio.Sound();
    // sound.loadAsync(require('baixar audio'));

    useEffect(() => {
        //fazer a lógica de bater a hora 
    }, []);

    return (
        <View style={common.container}>
            <Text style={styles.label}>
                Hora:
            </Text>
            <TextInput
                value={hour}
                onChangeText={(newText) => setHour(newText)}
                style={styles.input}
            />
            <Text style={styles.label}>
                Minuto:
            </Text>
            <TextInput
                value={minute}
                onChangeText={(newText) => setMinute(newText)}
                style={styles.input}
            />
            <Pressable>
                <Text style={{ color: '#fff' }}>
                    ALARME
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 5000,
        paddingVertical: 10,
        paddingLeft: 5,
        borderWidth: 1,
        borderColor: colors.white,
        width: 30,
        color: colors.white
    },
    label: {
        color: colors.white
    }
})