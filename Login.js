import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';


export default function Login({ navigation }) {
    const [Name, setName] = React.useState("");
    const [Password, setPassword] = React.useState("");
    return (

        <View>
            <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: "10%", color: '#A459D1' }}>Login</Text>

            <Image style={{ width: "60%", height: "35%", borderRadius: 20, alignSelf: 'center', marginTop: "10%" }} source={require('./student-logo.jpg')} />

            <TextInput
                label="User Name"
                value={Name}
                mode="flat"
                onChangeText={Name => setName(Name)}
                style={{
                    marginTop: "10%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <TextInput
                label="Password"
                value={Password}
                mode="flat"
                onChangeText={Password => setPassword(Password)}
                style={{
                    marginTop: "5%",
                    width: "70%",
                    alignSelf: 'center'
                }}
            />

            <Button mode="contained" onPress={() => navigation.navigate('DrawerNav')} style={{
                marginTop: "10%",
                width: "45%",
                alignSelf: 'center'
            }}>
                Login
            </Button>

            <Button mode="text" onPress={() => console.log('Forgot Password Pressed')} style={{
                marginTop: "5%",
                width: "45%",
                alignSelf: 'center'
            }}>
                Fogot Password?
            </Button>
        </View>
    )
}