import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { Box, Check, CheckSquareSolid, Eye, EyeClosed, HandCash, Square } from 'iconoir-react-native';
import { GHITextInput } from '../components/GHITextInput';

const LoginScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    
    // Properties
    const [rememberMe, setRememberMe] = useState(false);
    const [hideShow, setHideShow] = useState(false);
    const handleRememberMe = (value: boolean) => {
        setRememberMe(value);
    }

  return (
    <View style={[styles.body, {backgroundColor: theme.primary}]}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
            <HandCash color={'#fff'} width={50} height={50} />
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold' ,color: '#fff'}}>GHI+ BizCard</Text>
        </View>
        
        <GHITextInput
            placeholder={'Email'} 
            onChangeText={ () => {}}      
            keyboardType='email-address'
        />
        <View style={{position: 'relative', justifyContent: 'center'}}>
            <TouchableOpacity
                style={{position: 'absolute', right: 5, top: 13, width: 60, height: 40, backgroundColor: '#f0f0f0', zIndex: 1, alignItems: 'center', justifyContent: 'center'}}
                onPress={() => setHideShow(!hideShow)}
                >
                { hideShow ? (
                    <EyeClosed color={theme.textColor}  width={25} height={25} opacity={0.5}/>
                ) : (
                    <Eye color={theme.textColor}  width={25} height={25} opacity={0.5}/>
                ) }
                
            </TouchableOpacity>
            <GHITextInput
                placeholder={'Password'} 
                onChangeText={ () => {}}      
                secureTextEntry={hideShow}
            />
        </View>

        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center', gap: 10}}
                onPress={() => handleRememberMe(!rememberMe)}
            >
            { rememberMe ? (
                <CheckSquareSolid color={'#fff'} width={20} height={20} />
            ) : (
                <Square color={'#fff'} width={20} height={20} />
            )}
            <Text style={{fontSize: 16, fontFamily: 'Manrope-Regular' ,color: '#fff'}}>Remember me</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{marginTop: 50, width: '100%'}}
                onPress={() => navigation.navigate('Main')}
            >
            <View style={{height: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold' ,color: '#000'}}>Login</Text>
            </View>
        </TouchableOpacity>

        <View style={{marginTop: 30, alignItems: 'center'}}>
            <TouchableOpacity>
                <Text style={{color: '#fff', fontFamily: 'Manrope-Regular'}}>You don't have an account? Register.</Text>
            </TouchableOpacity>
            <View style={{position: 'relative', width: '100%', alignItems: 'center', marginVertical: 15}}>
                <View style={{height: 1,width: '100%', backgroundColor: '#fff', position: 'absolute', top: 10}}></View>
                <Text style={{backgroundColor: theme.primary, paddingHorizontal: 5, color: '#fff'}}>Or</Text>
            </View>
            <TouchableOpacity
                    onPress={ () => navigation.navigate('Forgot')}
                >
                <Text style={{color: '#fff', fontFamily: 'Manrope-Regular'}}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
        paddingHorizontal: 21,
    },
});

export default LoginScreen;