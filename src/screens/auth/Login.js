import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Image, Flex, Box, ScrollView, VStack, FormControl, Input, Button, Center, Heading, Select, CheckIcon, Pressable } from "native-base";
import { MainContext, MainProvider } from '../../Context/MainContext';
import LinearGradient from 'react-native-linear-gradient';
import {Alert} from 'react-native';
import i18n from '../../translations/i8n';
const Login = props => {

  const { language, setLanguage, userName, setUserName, userLevel, setUserLevel, loggedIn, setLoggedIn  } = useContext(MainContext);
  i18n.locale=language

  async function handleSignUp() {
    if(userName == null || userLevel == null){
      Alert.alert(i18n.t('login.fill'), i18n.t('login.provide'));
    }else{
      AsyncStorage.setItem("userName", userName);
      AsyncStorage.setItem("userLevel", userLevel);
      setLoggedIn(true)
  
    }

    

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
          <Image size="2xl" source={require("../../assets/login.png")} resizeMode="cover" />
          <Image size="xl" mt={20} source={require("../../assets/welcome.png")} resizeMode="contain" />
        </Flex>

      </View>

      <ScrollView h="100%" border="1" borderTopRadius="30" bg={["#fff"]}>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="5">
            <Center>
              <Heading size="lg" color="#200A4D" _dark={{
                color: "#200A4D"
              }} fontWeight="bold">
                {i18n.t('login.signUp')}
              </Heading>
            </Center>

            <VStack space={3} mt="3">
              <FormControl>
                <FormControl.Label>{i18n.t('login.name')}</FormControl.Label>
                <Input placeholder={i18n.t('login.name')} onChangeText={text => setUserName(text)} />
              </FormControl>
            
              <FormControl.Label>{i18n.t('login.level')}</FormControl.Label>
              <Select shadow={2} minWidth={200} selectedValue={userLevel} accessibilityLabel={i18n.t('login.level')} placeholder={i18n.t('login.level')} _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
              }} onValueChange={itemValue => setUserLevel(itemValue)}>
                <Select.Item shadow={2} label="PLSCE" value="PLSCE" />
                <Select.Item shadow={2} label="JCE" value="JCE" />
                <Select.Item shadow={2} label="MSCE" value="MSCE" />
                <Select.Item shadow={2} label="Other" value="Other" />

              </Select>


              <Pressable onPress={() => handleSignUp()}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#95B6FF', '#4718AD']}
                  style={{
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginTop: 16,
                    height: 40
                  }}>
                  <Center mt={1}>
                    <Text color="white" fontSize="xl">{i18n.t('login.proceed')}</Text>
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