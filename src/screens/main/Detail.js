import React from 'react';
import {  Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select, HStack,Pressable } from "native-base";
const Detail = ({navigation}) => {
    let [language, setLanguage] = React.useState("en");
    React.useEffect(() => {
        async function setData() {
          
          const langData = await AsyncStorage.getItem("selectedLanguage");
          setLanguage(langData)
         
        }
        setData();
      }, []);

    return (
      <View >
        <View p={30} h={100} >
        <Text >Title</Text>
        </View>

        


        <ScrollView h="100%" border="1" borderTopRadius="30"  bg={["#fff"]} mt={3}>

<Center w="100%" mt={5}>
<View  w="100%" maxW="290" py="2">
<Text>Title</Text>
<Text>Descriptin</Text>

</View>
      
    </Center>
      

      
    </ScrollView>    

      
      </View>
    );
}

export default Detail;