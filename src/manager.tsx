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
import AllReviewsScreen from './screens/reviews/allReviews';
import ProfileScreen from './screens/profile';
import ContactDetailsScreen from './screens/ContactDetails';
import AddVideoScreen from './screens/addVideo';
import AppointmentsScreen from './screens/appointments';
import AddAppointmentScreen from './screens/addAppointment';
import AddContactScreen from './screens/addContact';
import SettingsScreen from './screens/settings';
import TrainingScreen from './screens/training';
import MapScreen from './screens/Map';
import LeaderBoardScreen from './screens/leaderBoard';



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
                <Stack.Screen 
                name="AllReviews" 
                component={AllReviewsScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="ContactDetails" 
                component={ContactDetailsScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="AddVideo" 
                component={AddVideoScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="Appointments" 
                component={AppointmentsScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="AddAppointment" 
                component={AddAppointmentScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="AddContact" 
                component={AddContactScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="Training" 
                component={TrainingScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="Map" 
                component={MapScreen}
                options={
                    
                    { headerShown: false }
                }
                />
                <Stack.Screen 
                name="LeaderBoard" 
                component={LeaderBoardScreen}
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


