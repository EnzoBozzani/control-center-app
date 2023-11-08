import { View, StyleSheet, Pressable } from "react-native"

const notes = [
    {
        title: 'Séries',
        noteContent: 'Conteúdo 4fb3niu f4uinfu4n3fuib34 ui3fbnu34nfiu54bnf5ruibf f4uinefduenfdui34f ufin34fujn4iufn4iuf 3f4uinrnufriubn'
    },
    {
        title: 'Filmes',
        noteContent: 'Conteúdo 4fb3niu f4uinfu4n3fuib34 ui3fbnu34nfiu54bnf5ruibf f4uinefduenfdui34f ufin34fujn4iufn4iuf 3f4uinrnufriubn'
    },
    {
        title: 'Jogos',
        noteContent: 'Conteúdo 4fb3niu f4uinfu4n3fuib34 ui3fbnu34nfiu54bnf5ruibf f4uinefduenfdui34f ufin34fujn4iufn4iuf 3f4uinrnufriubn'
    },
]

export const SavedNotesScreen = ({ navigation }) => {

    const handlePress = (title: string, noteContent: string) => {
        navigation.navigate('Nota', {
            title,
            noteContent
        });
    }

    return (
        <View style={styles.container}>
            {notes.map((note) => (
                <Pressable
                    style={styles.noteBtn}
                    onPress={() => handlePress(note.title, note.noteContent)}
                >
                    {note.title}
                </Pressable>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    noteBtn: {
        width: '100%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#fff',
        fontSize: 24,
        padding: 20,
    }
})