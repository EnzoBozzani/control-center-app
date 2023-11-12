import { View, StyleSheet, Text, Pressable } from "react-native";
import { colors, common } from "../styles";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { TimerInput } from "../components";

export const Alarm: React.FC = () => {
    const [selectedSecond, setSelectedSecond] = useState(0);
    const [selectedMinute, setSelectedMinute] = useState(0);
    const [selectedHour, setSelectedHour] = useState(0);
    const [sound, setSound] = useState<any>();

    const handleSetTimer = () => {
        const time = (selectedSecond * 1000) + (selectedMinute * 1000 * 60) + (selectedHour * 1000 * 3600);
        setSelectedHour(0);
        setSelectedMinute(0);
        setSelectedSecond(0);
        setTimeout(() => {
            playSound();
        }, time)
    }

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('../assets/alarm.mp3'));
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);


    return (
        <View style={common.container}>
            <View style={styles.form}>
                <TimerInput
                    label="Horas:"
                    len={24}
                    selected={selectedHour}
                    setSelected={setSelectedHour}
                />
                <TimerInput
                    label="Minutos:"
                    len={60}
                    selected={selectedMinute}
                    setSelected={setSelectedMinute}
                />
                <TimerInput
                    label="Segundos:"
                    len={60}
                    selected={selectedSecond}
                    setSelected={setSelectedSecond}
                />
                <Pressable
                    onPress={handleSetTimer}
                    style={common.formBtn}
                >
                    <Text style={common.formBtnText}>
                        Setar Timer
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        marginTop: 50
    }
})