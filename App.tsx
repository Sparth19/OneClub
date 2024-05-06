import React, {FC, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/navigators/AppNavigator';
import {persistor, store} from './src/store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-devsettings/withAsyncStorage';
import SplashScreen from './src/screens/Login/SplashScreen';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App: FC = () => {
  useEffect(() => {
    // Get the device token
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    messaging()
      .getToken()
      .then(token => {
        console.log('FCM:', token);
      });
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived! onMessage', remoteMessage);
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log(
        'A new FCM message arrived! setBackgroundMessageHandler',
        JSON.stringify(remoteMessage),
      );
    });

    messaging().onNotificationOpenedApp(async remoteMessage => {
      console.log(
        'A new FCM message arrived! onNotificationOpenedApp',
        JSON.stringify(remoteMessage),
      );
    });

    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        console.log(
          'A new FCM message arrived! getInitialNotification',
          JSON.stringify(remoteMessage),
        );
      });

    messaging().onMessage(async remoteMessage => {
      console.log(
        'A new FCM message arrived! onMessage',
        JSON.stringify(remoteMessage),
      );
    });

    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
