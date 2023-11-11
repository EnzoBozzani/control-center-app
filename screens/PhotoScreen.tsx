import { View, Image } from "react-native"
import { common, colors } from "../styles";
import { FontAwesome } from '@expo/vector-icons';
import PhotosService from "../services/PhotosService";

interface Props {
    route: any;
    navigation: any;
}

export const PhotoScreen: React.FC<Props> = ({ route, navigation }) => {
    const { url, id } = route.params;

    const handleDelete = () => {
        PhotosService.deletePhoto(id);
        navigation.navigate('Galeria');
    }

    return (
        <View style={common.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30 }}>
                <Image
                    source={{ uri: url }}
                    style={{ width: 300, height: 300 }}
                />
                <FontAwesome
                    name="trash"
                    size={54}
                    color={colors.white}
                    onPress={handleDelete}
                />
            </View>
        </View>
    )
}