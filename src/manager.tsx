/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './theme/ThemeContext';

// Async storage and redux
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setDarkLightMode } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';

// Screens
import MainScreen from './screens/main';
import LoginScreen from './screens/login';
import ForgotScreen from './screens/forgot';



const Stack = createNativeStackNavigator();

const NavigatorManager = () => {
    const { dlmode } = useSelector(state => state.user);
    const dispatch = useDispatch()

    useEffect(() => {
        getThemeMode();
        
    }, []);

    const getThemeMode = async () => {
        try {
            const mode = await AsyncStorage.getItem('SchemeMode');
            if (mode) {
                dispatch(setDarkLightMode(mode));
            }
        } catch (error) {
            await AsyncStorage.setItem('SchemeMode', dlmode);
            console.log(error);
        }
    }
  return (
    <ThemeProvider theme={dlmode}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                name="Main" 
                component={MainScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                
                <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={
                    
                    { headerShown: false }
                }
                />

                <Stack.Screen 
                name="Forgot" 
                component={ForgotScreen}
                options={
                    
                    { headerShown: false }
                }
                />
            </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
  );
}

export default NavigatorManager;


