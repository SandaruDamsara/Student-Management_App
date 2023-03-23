import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Dialog, Portal, Text, Button } from 'react-native-paper';
import { useState } from 'react';
import { Alert, Modal, StyleSheet, Pressable } from 'react-native';

const MyComponent = () => {

    const [modalVisible, setModalVisible] = useState(false);


    // const [visible, setVisible] = React.useState(false);

    // const hideDialog = () => setVisible(false);

    return (
        // <View>
        //     <Button icon="camera" mode="contained" onPress={() =>
        //         <Portal>
        //             <Dialog visible={visible} onDismiss={hideDialog}>
        //                 <Dialog.ScrollArea>
        //                     <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
        //                         <Text>This is a scrollable area</Text>
        //                     </ScrollView>
        //                 </Dialog.ScrollArea>
        //             </Dialog>
        //         </Portal>
        //     }>
        //         Press me
        //     </Button>
        // </View>
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default MyComponent;