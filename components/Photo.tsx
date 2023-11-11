import { Image, Pressable } from "react-native";

interface Props {
    url: string;
    id: string;
    navigation: any;
}

export const Photo: React.FC<Props> = ({ url, id, navigation }) => {

    const handlePress = () => {
        navigation.navigate('Foto', {
            url,
            id
        });
    }

    return (
        <Pressable
            onPress={handlePress}
        >
            <Image
                source={{ uri: url }}
                style={{ width: 110, height: 110 }}
            />
        </Pressable>
    )
}