import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/auth/Login';
import Home from '../screens/main/Home';
import OnboardingScreen from '../screens/OnBoarding';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
function AuthStackScreen({ route,navigation }) {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login}  />
    </AuthStack.Navigator>
  );
}


const MainStack = createNativeStackNavigator();
function MainStackScreen({ route,navigation }) {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={Home}  />
    </MainStack.Navigator>
  );
}



 const AppNavigator = () => {

    const [firstLaunch, setFirstLaunch] = React.useState(null);

    React.useEffect(() => {
      async function setData() {
        
        const appData = await AsyncStorage.getItem("appLaunched");

        if (appData == null) {
          setFirstLaunch(true);
          AsyncStorage.setItem("appLaunched", "false");
        } else {
          setFirstLaunch(false);
        }
      }
      setData();
    }, []);
    // console.log(firstLaunch)

    return (
        firstLaunch != null && (
  <NavigationContainer>
    <Stack.Navigator>
        {firstLaunch && (
          <Stack.Screen
            options={{ headerShown: false }}
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
        )}
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }}  name="Main" component={MainStackScreen} />
         
      </Stack.Navigator>
  </NavigationContainer>
    )
    )
};



export default AppNavigator