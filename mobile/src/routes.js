import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

const AppStack = createStackNavigator();

import Incidents from './pages/incidents';
import Detail from './pages/Detail';
import AboutUs from './pages/AboutUs';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }} >
                <AppStack.Screen name ="Incidents" component={Incidents} />
                <AppStack.Screen name ="Detail" component={Detail} />
                <AppStack.Screen name ="AboutUs" component={AboutUs} />
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}