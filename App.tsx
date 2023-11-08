import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesNavigator from './screens/NotesNavigator';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { Alarm } from './screens/Alarm';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1b1b1b'
          },
          headerStyle: {
            backgroundColor: '#1b1b1b'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <Tab.Screen
          name="Notas"
          component={NotesNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="notes" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Alarme"
          component={Alarm}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="alarm" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Calculadora'
          component={Alarm}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-calculator" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Galeria de Fotos'
          component={Alarm}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="photo" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

