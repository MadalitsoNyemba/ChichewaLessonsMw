
import React from 'react';
import AppNavigator from './src/navigation/MainNavigation';
import { NativeBaseProvider} from "native-base";
export default () => {
    return ( 
<NativeBaseProvider>
        <AppNavigator/>
        </NativeBaseProvider>

    );
};