import { useNavigation } from '@react-navigation/native';
import { NavArrowLeft } from 'iconoir-react-native';
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { ColumnView } from '../components/ColumnView';
import { GHITextInput } from '../components/GHITextInput';
import { Iconify } from 'react-native-iconify';
import { RowView } from '../components/RowView';

const AddVideoScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
  return (
    <View style={styles.body}>
        <View style={{justifyContent: 'center', marginVertical: 21}}>
            <TouchableOpacity
                    onPress={ () => navigation.goBack()}
                >
                <NavArrowLeft color={theme.primaryDark} width={25} height={25} />
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold' , color: theme.primaryDark, marginTop: 15}}>Add Video Attachment</Text>
        </View>
        <ColumnView>
            <Text>Title</Text>
            <GHITextInput 
                placeholder={'Enter your Title'} 
                onChangeText={() => {}}    
            />
            <Text>Upload Thumbnail</Text>
            <TouchableOpacity style={{height: 50, backgroundColor: theme.primary, justifyContent: 'center', alignItems: 'center', marginTop: 15, borderRadius: 25}}
                    onPress={() => {}}
                >
                <RowView gap={10} alignItem='center'>
                    <Iconify icon='material-symbols:upload' size={25} color={'#fff'}/>
                    <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: '#fff'}}>
                        Upload
                    </Text>
                </RowView>
            </TouchableOpacity>

            <View style={{height: 150, backgroundColor: theme.primary, marginVertical: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Iconify icon='mage:image' size={100} color={'#fff'}/>
            </View>
            <Text>Youtube ID</Text>
            <GHITextInput 
                placeholder={'ex. U2iMKTKUQLs'} 
                onChangeText={() => {}}    
            />
            <TouchableOpacity style={{height: 50, backgroundColor: theme.primary, justifyContent: 'center', alignItems: 'center', marginTop: 15, borderRadius: 25}}
                    onPress={() => {}}
                >
                <RowView gap={10} alignItem='center'>
                    <Iconify icon='iconoir:add-media-video' size={20} color={'#fff'}/>
                    <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: '#fff'}}>
                        Save Video
                    </Text>
                </RowView>
            </TouchableOpacity>
        </ColumnView>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        position: 'relative',
        paddingHorizontal: 21,
    },
});

export default AddVideoScreen;