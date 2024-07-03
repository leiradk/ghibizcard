import React, { useCallback, useState, useRef, useEffect } from 'react'
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
import GHIModal from '../components/GHIModal';
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

const ContactDetailsScreen = ({route}) => {
    const theme = useTheme();
    const navigation = useNavigation();
    const { name, lastname, phone, email, contactType, createdAt, status } = route.params
    const scrollX = useRef(new Animated.Value(0)).current;
    const [selected, setSelected] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [openModalExperienced, setOpenModalExperienced] = useState(false);
    const [selectedExperienced, setSelectedExperienced] = useState('Rookie');

    useEffect( () => {
        setSelected(contactType);
        setSelectedStatus(status);
    }, []);

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

    const statusData = [
        {key:'1', value:'Signed'},
        {key:'2', value:'Need Docs'},
        {key:'3', value:'Contacted'},
        {key:'4', value:'Onboarding'},
        {key:'6', value:'Verbal Commit'},
        {key:'7', value:'Selling'},
        {key:'8', value:'Prospect'},
    ]

    const handleSelectExperienced = (value: string) => {
        setSelectedExperienced(value);
        setOpenModalExperienced(!openModalExperienced);
    }
    
  return (
    <View style={[styles.body, {backgroundColor: theme.primary}]}>
        <View style={{position: 'relative', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
            <Text style={{fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>
                {contactType} Details
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
                            <TextInput value={name} style={{fontSize: 20, fontFamily: 'Manrope-Bold', height: 46}} />
                        </RowView>
                        <Text style={{fontSize: 12, fontFamily: 'Manrope-Regular'}}>Created: {createdAt}</Text>
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
            <TouchableOpacity>
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
                <RowView alignItem='center' justifyContent='space-between' paddingHorizontal={15} marginTop={10}>
                    <TouchableOpacity
                            onPress={() => setOpenModalExperienced(!openModalExperienced)}
                        >
                        <RowView>
                            <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Experienced: </Text>
                            <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>{selectedExperienced}</Text>
                        </RowView>
                    </TouchableOpacity>
                    <Text style={{fontSize:10, fontFamily: 'Manrope-Regular'}}>Last Contacted: June 29, 2024</Text>
                </RowView>
                <ColumnView padding={15} gap={15}>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Contact Type</Text>
                    <SelectList 
                        placeholder={selected}
                        setSelected={(val) => setSelected(val)}
                        data={userTypeData}
                        save="value"
                    />
                </ColumnView>
                <ColumnView padding={15} gap={15}>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Status</Text>
                    <SelectList 
                        placeholder={selectedStatus}
                        setSelected={(val) => setSelectedStatus(val)}
                        data={statusData}
                        save="value"
                    />
                </ColumnView>
                <ColumnView padding={15}>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Details</Text>
                    <RowView justifyContent='space-between'>
                        <View style={{width: '48%'}}>
                            <GHITextInput placeholder={'First Name'} onChangeText={() => {}} valueData={name} />
                        </View>
                        <View style={{width: '48%'}}>
                            <GHITextInput placeholder={'Last Name'} onChangeText={() => {}} valueData={lastname}/>
                        </View>
                    </RowView>
                    <GHITextInput placeholder={'Phone (optional)'} onChangeText={() => {}} valueData={phone} />
                    <GHITextInput placeholder={'Email (optional)'} onChangeText={() => {}} valueData={email} />
                </ColumnView>
            </ScrollView>
        </View>
        <GHIModal title={'Experienced'} alignment={'center'} isVisible={openModalExperienced} onClose={ () => setOpenModalExperienced(!openModalExperienced)}>
            <ColumnView justifyContent='center' alignItem='center' gap={15}>
                <TouchableOpacity
                        onPress={ () => handleSelectExperienced('Rookie')}
                    >
                    <Text style={{fontSize: 14, fontFamily: selectedExperienced === 'Rookie' ? 'Manrope-Bold' : 'Manrope-Regular', color: selectedExperienced === 'Rookie' ? theme.primaryDark : '#666666'}}>Rookie</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={ () => handleSelectExperienced('Vet')}
                    >
                    <Text style={{fontSize: 14, fontFamily: selectedExperienced === 'Vet' ? 'Manrope-Bold' : 'Manrope-Regular', color: selectedExperienced === 'Vet' ? theme.primaryDark : '#666666'}}>Vet</Text>
                </TouchableOpacity>
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

export default ContactDetailsScreen;