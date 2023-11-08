import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SavedNotesScreen } from './NotesScreen';
import { NoteScreen } from './Note';

const NotesStack = createNativeStackNavigator();

export default function () {
    return (
        <NotesStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1b1b1b'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <NotesStack.Screen
                name='Notas'
                component={SavedNotesScreen}
            />
            <NotesStack.Screen
                name='Nota'
                component={NoteScreen}
                //@ts-ignore
                options={({ route }) => ({ title: route.params.title })}
            />
        </NotesStack.Navigator>
    );
}