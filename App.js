import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, Provider } from 'react-native-paper';
import AllStudents from './AllStudents';
import AllUsers from './AllUsers';
import Login from './Login';
import Tes from './Tes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNav';
import { Provider as StoreProvider } from 'react-redux';
import StuList from './StuList';

const Stack = createStackNavigator();

function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
        <Stack.Screen name="StuList" component={StuList} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
