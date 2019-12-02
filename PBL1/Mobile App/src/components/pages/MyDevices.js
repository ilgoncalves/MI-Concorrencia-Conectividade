import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, Text, Alert, RefreshControl } from 'react-native';
import { Api } from '~/services/api'
import { LogoHeader } from '../molecules';
import { CollapsibleList } from '../organisms';
import AsyncStorage from '@react-native-community/async-storage'


function MyDevices({ navigation }) {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(false);

    getMyDevices = async () => {
        try {
            setLoading(true);

            const user_id = await AsyncStorage.getItem('user_id');
            console.log(user_id)
            const response = await Api.get('/getMyTopics', { user_id });
            console.log('RESPONSE GETMyDEVICES', response)
            if (response) {
                setSections(response)
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            Alert.alert(error.message)
            console.log('ERROR GETMyDEVICES', error)
        }
    }
    useEffect(() => {
        getMyDevices();
    }, [])

    onRefresh = () => {
        getMyDevices();
    }

    return (
        <View style={styles.container}>
            <LogoHeader title='Meus Dispositivos' />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        tintColor='#343434'
                        refreshing={loading}
                        onRefresh={() => this.onRefresh()}
                    />
                }
                contentContainerStyle={[styles.content, (sections.length == 0) && { justifyContent: 'center' }]}
            >
                {
                    loading ? (
                        <ActivityIndicator size='large' color='#343434' />
                    ) : (
                            <CollapsibleList loadMyDevices={getMyDevices} myDevice sections={sections} />
                        )
                }
                {
                    ((sections.length == 0) && (!loading)) && (
                        <Text
                            style={styles.text}
                        >
                            {`Você ainda não se inscreveu em nenhum Dispositivo!`}
                        </Text>
                    )
                }
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
        padding: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    }
}
export { MyDevices };