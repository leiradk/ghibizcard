import React, { useCallback, useState, useRef } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, Animated , TouchableOpacity, View, TextInput } from 'react-native'
import { RowView } from '../components/RowView';
import { CircleView } from '../components/CircleView';
import { useTheme } from '../theme/ThemeContext';
import { ColumnView } from '../components/ColumnView';
import { ArrowLeft, Box3dPoint, Calendar, CardWallet, CreditCard, DownloadCircle, Edit, FloppyDisk, Globe, Mail, MediaImage, Menu, Message, MobileDevMode, MoreHorizCircle, NavArrowRight, Pause, Phone, Play, Send, SendDiagonal, Star, Trophy, UserPlus, Xmark, XmarkCircle } from 'iconoir-react-native';
import { GHITextInput } from '../components/GHITextInput';
import YouTube from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Iconify } from 'react-native-iconify';

const { width: screenWidth } = Dimensions.get('window');
const data = [
    {
      title: 'Beautiful Scenery',
      image: 'https://via.placeholder.com/300',
      description: 'A beautiful scenery with mountains and lakes.',
    },
    {
      title: 'City Landscape',
      image: 'https://via.placeholder.com/300',
      description: 'A stunning view of the city skyline at night.',
    },
    {
      title: 'Forest Path',
      image: 'https://via.placeholder.com/300',
      description: 'A serene path through a lush green forest.',
    },
  ];

const ProfileScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [selected, setSelected] = useState("");

    // Overview Property
    const [playingOverView, setPlayingOverView] = useState(false);
    const [OpenPlayerOverview, setOpenPlayerOverview] = useState(false);

    const onStateChangeOverView = useCallback((state: any) => {
        if (state === 'ended') {
            setPlayingOverView(false);
        }
    }, []);
    const togglePlayingOverView = useCallback(() => {
        setPlayingOverView((prev) => !prev);
    }, []);

    const { width: screenWidth } = Dimensions.get('window');

    const data = [
    {
        title: 'Item 1',
        image: 'https://via.placeholder.com/300',
        ytid: 'DzO2SBzMmOw',
    },
    {
        title: 'Item 2',
        image: 'https://via.placeholder.com/300',
        ytid: 'DzO2SBzMmOw',
    },
    {
        title: 'Item 3',
        image: 'https://via.placeholder.com/300',
        ytid: 'DzO2SBzMmOw',
    },
    ];

    
  
    const userTypeData = [
        {key:'1', value:'Lead'},
        {key:'2', value:'Customer'},
        {key:'3', value:'Recruit'},
    ]
    
  return (
    <View style={[styles.body, {backgroundColor: theme.primary}]}>
        <View style={{position: 'relative', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
            <Text style={{fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>
                Edit Details
            </Text>
            <TouchableOpacity style={{position: 'absolute', left: 15}}
                    onPress={() => navigation.goBack()}
                >
                <ArrowLeft color={'#fff'} width={20} height={20} />
            </TouchableOpacity>
        </View>
        <ColumnView paddingHorizontal={15} marginTop={15}>
            <RowView alignItem='center' justifyContent='space-between'>
                <RowView gap={10}>
                    <Image 
                        source={require('../../assets/sample_profile.jpg')}
                        style={{width: 60, height: 60, borderRadius:5}}
                    />
                    <ColumnView>
                        <RowView alignItem='center' gap={10}>
                            <TextInput value={'Ariel'} style={{fontSize: 20, fontFamily: 'Manrope-Bold', height: 46}} />
                            <TouchableOpacity>
                                {/* <Edit color={'#fff'} width={20} height={20} /> */}
                                <Iconify icon='tabler:edit' size={20} color={'#fff'} />
                            </TouchableOpacity>
                        </RowView>
                        <Text style={{fontSize: 12, fontFamily: 'Manrope-Regular'}}>Created: June 30, 2024</Text>
                    </ColumnView>
                </RowView>
                <TouchableOpacity>
                    <ColumnView width={50} height={50} padding={5} backgroundColor='#fff' justifyContent='center' alignItem='center' borderRadius={5}>
                        {/* <FloppyDisk color={theme.primaryDark} width={20} height={20} /> */}
                        <Iconify icon='mynaui:save' size={20} color={theme.primaryDark}/>
                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Regular', color: '#666666'}}>Save</Text>
                    </ColumnView>
                </TouchableOpacity>
            </RowView>

            <RowView gap={10} marginTop={15} justifyContent='center'>
               <TouchableOpacity 
                        onPress={() => navigation.navigate('Appointments')}
                    >
                    <ColumnView width={60} height={50} padding={5} backgroundColor='#fff' justifyContent='center' alignItem='center' borderRadius={5}>
                        {/* <Calendar color={theme.primaryDark} width={20} height={20} /> */}
                        <Iconify icon='carbon:calendar' size={20} color={theme.primaryDark}/>
                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Regular', color: '#666666'}}>Appt</Text>
                    </ColumnView>
                </TouchableOpacity> 

                <TouchableOpacity>
                    <ColumnView width={60} height={50} padding={5} backgroundColor='#fff' justifyContent='center' alignItem='center' borderRadius={5}>
                        {/* <MediaImage color={theme.primaryDark} width={20} height={20} /> */}
                        <Iconify icon='ph:image-light' size={20} color={theme.primaryDark}/>
                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Regular', color: '#666666'}}>Attach</Text>
                    </ColumnView>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <ColumnView width={60} height={50} padding={5} backgroundColor='#fff' justifyContent='center' alignItem='center' borderRadius={5}>
                        {/* <CreditCard color={theme.primaryDark} width={20} height={20} /> */}
                        <Iconify icon='fluent:contact-card-48-regular' size={20} color={theme.primaryDark}/>
                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Regular', color: '#666666'}}>Send Card</Text>
                    </ColumnView>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <ColumnView width={60} height={50} padding={5} backgroundColor='#fff' justifyContent='center' alignItem='center' borderRadius={5}>
                        {/* <DownloadCircle color={theme.primaryDark} width={20} height={20} /> */}
                        <Iconify icon='radix-icons:download' size={20} color={theme.primaryDark}/>
                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Regular', color: '#666666'}}>Champion</Text>
                    </ColumnView>
                </TouchableOpacity> 
            </RowView>
        </ColumnView>
        <View style={{flex: 1, backgroundColor: '#fff', marginTop: 15}}>
            <ScrollView>
                <ColumnView padding={15}>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Bio</Text>
                    <TextInput
                            placeholder='Tell something about yourself.'
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical='top'
                            style={{borderWidth: 0.5, borderRadius: 5, padding: 10, marginTop: 10}}
                        />
                </ColumnView>
                <ColumnView padding={15} gap={15}>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Contact Type</Text>
                    <SelectList 
                        setSelected={(val) => setSelected(val)} 
                        data={userTypeData} 
                        save="value"
                    />
                </ColumnView>
                <ColumnView padding={15}>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Details</Text>
                    <RowView justifyContent='space-between'>
                        <View style={{width: '48%'}}>
                            <GHITextInput placeholder={'First Name'} onChangeText={() => {}} />
                        </View>
                        <View style={{width: '48%'}}>
                            <GHITextInput placeholder={'Last Name'} onChangeText={() => {}} />
                        </View>
                    </RowView>
                    <GHITextInput placeholder={'Phone (optional)'} onChangeText={() => {}} />
                    <GHITextInput placeholder={'Email (optional)'} onChangeText={() => {}} />
                </ColumnView>
                <ColumnView padding={15}>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}
                    >Address</Text>
                    <GHITextInput placeholder={'Street 1'} onChangeText={() => {}} />
                    <GHITextInput placeholder={'Street 2'} onChangeText={() => {}} />
                    <GHITextInput placeholder={'City'} onChangeText={() => {}} />
                    <GHITextInput placeholder={'State'} onChangeText={() => {}} />
                    <GHITextInput placeholder={'Zip Code'} onChangeText={
                        () => {}} />
                </ColumnView>
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
    card: {
        width: screenWidth,
        alignItems: 'center',
        padding: 10,
        height: 200
    },
    paginationContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#595959',
        margin: 8,
        width: 10
    },
});

export default ProfileScreen;