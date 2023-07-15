
import React from 'react';
import AppNavigator from './src/navigation/MainNavigation';
import { NativeBaseProvider} from "native-base";
import { MainProvider } from './src/Context/MainContext';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://eu-west-2.cdn.hygraph.com/content/clk2taisk05o601uk8909g4tj/master",
    cache: new InMemoryCache()
  });
export default () => {
    return ( 
        <ApolloProvider client={client}>
        <MainProvider>
<NativeBaseProvider>
        <AppNavigator/>
        </NativeBaseProvider>

        </MainProvider>
        </ApolloProvider>

    );
};