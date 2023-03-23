import { View } from 'react-native'
import React from 'react'
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { Dialog, Portal, Text } from 'react-native-paper';

export default function AllUsers() {
    const [visible, setVisible] = React.useState(false);

    const hideDialog = () => setVisible(false);


    // const showModal = () => setVisible(true);
    // const hideModal = () => setVisible(false);
    // const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        // <View>
        //     <Text style={{ fontSize: 50, alignSelf: 'center', marginTop: "10%", color: '#A459D1' }}>All Users</Text>
        // </View>

        // <Provider>
        //     <Portal>
        //         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        //             <Text>Example Modal.  Click outside this area to dismiss.</Text>
        //         </Modal>
        //     </Portal>
        //     <Button style={{ marginTop: 30 }} onPress={showModal}>
        //         Show
        //     </Button>
        // </Provider>

        // <Portal>
        //     <Dialog visible={visible} onDismiss={hideDialog}>
        //         <Dialog.ScrollArea>
        //             <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
        //                 <Text>This is a scrollable area</Text>
        //             </ScrollView>
        //         </Dialog.ScrollArea>
        //     </Dialog>
        // </Portal>
        <Text>This is users</Text>
    )
}