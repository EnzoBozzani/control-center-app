import { View, Text } from "react-native";

export const NoteScreen = ({ route }) => {
    const { title, noteContent } = route.params;

    return (
        <View>
            <Text>
                {title}
                {noteContent}
            </Text>
        </View>
    )

}