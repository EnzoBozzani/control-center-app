import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from "react";
import { colors } from "../styles";

interface Props {
    len: number;
    label: string;
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>;
}

export const TimerInput: React.FC<Props> = ({ len, label, selected, setSelected }) => {
    const numbers = [];
    for (let i = 0; i < len; i++) {
        numbers.push(i);
    }
    return (
        <View style={styles.formGroup}>
            <Text style={styles.label}>
                {label}
            </Text>
            <View style={styles.input}>
                <AntDesign
                    name="leftcircleo"
                    size={24}
                    color={colors.green}
                    onPress={() => setSelected(prev => prev === 0 ? len - 1 : prev - 1)}
                />
                <Text style={styles.value}>
                    {selected}
                </Text>
                <AntDesign
                    name="rightcircleo"
                    size={24}
                    color={colors.green}
                    onPress={() => setSelected(prev => prev === len - 1 ? 0 : prev + 1)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formGroup: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    value: {
        color: colors.white,
        fontSize: 24
    }
})
