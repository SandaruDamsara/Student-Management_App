import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default function Tes() {
    const [Name, setName] = React.useState("");
    const [Password, setPassword] = React.useState("");
    return (
        <View>

            <TextInput
                label="User Name"
                value={Name}
                mode="flat"
                onChangeText={Name => setName(Name)}
            />

            <TextInput
                label="Password"
                value={Password}
                mode="flat"
                onChangeText={Password => setPassword(Password)}
            />

            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>

        </View>
    )
}