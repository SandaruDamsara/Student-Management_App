import { View, Text } from 'react-native'
import React from 'react'
import AllStudents from './AllStudents'
import AllUsers from './AllUsers'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import StuList from './StuList';
import MyComponent from './MyComponent';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="AllStudents" component={AllStudents} />
            <Drawer.Screen name="AllUsers" component={AllUsers} />
            <Drawer.Screen name="MyComponent" component={MyComponent} />

        </Drawer.Navigator>
    )
}