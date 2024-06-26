import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { Box, Check, CheckSquareSolid, Eye, EyeClosed, HandCash, NavArrowLeft, Square } from 'iconoir-react-native';
import { GHITextInput } from '../components/GHITextInput';

const ForgotScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    
    // Properties
    const [rememberMe, setRememberMe] = useState(false);
    const [hideShow, setHideShow] = useState(false);
    const handleRememberMe = (value: boolean) => {
        setRememberMe(value);
    }

  return (
    <View style={[styles.body, { backgroundColor: '#fff' }]}>
        <View style={{justifyContent: 'center', marginVertical: 21}}>
            <NavArrowLeft color={theme.primaryDark} width={25} height={25} />
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold' , color: theme.primaryDark, marginTop: 15}}>Forgot Password</Text>
        </View>

        <GHITextInput
            placeholder={'Email'} 
            onChangeText={ () => {}}      
            keyboardType='email-address'
        />

        <TouchableOpacity style={{marginTop: 50, width: '100%'}}>
            <View style={{height: 50, backgroundColor: theme.primary, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold' ,color: theme.primaryDark}}>Continue</Text>
            </View>
        </TouchableOpacity>

        <View style={{marginTop: 30, alignItems: 'center'}}>
            <TouchableOpacity>
                <Text style={{fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Already have an account? Signin.</Text>
            </TouchableOpacity>
            <View style={{position: 'relative', width: '100%', alignItems: 'center', marginVertical: 15}}>
                <View style={{height: 1,width: '100%', backgroundColor: '#666666', position: 'absolute', top: 10}}></View>
                <Text style={{backgroundColor: '#fff', paddingHorizontal: 5, color: theme.primaryDark}}>Or</Text>
            </View>
            <TouchableOpacity>
                <Text style={{fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Register</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    body: {
        width: '100%',
        position: 'relative',
        paddingHorizontal: 21,
        flex: 1
    },
});

export default ForgotScreen;