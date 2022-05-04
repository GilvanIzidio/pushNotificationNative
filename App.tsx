import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  async function getToken() {
    const token = await messaging().getToken();

    console.log('TOKEN ', token);
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: '#000'}}>Push</Text>
    </View>
  );
};

export default App;
