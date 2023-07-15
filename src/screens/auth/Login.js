import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select,CheckIcon,Pressable } from "native-base";
import { MainContext,MainProvider } from '../../Context/MainContext';
import LinearGradient from 'react-native-linear-gradient'
const Login = props => {
    const {language, setLanguage, userName, setUserName, userLevel, setUserLevel} = useContext(MainContext);

    async function handleSignUp() {

        AsyncStorage.setItem("userName", userName);
        AsyncStorage.setItem("userLevel", userLevel);

        props.navigation.replace("Main")

    }

    React.useEffect(() => {
        async function setData() {
          const langData = await AsyncStorage.getItem("selectedLanguage");
          setLanguage(langData)
        }
        setData();
      }, []);

    return (
      <View bg={["#95B6FF"]}>
        <View>
        <Flex direction="row" justifyContent={"space-between"}>
        <Image size="2xl" source={require("../../assets/login.png")} resizeMode="cover"/>
        <Image size="xl" mt={20} source={require("../../assets/welcome.png")} resizeMode="contain"/>
        </Flex>

        </View>

<ScrollView h="100%" border="1" borderTopRadius="30"  bg={["#fff"]}>
<Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="5">
        <Center>
        <Heading size="lg" color="#200A4D" _dark={{
        color: "#200A4D"
      }} fontWeight="bold">
          Sign Up
        </Heading>
        </Center>
     
        <VStack space={3} mt="3">
          <FormControl>
            <FormControl.Label>Enter your name</FormControl.Label>
            <Input placeholder='Your name' onChangeText={text => setUserName(text)}/>
          </FormControl>
          {/* <FormControl>
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input/>
          </FormControl> */}
          {/* <FormControl>
            <FormControl.Label>School</FormControl.Label>
            <Select shadow={2} minWidth={200} accessibilityLabel="Choose Language" placeholder="Choose Language">
        <Select.Item shadow={2} label="English" value="en" />
        <Select.Item shadow={2} label="Chichewa" value="ch" />

      </Select>
          </FormControl> */}

          {/* <FormControl> */}
            <FormControl.Label>Choose your level</FormControl.Label>
            <Select shadow={2} minWidth={200} selectedValue={userLevel} accessibilityLabel="Choose Level" placeholder="Choose Level" _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />
    }}  onValueChange={itemValue => setUserLevel(itemValue)}>
        <Select.Item shadow={2} label="PLSCE" value="PLSCE" />
        <Select.Item shadow={2} label="JCE" value="JCE" />
        <Select.Item shadow={2} label="MSCE" value="MSCE" />
        <Select.Item shadow={2} label="Other" value="Other" />

      </Select>
         

          <Pressable onPress={() => handleSignUp()}>
          <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#95B6FF', '#4718AD']}
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            borderBottomLeftRadius:10,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            marginTop: 16,
            height:40
            }}>
              <Center mt={1}>
            <Text color="white" fontSize="xl">Proceed</Text>
            </Center>
          </LinearGradient>
          </Pressable>

        </VStack>
      </Box>
    </Center>
      
    </ScrollView>    


      
      </View>
    );
}

export default Login;