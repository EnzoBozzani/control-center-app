import { Pressable, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../styles";
import NotesService from "../services/NotesService";

interface Props {
    styleType: 'bottom' | 'normal' | 'top';
    index: number;
    title: string;
    handleNotePress: Function;
}

export const NotePressable: React.FC<Props> = ({ styleType, index, title, handleNotePress }) => {
    let styles;
    switch (styleType) {
        case 'bottom':
            styles = {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                backgroundColor: colors.lightGray,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10
            }
            break;
        case 'top':
            styles = {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                backgroundColor: colors.lightGray,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomWidth: 1,
                borderBottomColor: colors.white
            }
            break;
        case 'normal':
            styles = {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                backgroundColor: colors.lightGray,
                borderBottomWidth: 1,
                borderBottomColor: colors.white
            }
            break;
    }

    return (
        <Pressable
            style={styles}
            onPress={() => handleNotePress(index)}
            key={index}
        >
            <Text
                style={{
                    color: colors.white,
                    fontSize: 18,
                }}
            >
                {title}
            </Text>
            <FontAwesome
                name="trash"
                size={24}
                color={colors.white}
                onPress={() => NotesService.deleteNote(title)}
            />
        </Pressable>
    )
}