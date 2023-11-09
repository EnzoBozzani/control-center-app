import { View, StyleSheet, Pressable, Text } from "react-native"
import { colors, common } from "../styles";
import notes from '../notes.json';

export const SavedNotesScreen = ({ navigation }) => {

    //precisa ter um estado para as notas 

    const handlePress = (title: string, noteContent: string) => {
        navigation.navigate('Nota', {
            title,
            noteContent
        });
    }

    return (
        <View style={common.container}>
            <View style={styles.container}>
                {notes.map((note, index) => {
                    if (index == 0) {
                        return (
                            <Pressable
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    padding: 20,
                                    backgroundColor: colors.lightGray,
                                    borderTopRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: colors.white
                                }}
                                onPress={() => handlePress(note.title, note.noteContent)}
                                key={index}
                            >
                                <Text style={styles.noteBtnText}>{note.title}</Text>
                            </Pressable>
                        )
                    }
                    if (index == notes.length - 1) {
                        return (
                            <Pressable
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    padding: 20,
                                    backgroundColor: colors.lightGray,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10
                                }}
                                onPress={() => handlePress(note.title, note.noteContent)}
                                key={index}
                            >
                                <Text style={styles.noteBtnText}>{note.title}</Text>
                            </Pressable>
                        )
                    }
                    return (
                        <Pressable
                            style={styles.noteBtn}
                            onPress={() => handlePress(note.title, note.noteContent)}
                            key={index}
                        >
                            <Text style={styles.noteBtnText}>{note.title}</Text>
                        </Pressable>
                    )
                })}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '95%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.white,
        marginTop: 30,
        marginHorizontal: '2.5%'
    },
    noteBtn: {
        width: '100%',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: colors.lightGray,
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    },
    noteBtnText: {
        color: colors.white,
        fontSize: 18,
    }
})