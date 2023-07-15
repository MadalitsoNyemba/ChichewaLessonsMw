import React, { useContext } from 'react';
import {  Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select,CheckIcon } from "native-base";
import { MainContext,MainProvider } from '../../Context/MainContext';
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
            <FormControl.Label>Name</FormControl.Label>
            <Input onChangeText={text => setUserName(text)}/>
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
            <FormControl.Label>Level</FormControl.Label>
            <Select shadow={2} minWidth={200} selectedValue={userLevel} accessibilityLabel="Choose Level" placeholder="Choose Level" _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />
    }}  onValueChange={itemValue => setUserLevel(itemValue)}>
        <Select.Item shadow={2} label="PLSCE" value="PLSCE" />
        <Select.Item shadow={2} label="JCE" value="JCE" />
        <Select.Item shadow={2} label="MSCE" value="MSCE" />
        <Select.Item shadow={2} label="Other" value="Other" />

      </Select>
          {/* </FormControl> */}
          {/* <Text>Yes, I agree</Text> */}
          <Button mt="2" borderTopRadius={10} borderBottomLeftRadius={10} colorScheme="indigo" onPress={() => handleSignUp()}>
            Proceed
          </Button>
        </VStack>
      </Box>
    </Center>
      
    </ScrollView>    


      
      </View>
    );
}

export default Login;