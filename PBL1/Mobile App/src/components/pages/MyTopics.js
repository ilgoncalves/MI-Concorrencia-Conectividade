import React from 'react';
import { View, ScrollView } from 'react-native';
import { LogoHeader } from '../molecules';
import { CollapsibleList } from '../organisms';

const SECTIONS = [];

function MyTopics({ navigation }) {
    return (
        <View style={styles.container}>
            <LogoHeader title='Tópicos' />
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
export { MyTopics };