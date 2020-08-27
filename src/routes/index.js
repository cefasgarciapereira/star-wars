import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Planets from '../Pages/Planets';
import Planet from '../Pages/Planet';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen 
        name="Planets" 
        component={Planets} 
        options={{headerShown: false}}/>
        <AppStack.Screen 
        name="Planet" 
        component={Planet}/>
    </AppStack.Navigator>    
);

export default AppRoutes;