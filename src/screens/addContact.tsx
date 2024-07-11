import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../theme/ThemeContext'
import { useNavigation } from '@react-navigation/native';
import { NavArrowLeft, NavArrowRight } from 'iconoir-react-native';
import { Iconify } from 'react-native-iconify';
import { GHITextInput } from '../components/GHITextInput';
import { ColumnView } from '../components/ColumnView';
import { SelectList } from 'react-native-dropdown-select-list';
import { RowView } from '../components/RowView';
import { CircleView } from '../components/CircleView';
import GHIModal from '../components/GHIModal';

const AddContactScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation()

    const [selectType, setSelectType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState();

    const [openSelectType, setOpenSelectType] = useState(false);
    const statusData = [
        {key:'1', value:'New'},
        {key:'2', value:'Need Docs'},
        {key:'3', value:'Contacted'},
        {key:'4', value:'Contact Attempted'},
        {key:'5', value:'Onboarding'},
        {key:'6', value:'Verbal Commit'},
        {key:'7', value:'Selling'},
        {key:'8', value:'Prospect'},
        {key:'9', value:'Not Interested'},
        {key:'10', value:'Go Back'},
        {key:'11', value:'Call Back'},
        {key:'12', value:'Not Home'},
        {key:'13', value:'Set Appointment'},
        {key:'14', value:'Signed'},
        {key:'15', value:'Sold'},
    ]

    const userTypeData = [
        {key:'1', value:'Lead'},
        {key:'2', value:'Customer'},
        {key:'3', value:'Recruit'},
        {key:'4', value:'Others'},
    ]
  return (
    // <Iconify icon='fluent-mdl2:date-time' size={20} color={'#fff'}/>
    <View style={styles.body}>
        <View style={{justifyContent: 'center', marginVertical: 21, paddingHorizontal: 15}}>
            <TouchableOpacity
                    onPress={ () => navigation.goBack()}
                >
                <NavArrowLeft color={theme.primaryDark} width={25} height={25} />
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold' , color: theme.primaryDark, marginTop: 15}}>Add Contact</Text>
        </View>
        <View>
            <ScrollView>
                <ColumnView marginTop={15} paddingHorizontal={15}>
                    <TouchableOpacity
                            onPress={ () => setOpenSelectType(!openSelectType)}
                        >
                        <RowView height={46} paddingHorizontal={15} marginVertical={10} justifyContent='space-between' alignItem='center' borderColor={theme.primaryDark} borderWidth={1} borderRadius={10}>
                            { selectType === '' ? (
                                <Text style={{fontSize:14, fontFamily: 'Manrope-Regular', color: '#666666'}}>Select Type</Text>
                            ) : (
                                <Text style={{fontSize:14, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Selected: {selectType}</Text>
                            )}
                            <NavArrowRight color={theme.primaryDark} width={25} height={25} />
                        </RowView>
                    </TouchableOpacity>
                    <GHITextInput placeholder={'First name'} onChangeText={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    } } />
                    <GHITextInput placeholder={'Last name'} onChangeText={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    } } />
                    <GHITextInput placeholder={'Phone (optional)'} onChangeText={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    } } />
                    <GHITextInput placeholder={'Email (optional)'} onChangeText={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    } } />
                    <GHITextInput placeholder={'Address 1'} onChangeText={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    } } />
                    <GHITextInput placeholder={'Address 2'} onChangeText={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    } } />
                    <GHITextInput placeholder={'City'} onChangeText={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    } } />
                    <RowView justifyContent='space-between'>
                        <View style={{width: '48%'}}>
                            <GHITextInput placeholder={'State'} onChangeText={function (value: React.SetStateAction<string>): void {
                                throw new Error('Function not implemented.');
                            } } />
                        </View>
                        <View style={{width: '48%'}}>
                            <GHITextInput placeholder={'Zip Code'} onChangeText={function (value: React.SetStateAction<string>): void {
                                throw new Error('Function not implemented.');
                            } } />
                        </View>
                    </RowView>

                    <TouchableOpacity style={{marginTop: 15}}
                        onPress={() => {}}
                    >
                        <RowView height={46} backgroundColor={theme.primary} borderRadius={5} justifyContent='center' alignItem='center'>
                            <Text style={styles.buttonText}>Save Contact</Text>
                        </RowView>
                    </TouchableOpacity>
                </ColumnView>
                <View style={{height: 150}}></View>
            </ScrollView>
        </View>
        <GHIModal 
            title={'Select Type'} 
            alignment={'center'} 
            isVisible={openSelectType} 
            onClose={ () => setOpenSelectType(!openSelectType)}>
            <ColumnView justifyContent='center' alignItem='center'>
                { userTypeData.map( (item, index) => { 
                    return(
                        <TouchableOpacity key={index} style={{height: 46, justifyContent: 'center'}}
                                onPress={() => setSelectType(item.value)}
                            >
                            <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold',  color: selectType === item.value ? theme.primaryDark: '#666666'}}>{item.value}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ColumnView>
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
    buttonText: {
        fontSize: 14, 
        fontFamily: 'Manrope-Bold', 
        color: '#fff'
    }
});

export default AddContactScreen