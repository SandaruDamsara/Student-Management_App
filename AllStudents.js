import { View, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import StuList from './StuList'
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { TouchableRipple } from 'react-native-paper';
import { List } from 'react-native-paper';
import { StyleSheet, Pressable } from 'react-native';
import AddStudent from './AddStudent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function AllStudents({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    const [data, setData] = useState([]);




    const loadData = () => {
        fetch('http://192.168.249.21:3000/api/v1/student/all')
            .then((response) => response.json())
            .then((json) => setData(json));
    }

    const loadStudent = (std_id) => {

        // fetch(`http://192.168.249.21:3000/api/v1/student/getOne/${std_id}`)
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
        navigation.navigate('StuList', { id: std_id })
    }



    useEffect(() => {
        loadData();
    }, []);

    return (

        <View>
            <Text style={{ fontSize: 40, alignSelf: 'center', marginTop: "5%", color: '#A459D1' }}>All Students</Text>
            <TouchableOpacity style={{ backgroundColor: '#AA77FF', height: 35, width: 40, borderRadius: 100, }} onPress={() => navigation.navigate('AddStudent')}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 25 }}>+</Text>
            </TouchableOpacity>

            <FlatList

                data={data}
                renderItem={({ item }) => {
                    return (

                        <View >
                            {/* <Text style={{ color: 'black', marginTop: 20 }}>{item.std_name}</Text>
                            <Text style={{ color: 'black', marginTop: 20 }}>{item.std_address}</Text> */}
                            <TouchableRipple
                                onPress={() => loadStudent(item.std_id)}
                                rippleColor="rgba(0, 0, 0, .32)"

                            >
                                <List.Item
                                    title={item.std_name}
                                    description={item.std_address}
                                    left={props => <List.Icon {...props} icon="folder" />}

                                />
                            </TouchableRipple>
                        </View>

                    )
                }}
                keyExtractor={item => item.std_id}
            />

        </View>
    )
}


