import React from 'react';
import {  Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select, HStack } from "native-base";
const Home = ({navigation}) => {
    let [language, setLanguage] = React.useState("en");
    React.useEffect(() => {
        async function setData() {
          
          const langData = await AsyncStorage.getItem("selectedLanguage");
          setLanguage(langData)
         
        }
        setData();
      }, []);

    return (
      <ScrollView p={5}>
        <View>
        <Text>Welcome Johnson Doe</Text>
        </View>

        <View mt={5}>
            <Text>Topic for</Text>
            <View mt={3}>  
            <ScrollView horizontal={true}>

                <HStack space={3} >
                    
                    <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} >
                        <Text>mememmememe</Text>
                    </Center>

                    <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} >
                        <Text>mememmememe</Text>
                    </Center>

                    <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} >
                        <Text>mememmememe</Text>
                    </Center>

                    <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} >
                        <Text>mememmememe</Text>
                    </Center>

                    <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} >
                        <Text>mememmememe</Text>
                    </Center>
                   
                </HStack>
                </ScrollView>

            </View>
        </View>

        <View mt={5}>
        <Text>Recommendations</Text>
        </View>

        <View mt={3}>
        <View  bg="primary.300" rounded="md" shadow={3} >
<HStack p={6} justifyContent="space-between">
    <View>
        <VStack>
            <Text>Hey</Text>
            <Text>Hey</Text>
        </VStack>
    </View>
    <Text>Here</Text>

</HStack>

                    </View>
        </View>
      
      </ScrollView>
    );
}

export default Home;