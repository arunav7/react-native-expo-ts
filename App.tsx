// @ts-nocheck
// import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import Form from './components/Form';
import Products from './components/Products';
import Albums from './components/Albums';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          name='Form'
          component={Form}
        />
        <Stack.Screen
          name='Products'
          component={Products}
        />
        <Stack.Screen
          name='Albums'
          component={Albums}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     paddingBottom: 40,
//   },
//   vStackContainer: {
//     backgroundColor: 'cornsilk',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingBottom: 10,
//   },
//   headerText: {
//     alignSelf: 'center',
//     justifyContent: 'center',
//     fontSize: 20,
//     fontWeight: '600',
//     marginVertical: 5,
//     backgroundColor: 'cyan',
//     width: '100%',
//   },
//   input: {
//     borderWidth: 0.5,
//     borderColor: 'khaki',
//     marginVertical: 10,
//     padding: 10,
//     color: 'purple',
//     width: '100%',
//   },
//   item: {
//     backgroundColor: 'thistle',
//     paddingVertical: 10,
//     paddingLeft: 10,
//     marginVertical: 5,
//   },
// });
