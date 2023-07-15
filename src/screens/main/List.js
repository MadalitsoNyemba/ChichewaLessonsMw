import React from 'react';
import {   Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select, HStack,Pressable } from "native-base";
const List = props => {
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
        <View pt={10} pl={6}>
        <Text>Selected Topic</Text>
        </View>

        


        <ScrollView h="100%" border="1" borderTopRadius="30"  bg={["#fff"]} mt={3}>

<Pressable  onPress={() => props.navigation.navigate("Detail")}>
<Center w="100%" mt={5}>
<View  bg="primary.300" rounded="md" shadow={3} safeArea p="2" w="90%" maxW="290" py="5">
<HStack justifyContent="space-between" >
    <View>
        <VStack>
            <Text>Hey</Text>
            <Text>Hey</Text>
        </VStack>
    </View>
    <Text>Here</Text>

</HStack>

                    </View>
      
    </Center>
    </Pressable>
      

      
    </ScrollView>    

      
      </View>
    );
}

export default List;