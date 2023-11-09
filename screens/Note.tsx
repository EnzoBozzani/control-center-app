import { View, Text, StyleSheet } from "react-native";
import { common, colors } from "../styles";

export const NoteScreen = ({ route }) => {
    const { notes, noteId } = route.params;

    return (
        <View style={common.container}>
            <View style={styles.note}>
                <Text style={styles.noteTitle}>
                    {notes[noteId].title}
                </Text>
                <Text style={styles.noteContent}>
                    {notes[noteId].noteContent}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    note: {
        width: '95%',
        marginHorizontal: '2.5%',
        marginTop: 30,
        gap: 20
    },
    noteTitle: {
        fontSize: 24,
        color: colors.green,
        fontWeight: 'bold'
    },
    noteContent: {
        fontSize: 18,
        color: colors.white,
        fontWeight: '600'
    }
})