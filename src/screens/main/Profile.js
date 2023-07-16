import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Flex, Box, ScrollView, VStack, FormControl, Image, Button, Center, Heading, Select, HStack, Pressable, CheckIcon, Text } from "native-base";
import { MainContext, MainProvider } from '../../Context/MainContext';
import i18n from '../../translations/i8n';
const Profile = ({ navigation }) => {
  const { userName, userLevel, setUserLevel, language, setLanguage } = useContext(MainContext);

  async function setLev(level) {
    AsyncStorage.setItem("userLevel", level);
    setUserLevel(level)
  }
  i18n.locale=language
  async function setLang(lang) {
    AsyncStorage.setItem("selectedLanguage", lang);
    setLanguage(lang)
  }
  return (
    <View bg="#95B6FF" >
      <Center p={30} h={250} >
        <Image
          style={{
            width: 100, height: 100, resizeMode: "contain",
          }}
          source={require("../../assets/usr.png")}
        />
        <Text color="white" fontSize="3xl">{userName} </Text>
      </Center>




      <ScrollView h="100%" border="1" borderTopRadius="30" bg={["#fff"]} mt={3}>
        <View mt={5} p={5}>
          <FormControl.Label>{i18n.t('profile.level')} </FormControl.Label>
          <Select shadow={2} minWidth={200} selectedValue={userLevel} accessibilityLabel="Choose Level" placeholder="Choose Level" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
          }} onValueChange={itemValue => setLev(itemValue)}>
            <Select.Item shadow={2} label="PLSCE" value="PLSCE" />
            <Select.Item shadow={2} label="JCE" value="JCE" />
            <Select.Item shadow={2} label="MSCE" value="MSCE" />
            <Select.Item shadow={2} label="Other" value="Other" />

          </Select>



          <FormControl.Label mt={5}>{i18n.t('profile.language')}</FormControl.Label>
          <Select shadow={2} minWidth={200} selectedValue={language} accessibilityLabel="Choose Language" placeholder="Choose Language" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
          }} onValueChange={itemValue => setLang(itemValue)}>
            <Select.Item shadow={2} label="English" value="English" />
            <Select.Item shadow={2} label="Chichewa" value="Chichewa" />


          </Select>


        </View>


      </ScrollView>


    </View>
  );
}

export default Profile;