import { View, StyleSheet, Pressable, Text, TextInput, ScrollView, Alert } from "react-native"
import { colors, common } from "../styles";
import { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import { NotePressable } from "../components";

interface NoteType {
    title: string;
    noteContent: string;
}

export const SavedNotesScreen = ({ navigation }) => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState<NoteType>({ title: '', noteContent: '' });

    useEffect(() => {
        NotesService.getNotes(setNotes);
    }, []);

    const handleNotePress = (noteId: number) => {
        navigation.navigate('Nota', {
            notes,
            noteId
        });
    };

    const handleSubmit = async () => {
        if (newNote.title === '') return Alert.alert('Atenção', 'O título da nota não pode ser vazio', [{ text: 'OK' }]);
        NotesService.writeNote(newNote.title, newNote.noteContent)
        setNewNote({ title: '', noteContent: '' });
    }


    return (
        <ScrollView style={common.container}>
            <View style={styles.notesContainer}>
                {notes ? notes?.map((note, index) => {
                    if (index == 0) {
                        return (
                            <NotePressable
                                handleNotePress={handleNotePress}
                                index={index}
                                styleType='top'
                                title={note.title}
                                key={index}
                            />
                        )
                    }
                    if (index == notes.length - 1) {
                        return (
                            <NotePressable
                                handleNotePress={handleNotePress}
                                index={index}
                                styleType='bottom'
                                title={note.title}
                                key={index}
                            />
                        )
                    }
                    return (
                        <NotePressable
                            handleNotePress={handleNotePress}
                            index={index}
                            styleType='normal'
                            title={note.title}
                            key={index}
                        />
                    )
                })
                    :
                    <Text style={styles.noNotesFound}>
                        Nenhuma nota ainda!
                    </Text>
                }
            </View>
            <View style={common.form}>
                <Text style={common.formTitle}>
                    Adicionar Nova Nota
                </Text>
                <View style={common.formGroup}>
                    <Text style={common.formLabel}>
                        Título:
                    </Text>
                    <TextInput
                        style={common.input}
                        value={newNote.title}
                        onChangeText={(newText) => setNewNote(prevState => ({ title: newText, noteContent: prevState.noteContent }))}
                    />
                </View>
                <View style={common.formGroup}>
                    <Text style={common.formLabel}>
                        Conteúdo:
                    </Text>
                    <TextInput
                        style={styles.contentInput}
                        multiline
                        numberOfLines={10}
                        value={newNote.noteContent}
                        onChangeText={(newText) => setNewNote(prevState => ({ title: prevState.title, noteContent: newText }))}
                    />
                </View>
                <Pressable
                    style={common.formBtn}
                    onPress={handleSubmit}
                >
                    <Text style={common.formBtnText}>
                        Adicionar
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    notesContainer: {
        width: '95%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.white,
        marginTop: 30,
        marginHorizontal: '2.5%',
        backgroundColor: colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.white,
        padding: 10,
        borderRadius: 10,
        color: colors.white,
        height: 200
    },
    noNotesFound: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 20,
        color: colors.white
    }
})