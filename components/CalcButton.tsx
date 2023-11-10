import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../styles";

interface Props {
    value: string;
    setExp: any;
}

export const CalcButton: React.FC<Props> = ({ value, setExp }: Props) => {

    let val: string;

    switch (value) {
        case '*':
            val = 'x';
            break;
        case '/':
            val = '÷';
            break;
        default:
            val = value;
            break;
    }

    if (value === 'C') {
        return (
            <Pressable
                style={styles.button}
                onPress={() => setExp('')}
            >
                <Text style={styles.buttonText}>
                    {value}
                </Text>
            </Pressable>
        )
    }

    if (value === '=') {
        return (
            <Pressable
                style={styles.button}
                onPress={() => setExp((current: any) => {
                    try {
                        return eval(current)
                    } catch {
                        return ''
                    }
                })}
            >
                <Text style={styles.buttonText}>
                    {value}
                </Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            style={styles.button}
            onPress={() => setExp((current: any) => `${current}${value}`)}
        >
            <Text style={styles.buttonText}>
                {val}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        backgroundColor: colors.green,
        borderWidth: 1,
        borderRadius: 1200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        fontSize: 20,
        color: colors.lightGray
    }
})