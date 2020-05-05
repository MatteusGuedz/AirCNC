import React from 'react';
import { AsyncStorage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './pages/Login'
import List from './pages/List'
import Book from './pages/Book'

const AppStack = createStackNavigator();

function Routes(){
    
 
    
         function isLoggedIn() {  
          const user =  AsyncStorage.getItem('user')
                if(user){
                    return true
                }else {
                    return true
                  
                }
             
        }
   

    return ( 
       <NavigationContainer>
    
          <AppStack.Navigator screenOptions={{ headerShown: false}}>
    
         {/* { isLoggedIn ? (  
             
             <>   */}
                 <AppStack.Screen name={"Login"}  component={Login}/>
           
                 <AppStack.Screen name="List" component={List}/>
                 <AppStack.Screen name="Book" component={Book}/>
            {/* </>
             ) : ( 
                 <>   */}
                 {/* </>
             )}   */}
            
            
           </AppStack.Navigator>
    
       </NavigationContainer>
        );
    }
    
    
    export default Routes;
    