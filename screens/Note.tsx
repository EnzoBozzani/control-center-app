import { View, Text, StyleSheet } from "react-native";
import { common, colors } from "../styles";

export const NoteScreen = ({ route }) => {
    const { notes, noteId } = route.params;

    //a parte que tem o texto precisa ser um TextInput enorme que tem um estado atrelado ao seu conteúdo 
    //(inicia com o noteContent), e precisa ter um botão de salvar no final da tela
    //ao clicar em salvar, o valor do estado é enviado para o firebase 

    return (
        <View style={common.container}>
            <View style={styles.note}>
                <Text style={styles.noteTitle}>
                    {notes[noteId].title}
                </Text>
                <Text>
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
    }
})