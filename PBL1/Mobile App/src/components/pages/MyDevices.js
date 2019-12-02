import React from 'react';
import { View, ScrollView } from 'react-native';
import { LogoHeader } from '../molecules';
import { CollapsibleList } from '../organisms';

const SECTIONS = [];

function MyDevices({ navigation }) {
    return (
        <View style={styles.container}>
            <LogoHeader title='Meus Dispositivos' />
            <ScrollView contentContainerStyle={styles.content}>
                <CollapsibleList sections={SECTIONS} />
            </ScrollView>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    content: {
        flexGrow: 1,
        padding: 20
    },

}
export { MyDevices };