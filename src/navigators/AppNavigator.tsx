import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import StockDetailsScreen from '../screens/StockDetails/StockDetailsScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StockDetailsScreen" component={StockDetailsScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  return isAuthenticated ? <HomeNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
