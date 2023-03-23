import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default function AddStudent({ navigation }) {

    const [std_id, setStd_id] = React.useState("");
    const [std_name, setStd_name] = React.useState("");
    const [std_address, setStd_address] = React.useState("");
    const [registered_date, setRegistered_date] = React.useState("");
    const [course, setCourse] = React.useState("");

    const SaveStudent = () => {
        fetch('http://192.168.249.21:3000/api/v1/student', {
            method: 'POST',
            body: JSON.stringify({
                std_id: std_id,
                std_name: std_name,
                std_address: std_address,
                registered_date: registered_date,
                course: course,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    return (
        <View>
            <Text>AddStudent</Text>

            <TextInput
                label="Student ID"
                value={std_id}
                mode="flat"
                onChangeText={std_id => setStd_id(std_id)}
                style={{
                    marginTop: "10%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <TextInput
                label="Name"
                value={std_name}
                mode="flat"
                onChangeText={std_name => setStd_name(std_name)}
                style={{
                    marginTop: "5%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <TextInput
                label="Address"
                value={std_address}
                mode="flat"
                onChangeText={std_address => setStd_address(std_address)}
                style={{
                    marginTop: "5%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <TextInput
                label="Registered Date"
                value={registered_date}
                mode="flat"
                onChangeText={registered_date => setRegistered_date(registered_date)}
                style={{
                    marginTop: "5%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <TextInput
                label="Course"
                value={course}
                mode="flat"
                onChangeText={course => setCourse(course)}
                style={{
                    marginTop: "5%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <Button mode="contained" onPress={SaveStudent} style={{
                marginTop: "10%",
                width: "45%",
                alignSelf: 'center'
            }}>
                Add Student
            </Button>
        </View>
    )
}