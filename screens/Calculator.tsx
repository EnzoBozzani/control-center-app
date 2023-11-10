import { View, StyleSheet, Text } from "react-native";
import { colors, common } from "../styles";
import { useState } from "react";
import { CalcButton } from "../components";

export const CalculatorScreen: React.FC = () => {
    const [exp, setExp] = useState('');
    const values = '789*456/123-C0=+'.split('');

    return (
        <View style={common.container}>
            <View style={styles.calculator}>
                <View style={styles.visor}>
                    <Text style={styles.visorText}>
                        {exp}
                    </Text>
                </View>
                <View style={styles.buttonsGroup}>
                    {values.map((val, i) => (
                        <CalcButton
                            setExp={setExp}
                            value={val}
                            key={i}
                        />
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    calculator: {
        width: '95%',
        marginHorizontal: '2.5%',
        marginVertical: 50,
        gap: 20,
    },
    visor: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.green
    },
    visorText: {
        color: colors.white,
        paddingHorizontal: 10,
        fontSize: 34,
        fontWeight: 'bold'
    },
    buttonsGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
})