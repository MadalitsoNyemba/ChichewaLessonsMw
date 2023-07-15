import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select, HStack,Pressable,Text } from "native-base";
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
      <View bg="#95B6FF">
        <View p={30} h={100} >
        <Text color="white" fontSize="3xl">Title</Text>
        </View>

        


        <ScrollView h="90%" border="1" borderTopRadius="30"  bg={["#fff"]} mt={3} mb={5}>

<View p={5} >
<Text color="grey" fontSize="xl">Description</Text>
<Text fontSize="sm" mt={3} >
Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description Description Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description DescriptionDescription Description Description Description DescriptionDescription Description Description Description Description
</Text>

</View>
      
      

      
    </ScrollView>    

      
      </View>
    );
}

export default Detail;