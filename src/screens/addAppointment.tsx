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
import DatePicker from 'react-native-date-picker';
import ContactListComponent from '../components/ContactList';


const AddAppointmentScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [selectContact, setSelectContact] = useState(false);
    const [selectedCT, setSelectedCT] = useState('Lead')

    const [schedDate, setSchedDate] = useState(new Date());
    const [schedDateOpen, setSchedDateOpen] = useState(false);

    const [schedTime, setSchedTime] = useState(new Date());
    const [schedTimeOpen, setSchedTimeOpen] = useState(false);

    const formatDate = (date: Date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      };
    const formatTime = (time: Date) => {
    return time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
    };
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
                onPress={() => setSelectContact(!selectContact)}
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
            <GHITextInput placeholder={'Phone (Optional)'} onChangeText={function (value: React.SetStateAction<string>): void {
                throw new Error('Function not implemented.');
            } }            />
            <GHITextInput placeholder={'Email (Optional)'} onChangeText={function (value: React.SetStateAction<string>): void {
                throw new Error('Function not implemented.');
            } }            />
        
            <RowView alignItem='center' justifyContent='space-between'>
                <View style={{width: 220}}>
                    <GHITextInput placeholder={`${formatDate(schedDate)}`} onChangeText={() => {}} editable={false}  />
                </View>
                <TouchableOpacity
                        onPress={() => setSchedDateOpen(!schedDateOpen)}
                    >
                    <RowView gap={5} backgroundColor={theme.primary} height={46} width={100} borderRadius={5} alignItem='center' justifyContent='center'>
                        <Iconify icon='mdi-light:calendar' size={22} color={'#fff'}/>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: '#fff'}}>Date</Text>
                    </RowView>
                </TouchableOpacity>
            </RowView>
            <RowView alignItem='center' justifyContent='space-between'>
                <View style={{width: 220}}>
                    <GHITextInput placeholder={`${formatTime(schedTime)}`} onChangeText={() => {}} editable={false}  />
                </View>
                <TouchableOpacity 
                        onPress={() => setSchedTimeOpen(!schedTimeOpen)}
                    >
                    <RowView gap={5} backgroundColor={theme.primary} height={46} width={100} borderRadius={5} alignItem='center' justifyContent='center'>
                        <Iconify icon='fluent-mdl2:date-time' size={20} color={'#fff'}/>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: '#fff'}}>Time</Text>
                    </RowView>
                </TouchableOpacity>
            </RowView>
        </ColumnView>
        <ColumnView paddingHorizontal={15} marginTop={15}>
            <TouchableOpacity 
                    onPress={() => setSchedTimeOpen(!schedTimeOpen)}
                >
                <RowView gap={5} backgroundColor={theme.primary} height={46} borderRadius={5} alignItem='center' justifyContent='center'>
                    <Iconify icon='ion:calendar-outline' size={20} color={'#fff'}/>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: '#fff'}}>Set Appointment</Text>
                </RowView>
            </TouchableOpacity>
        </ColumnView>


        <DatePicker
            modal
            mode="date"
            open={schedDateOpen}
            date={schedDate}
            onConfirm={(date) => {
                setSchedDateOpen(false);
                setSchedDate(date);
            }}
            onCancel={() => {
                setSchedDateOpen(false);
            }}
        />
        <DatePicker
            modal
            mode="time"
            open={schedTimeOpen}
            date={schedTime}
            onConfirm={(time) => {
                setSchedTimeOpen(false);
                setSchedTime(time);
            }}
            onCancel={() => {
                setSchedTimeOpen(false);
            }}
        />


        <GHIModal title={'Select Contact'} alignment={'center'} isVisible={selectContact} onClose={() => setSelectContact(!selectContact)}>
            <ContactListComponent 
                
            />
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