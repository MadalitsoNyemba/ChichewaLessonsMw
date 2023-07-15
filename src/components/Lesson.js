import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Pressable, HStack, Text } from "native-base";


import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Lesson = ({lesson}) => {
    return(
<View mb={3}>
        <View  bg="white" rounded="lg"  style={styles.card} >
<HStack p={4} justifyContent="space-between">
    <View>
        <VStack space={3}>
            <Text fontSize="md">{lesson.topic}</Text>
            <View mt={2}>
                <HStack space={2}>
                <Ionicons name="ios-star" size={15} color="gold" /> 
            <Text fontSize="xs" color="grey">{lesson.lessonName}</Text>
            <Text fontSize="xs" color="grey">{'\u2B24'}</Text>
            <Text fontSize="xs" color="grey">{lesson.level}</Text>

            </HStack>
            </View>
        </VStack>
    </View>
    <Image
                  style={{
                    width: 60, height: 60,resizeMode: "contain",
                  }}
                  source={require("../assets/lessonsRight.png")}
                />

</HStack>

                    </View>
        </View>
    )
}
const styles = {
    card: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
    },
  };
export default Lesson;