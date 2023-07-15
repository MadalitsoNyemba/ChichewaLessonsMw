import React, { useContext } from 'react';
import {  Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Pressable, HStack, FlatList } from "native-base";
import { MainContext,MainProvider } from '../../Context/MainContext';

import * as RNLocalize from "react-native-localize";
import { useQuery } from "@apollo/client";
import { LESSONS_QUERY } from "../../gql/Query";

const Home = props => {
    const { data, loading } = useQuery(LESSONS_QUERY);
  
    const translations = {
        en: require("../../translations/en.json"),
        ch: require("../../translations/ch.json"),
      };

const {userName,setUserName,setUserLevel, userLevel, language} = useContext(MainContext);



//   const helloWorldString = translations[language].hello;


console.log(data)
    
// let lessons = data.lessons.filter((item) => item.level == userLevel)
// let topics = data.lessons.filter((item) => item.level == userLevel).reduce((acc, cur) => {
//     const existingItem = acc.find(item => cur.topic === item.topic);
//     if(existingItem) {
//        existingItem.count++;
//     }
//     else {
//        acc.push({...cur, count: 1});    
//     }
//     return acc;
//  }, [])


React.useEffect(() => {
    async function setData() {
      const userNameData = await AsyncStorage.getItem("userName");
      const userLevelData = await AsyncStorage.getItem("userLevel");
      setUserName(userNameData)
      setUserLevel(userLevelData)
    }
    setData();
  }, []);

    return (
      <ScrollView p={5}>
        <View>
        {/* <Text>{helloWorldString} {userName}</Text> */}
        </View>

        <View mt={5}>
            <Text>Topics for {userLevel}</Text>
            <View mt={3}>  
            <ScrollView horizontal={true}>

                <HStack space={3} >
                <Pressable  onPress={() => props.navigation.navigate("List")}>
                    <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3}>
                        <Text>mememmememe</Text>
                    </Center>
                    </Pressable>

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
        {/* {
      lessons.map((lesson)=>
      <View mt={3}>
        <View  bg="primary.300" rounded="md" shadow={3} >
<HStack p={6} justifyContent="space-between">
    <View>
        <VStack space={3}>
            <Text>{lesson.topic}</Text>
            <Text>{lesson.lessonName}</Text>
        </VStack>
    </View>
    <Text>Here</Text>

</HStack>

                    </View>
        </View>
      )
    } */}
  
        
      
      </ScrollView>
    );
}

export default Home;