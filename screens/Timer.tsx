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
        setTimeout(() => {
            playSound();
        }, (selectedSecond * 1000) + (selectedMinute * 1000 * 60) + (selectedHour * 1000 * 3600))
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
            <TimerInput
                len={24}
                selected={selectedHour}
                setSelected={setSelectedHour}
            />
            <TimerInput
                len={60}
                selected={selectedMinute}
                setSelected={setSelectedMinute}
            />
            <TimerInput
                len={60}
                selected={selectedSecond}
                setSelected={setSelectedSecond}
            />
            <Pressable
                onPress={handleSetTimer}
            >
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