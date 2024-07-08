import { useNavigation } from '@react-navigation/native';
import { NavArrowLeft } from 'iconoir-react-native';
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { ColumnView } from '../components/ColumnView';
import { GHITextInput } from '../components/GHITextInput';
import { Iconify } from 'react-native-iconify';
import { RowView } from '../components/RowView';
import GHIModal from '../components/GHIModal';

const AddAppointmentScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [selectedContact, setSelectedContact] = useState();
    const [selectedCT, setSelectedCT] = useState('Lead')
  return (
    <View style={styles.body}>
        <View style={{justifyContent: 'center', marginVertical: 21, paddingHorizontal: 15}}>
            <TouchableOpacity
                    onPress={ () => navigation.goBack()}
                >
                <NavArrowLeft color={theme.primaryDark} width={25} height={25} />
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold' , color: theme.primaryDark, marginTop: 15}}>Add Appointment</Text>
        </View>
        <TouchableOpacity style={{paddingHorizontal: 15}}
                onPress={() => {}}
            >
            <RowView alignItem='center' gap={10} backgroundColor='#2222' height={50} paddingHorizontal={10} justifyContent='space-between' borderRadius={5}>
                <Text style={{}}>Select Contact</Text>
                <Iconify icon='oui:arrow-right' size={15} color={theme.primaryDark}/>
            </RowView>  
        </TouchableOpacity>

        <ColumnView paddingHorizontal={15} marginTop={15}>
            <GHITextInput placeholder={'First name'} onChangeText={function (value: React.SetStateAction<string>): void {
                  throw new Error('Function not implemented.');
              } }            />
            <GHITextInput placeholder={'Last name'} onChangeText={function (value: React.SetStateAction<string>): void {
                throw new Error('Function not implemented.');
            } }            />
            <GHITextInput placeholder={'Phone'} onChangeText={function (value: React.SetStateAction<string>): void {
                throw new Error('Function not implemented.');
            } }            />
            <GHITextInput placeholder={'Email'} onChangeText={function (value: React.SetStateAction<string>): void {
                throw new Error('Function not implemented.');
            } }            />
        </ColumnView>


        <GHIModal title={'Contact'} alignment={'center'} isVisible={false} onClose={() => {}}>
            <View>

            </View>
        </GHIModal>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        position: 'relative',
    },
});

export default AddAppointmentScreen;