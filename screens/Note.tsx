import { View, Text } from "react-native";
import { common } from "../styles";

export const NoteScreen = ({ route }) => {
    const { title, noteContent } = route.params;

    //a parte que tem o texto precisa ser um TextInput enorme que tem um estado atrelado ao seu conteúdo 
    //(inicia com o noteContent), e precisa ter um botão de salvar no final da tela
    //ao clicar em salvar, o valor do estado é enviado para o firebase 

    return (
        <View style={common.container}>
            <Text>
                {title}
                {noteContent}
            </Text>
        </View>
    )

}