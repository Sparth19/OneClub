import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/navigators/AppNavigator';
import {persistor, store} from './src/store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-devsettings/withAsyncStorage';
import SplashScreen from './src/screens/Login/SplashScreen';

const App: FC = () => {
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
