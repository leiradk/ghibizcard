import { useNavigation } from '@react-navigation/native';
import { NavArrowLeft } from 'iconoir-react-native';
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { ColumnView } from '../components/ColumnView';
import { GHITextInput } from '../components/GHITextInput';
import { Iconify } from 'react-native-iconify';
import { RowView } from '../components/RowView';

const AppointmentsScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
  return (
    <View style={styles.body}>
        <View style={{justifyContent: 'center', marginVertical: 21, paddingHorizontal: 15}}>
            <TouchableOpacity
                    onPress={ () => navigation.goBack()}
                >
                <NavArrowLeft color={theme.primaryDark} width={25} height={25} />
            </TouchableOpacity>
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold' , color: theme.primaryDark, marginTop: 15}}>My Appointments</Text>
        </View>

        <TouchableOpacity style={{position: 'absolute', bottom: 15, right: 15}}
                onPress={() => {}}
            >
            <RowView backgroundColor={theme.primary} padding={10} borderRadius={40}>
                <Iconify icon='ph:plus-bold' size={30} color={'#fff'}/>
            </RowView>
        </TouchableOpacity>
        <View>
            <ScrollView>
                {/* wrapper */}
                <ColumnView>
                    {/* Items Group 1*/}
                    <ColumnView marginBottom={15}>
                        <RowView backgroundColor='#2222' paddingHorizontal={15} paddingVertical={5} alignItem='center' justifyContent='space-between'>
                            <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Saturday, June 6, 2024 </Text>
                            <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold', color: '#666666'}}>Assigned to </Text>
                        </RowView>
                        {/* Item details 1 */}
                        <RowView paddingHorizontal={15} paddingVertical={10} justifyContent='space-between'>
                            <RowView gap={10}>
                                <ColumnView justifyContent='space-between'>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>01:00 PM</Text>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>02:00 PM</Text>
                                </ColumnView>
                                <View style={{width: 4, backgroundColor: theme.primary, borderRadius: 2}}></View>
                                <ColumnView justifyContent='space-between' gap={5}>
                                    <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Bryan Smith</Text>
                                    <RowView gap={10}>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <RowView alignItem='center' gap={10}>
                                                <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Held</Text>
                                                <Iconify icon='solar:alt-arrow-down-outline' size={14} color={theme.primaryDark}/>
                                            </RowView>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: '#666666'}}>Signed Up</Text>
                                        </TouchableOpacity>
                                    </RowView>
                                </ColumnView>
                            </RowView>
                            <Image 
                                source={require('../../assets/sample_profile.jpg')}
                                style={{width: 55, height: 55, borderRadius: 5}}
                            />
                        </RowView>
                        {/* end of Item details 1*/}
                        {/* Item details 2 */}
                        <RowView paddingHorizontal={15} paddingVertical={10} justifyContent='space-between'>
                            <RowView gap={10}>
                                <ColumnView justifyContent='space-between'>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>03:00 PM</Text>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>04:00 PM</Text>
                                </ColumnView>
                                <View style={{width: 4, backgroundColor: theme.primary, borderRadius: 2}}></View>
                                <ColumnView justifyContent='space-between' gap={5}>
                                    <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Kaarlo Ping</Text>
                                    <RowView gap={10}>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <RowView alignItem='center' gap={10}>
                                                <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Not Held</Text>
                                                <Iconify icon='solar:alt-arrow-down-outline' size={14} color={theme.primaryDark}/>
                                            </RowView>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: '#666666'}}>Not Showed</Text>
                                        </TouchableOpacity>
                                    </RowView>
                                </ColumnView>
                            </RowView>
                            <Image 
                                source={require('../../assets/sample_profile.jpg')}
                                style={{width: 55, height: 55, borderRadius: 5}}
                            />
                        </RowView>
                        {/* end of Item details 2*/}
                        {/* Item details 3 */}
                        <RowView paddingHorizontal={15} paddingVertical={10} justifyContent='space-between'>
                            <RowView gap={10}>
                                <ColumnView justifyContent='space-between'>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>07:00 PM</Text>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>08:30 PM</Text>
                                </ColumnView>
                                <View style={{width: 4, backgroundColor: theme.primary, borderRadius: 2}}></View>
                                <ColumnView justifyContent='space-between' gap={5}>
                                    <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Johnny Bravo</Text>
                                    <RowView gap={10}>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <RowView alignItem='center' gap={10}>
                                                <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Appt. Status</Text>
                                                <Iconify icon='solar:alt-arrow-down-outline' size={14} color={theme.primaryDark}/>
                                            </RowView>
                                        </TouchableOpacity>
                                    </RowView>
                                </ColumnView>
                            </RowView>
                            <Image 
                                source={require('../../assets/sample_profile.jpg')}
                                style={{width: 55, height: 55, borderRadius: 5}}
                            />
                        </RowView>
                        {/* end of Item details 3*/}
                    </ColumnView>
                    {/* end of Items Group 1*/}
                    {/* Items Group 2*/}
                    <ColumnView marginBottom={15}>
                        <RowView backgroundColor='#2222' paddingHorizontal={15} paddingVertical={5} alignItem='center' justifyContent='space-between'>
                            <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Monday, June 8, 2024 </Text>
                            <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold', color: '#666666'}}>Assigned to </Text>
                        </RowView>
                        {/* Item details 1 */}
                        <RowView paddingHorizontal={15} paddingVertical={10} justifyContent='space-between'>
                            <RowView gap={10}>
                                <ColumnView justifyContent='space-between'>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>01:00 PM</Text>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>02:00 PM</Text>
                                </ColumnView>
                                <View style={{width: 4, backgroundColor: theme.primary, borderRadius: 2}}></View>
                                <ColumnView justifyContent='space-between' gap={5}>
                                    <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Bryan Smith</Text>
                                    <RowView gap={10}>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <RowView alignItem='center' gap={10}>
                                                <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Held</Text>
                                                <Iconify icon='solar:alt-arrow-down-outline' size={14} color={theme.primaryDark}/>
                                            </RowView>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: '#666666'}}>Not Interested</Text>
                                        </TouchableOpacity>
                                    </RowView>
                                </ColumnView>
                            </RowView>
                            <Image 
                                source={require('../../assets/sample_profile.jpg')}
                                style={{width: 55, height: 55, borderRadius: 5}}
                            />
                        </RowView>
                        {/* end of Item details 1*/}
                        {/* Item details 2 */}
                        <RowView paddingHorizontal={15} paddingVertical={10} justifyContent='space-between'>
                            <RowView gap={10}>
                                <ColumnView justifyContent='space-between'>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>03:00 PM</Text>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>04:00 PM</Text>
                                </ColumnView>
                                <View style={{width: 4, backgroundColor: theme.primary, borderRadius: 2}}></View>
                                <ColumnView justifyContent='space-between' gap={5}>
                                    <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Kaarlo Ping</Text>
                                    <RowView gap={10}>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <RowView alignItem='center' gap={10}>
                                                <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Not Held</Text>
                                                <Iconify icon='solar:alt-arrow-down-outline' size={14} color={theme.primaryDark}/>
                                            </RowView>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: '#666666'}}>Rescheduled</Text>
                                        </TouchableOpacity>
                                    </RowView>
                                </ColumnView>
                            </RowView>
                            <Image 
                                source={require('../../assets/sample_profile.jpg')}
                                style={{width: 55, height: 55, borderRadius: 5}}
                            />
                        </RowView>
                        {/* end of Item details 2*/}
                        {/* Item details 3 */}
                        <RowView paddingHorizontal={15} paddingVertical={10} justifyContent='space-between'>
                            <RowView gap={10}>
                                <ColumnView justifyContent='space-between'>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>07:00 PM</Text>
                                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Bold'}}>08:30 PM</Text>
                                </ColumnView>
                                <View style={{width: 4, backgroundColor: theme.primary, borderRadius: 2}}></View>
                                <ColumnView justifyContent='space-between' gap={5}>
                                    <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Johnny Bravo</Text>
                                    <RowView gap={10}>
                                        <TouchableOpacity style={{backgroundColor: '#2222', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3}}
                                                onPress={() => {}}
                                            >
                                            <RowView alignItem='center' gap={10}>
                                                <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Appt. Status</Text>
                                                <Iconify icon='solar:alt-arrow-down-outline' size={14} color={theme.primaryDark}/>
                                            </RowView>
                                        </TouchableOpacity>
                                    </RowView>
                                </ColumnView>
                            </RowView>
                            <Image 
                                source={require('../../assets/sample_profile.jpg')}
                                style={{width: 55, height: 55, borderRadius: 5}}
                            />
                        </RowView>
                        {/* end of Item details 3*/}
                    </ColumnView>
                    {/* end of Items Group 2*/}
                </ColumnView>
                {/* end of wrapper */}
            </ScrollView>
        </View>
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

export default AppointmentsScreen;