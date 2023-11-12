import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from "react";

interface Props {
    len: number;
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>;
}

export const TimerInput: React.FC<Props> = ({ len, selected, setSelected }) => {
    const numbers = [];
    for (let i = 0; i < len; i++) {
        numbers.push(i);
    }
    return (
        <View style={{ flexDirection: 'row' }}>
            <AntDesign name="leftcircleo" size={24} color="black" onPress={() => setSelected(prev => prev === 0 ? len - 1 : prev - 1)} />
            <Text>
                {selected}
            </Text>
            <AntDesign name="rightcircleo" size={24} color="black" onPress={() => setSelected(prev => prev === len - 1 ? 0 : prev + 1)} />
        </View>
    )
}

// << 2 >> -> input nesse estilo, ai ao clicar na flecha muda o número