import { View, StyleSheet, Pressable, Text, TextInput, ScrollView, Alert } from "react-native"
import { colors, common } from "../styles";
import data from '../notes.json';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface NoteType {
    title: string;
    noteContent: string;
}

export const SavedNotesScreen = ({ navigation }) => {
    const [notes, setNotes] = useState<NoteType[]>(data);
    const [newNote, setNewNote] = useState<NoteType>({ title: '', noteContent: '' });

    useEffect(() => {
        const fetchNotes = async () => {
            const res = await AsyncStorage.getItem('notes');
            if (!res) await AsyncStorage.setItem('notes', JSON.stringify(data));
            setNotes(JSON.parse(res));
        };
        fetchNotes();
    }, []);

    const handleNotePress = (noteId: number) => {
        navigation.navigate('Nota', {
            notes,
            noteId
        });
    };

    const handleSubmit = () => {
        if (newNote.title === '') return Alert.alert('Atenção', 'O título da nota não pode ser vazio', [{ text: 'OK' }]);
        setNotes(prevState => {
            return [...prevState, newNote];
        });
        setNewNote({ title: '', noteContent: '' });
    }

    return (
        <ScrollView style={common.container}>
            <View style={styles.container}>
                {notes?.map((note, index) => {
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
                                onPress={() => handleNotePress(index)}
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
                                onPress={() => handleNotePress(index)}
                                key={index}
                            >
                                <Text style={styles.noteBtnText}>{note.title}</Text>
                            </Pressable>
                        )
                    }
                    return (
                        <Pressable
                            style={styles.noteBtn}
                            onPress={() => handleNotePress(index)}
                            key={index}
                        >
                            <Text style={styles.noteBtnText}>{note.title}</Text>
                        </Pressable>
                    )
                })}
            </View>
            <View style={styles.form}>
                <Text style={styles.formTitle}>
                    Adicionar Nova Nota
                </Text>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>
                        Título:
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={newNote.title}
                        onChangeText={(newText) => setNewNote(prevState => ({ title: newText, noteContent: prevState.noteContent }))}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>
                        Conteúdo:
                    </Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={10}
                        value={newNote.noteContent}
                        onChangeText={(newText) => setNewNote(prevState => ({ title: prevState.title, noteContent: newText }))}
                    />
                </View>
                <Pressable
                    style={styles.formBtn}
                    onPress={handleSubmit}
                >
                    <Text style={styles.formBtnText}>
                        Adicionar
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
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
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        marginTop: 40
    },
    formTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.green
    },
    formGroup: {
        width: '75%',
        gap: 10,
        justifyContent: 'center'
    },
    formLabel: {
        color: colors.white,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.white,
        padding: 10,
        borderRadius: 10,
        color: colors.white
    },
    formBtn: {
        width: '75%',
        backgroundColor: colors.green,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formBtnText: {
        fontSize: 18,
        paddingVertical: 5,
        color: colors.dark,
        fontWeight: 'bold'
    }
})