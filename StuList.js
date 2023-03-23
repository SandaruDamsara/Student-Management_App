import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { Dialog, Portal, Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';


export default function StuList({ route, navigation }) {


    const { id } = route.params;

    // const [std_id, setStd_id] = React.useState("");
    // const [std_name, setStd_name] = React.useState("");
    // const [std_address, setStd_address] = React.useState("");
    // const [registered_date, Setregistered_date] = React.useState("");
    // const [course, setCourse] = React.useState("");



    const stuid = JSON.stringify(id)

    const [data, setData] = useState([])

    const loadData = () => {

        fetch(`http://192.168.249.21:3000/api/v1/student/getOne/${stuid}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }
    // setData(json)

    useEffect(() => {
        loadData();
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: "10%", color: '#A459D1' }}>Student Details</Text>
            {/* <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: "10%", color: '#A459D1' }}>{JSON.stringify(id)}</Text> */}



            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: "10%", color: 'black' }}>ID: {JSON.stringify(item.std_id)}</Text>

                            <TextInput
                                label="Name"
                                value={item.std_name}
                                mode="flat"
                                editable={false}
                                //onChangeText={std_name => setStd_name(std_name)}
                                style={{
                                    marginTop: "10%",
                                    width: "70%",
                                    alignSelf: 'center'
                                }}
                            />

                            <TextInput
                                label="Address"
                                value={item.std_address}
                                mode="flat"
                                editable={false}
                                //onChangeText={std_name => setStd_name(std_name)}
                                style={{
                                    marginTop: "10%",
                                    width: "70%",
                                    alignSelf: 'center'
                                }}
                            />

                            <TextInput
                                label="Registered Date"
                                value={item.registered_date}
                                mode="flat"
                                editable={false}
                                //onChangeText={std_name => setStd_name(std_name)}
                                style={{
                                    marginTop: "10%",
                                    width: "70%",
                                    alignSelf: 'center'
                                }}
                            />

                            <TextInput
                                label="Course"
                                value={item.course}
                                mode="flat"
                                editable={false}
                                //onChangeText={std_name => setStd_name(std_name)}
                                style={{
                                    marginTop: "10%",
                                    width: "70%",
                                    alignSelf: 'center'
                                }}
                            />

                            {/* <Text style={{ color: 'black', marginTop: 20 }}>{item.std_id}</Text>
                            <Text style={{ color: 'black', marginTop: 20 }}>{item.std_name}</Text>
                            <Text style={{ color: 'black', marginTop: 20 }}>{item.std_address}</Text>
                            <Text style={{ color: 'black', marginTop: 20 }}>{item.registered_date}</Text>
                            <Text style={{ color: 'black', marginTop: 20 }}>{item.course}</Text>
                            <Text style={{ color: 'black', marginTop: 20 }}>{item.image}</Text> */}


                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />


            {/* 

            <TextInput
                label="Name"
                value={std_name}
                mode="flat"
                editable={false}
                onChangeText={std_name => setStd_name(std_name)}
                style={{
                    marginTop: "10%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />


            <TextInput
                label="Address"
                value={std_address}
                mode="flat"
                editable={false}
                onChangeText={std_address => setStd_address(std_address)}
                style={{
                    marginTop: "10%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <TextInput
                label="Registered Date"
                value={registered_date}
                mode="flat"
                editable={false}
                onChangeText={registered_date => Setregistered_date(registered_date)}
                style={{
                    marginTop: "10%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <TextInput
                label="Course"
                value={course}
                mode="flat"
                editable={false}
                onChangeText={course => setCourse(course)}
                style={{
                    marginTop: "10%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            /> */}
        </View>
    )
}