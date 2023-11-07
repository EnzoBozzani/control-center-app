import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SavedNotesScreen } from './screens/NotesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Notes'
          component={SavedNotesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

