import React from 'react';
import {  Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select } from "native-base";
const Login = props => {
    async function handleSignUp() {
        props.navigation.replace("Main")

    }

    let [language, setLanguage] = React.useState("en");
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
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input/>
          </FormControl>
          <FormControl>
            <FormControl.Label>School</FormControl.Label>
            <Select shadow={2} minWidth={200} accessibilityLabel="Choose Language" placeholder="Choose Language">
        <Select.Item shadow={2} label="English" value="en" />
        <Select.Item shadow={2} label="Chichewa" value="ch" />

      </Select>
          </FormControl>

          <FormControl>
            <FormControl.Label>Level</FormControl.Label>
            <Select shadow={2} minWidth={200} accessibilityLabel="Choose Language" placeholder="Choose Language">
        <Select.Item shadow={2} label="English" value="en" />
        <Select.Item shadow={2} label="Chichewa" value="ch" />

      </Select>
          </FormControl>
          <Text>Yes, I agree</Text>
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