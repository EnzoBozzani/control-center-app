import { View, Image } from "react-native";

interface Props {
    url: string;
    id: string;
}

export const Photo: React.FC<Props> = ({ url, id }) => {
    return (
        <View>
            <Image
                source={{ uri: url }}
                style={{ width: 110, height: 110 }}
            />
        </View>
    )
}