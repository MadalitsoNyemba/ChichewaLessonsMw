import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/auth/Login';
import Home from '../screens/main/Home';
import List from '../screens/main/List';
import Detail from '../screens/main/Detail';
import Profile from '../screens/main/Profile';
import OnboardingScreen from '../screens/OnBoarding';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MainContext, MainProvider } from '../Context/MainContext';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();



const MainStack = createNativeStackNavigator();
function MainStackScreen({ route, navigation }) {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="List" component={List} />
      <MainStack.Screen name="Detail" component={Detail} />
    </MainStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainBottomTabs() {
  return (
    <Tab.Navigator
      // screenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3D3270',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={MainStackScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const AppNavigator = props => {

    const { loggedIn, setLoggedIn,firstLaunch, setFirstLaunch } = useContext(MainContext);
  React.useEffect(() => {
    async function setData() {

      const appData = await AsyncStorage.getItem("appLaunched");
      const loginData = await AsyncStorage.getItem("userName");
      console.log("appData:"  + appData)

      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }

      if (loginData == null) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }


    }
    setData();

  }, []);
  // console.log(loggedIn)

  return (
    firstLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator>
          
          {loggedIn ?(
            <Stack.Screen options={{ headerShown: false }} name="Main" component={MainBottomTabs} />
           ):(

            firstLaunch ? (
              <Stack.Screen
                options={{ headerShown: false }}
                name="OnboardingScreen"
                component={OnboardingScreen}
              />
            ):(

          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />)
           )} 



        </Stack.Navigator>
      </NavigationContainer>
    )
  )
};



export default AppNavigator