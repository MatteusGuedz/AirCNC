import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './pages/Login'
import List from './pages/List'
import Book from './pages/Book'

const AppStack = createStackNavigator();

function Routes(){
    return ( 
       <NavigationContainer>
    
          <AppStack.Navigator screenOptions={{ headerShown: false}}>
            <AppStack.Screen name="Login"  component={Login}/>
            <AppStack.Screen name="List" component={List}/>
            <AppStack.Screen name="Book" component={Book}/>
           </AppStack.Navigator>
    
       </NavigationContainer>
        );
    }
    
    export default Routes;
    