import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NotesNavigator, Alarm, CalculatorScreen, PhotosGalleryScreen } from './screens/';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { colors } from './styles';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.dark
          },
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          },
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
          component={CalculatorScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-calculator" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Galeria de Fotos'
          component={PhotosGalleryScreen}
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

