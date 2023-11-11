import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../styles";
import { PhotosGalleryScreen } from "./PhotosGallery";
import { PhotoScreen } from "./PhotoScreen";

const PhotosStack = createNativeStackNavigator();

export const PhotosNavigator: React.FC = () => {
    return (
        <PhotosStack.Navigator
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: colors.dark,
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 24
                    },
                }
            }
        >
            <PhotosStack.Screen
                name='Galeria'
                component={PhotosGalleryScreen}
            />
            <PhotosStack.Screen
                name='Foto'
                component={PhotoScreen}
                //@ts-ignore
                options={() => ({ title: '' })}
            />
        </PhotosStack.Navigator>
    );
}