import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Image, Linking, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RowView } from '../../components/RowView';
import { CircleView } from '../../components/CircleView';
import { useTheme } from '../../theme/ThemeContext';
import { ColumnView } from '../../components/ColumnView';
import { Box3dPoint, CheckCircle, Circle, Menu, MobileDevMode, MoreHorizCircle, Phone, Play, Send, SendDiagonal, Star, Trophy, XmarkCircle } from 'iconoir-react-native';
import { GHITextInput } from '../../components/GHITextInput';
import YouTube from 'react-native-youtube-iframe';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Iconify } from 'react-native-iconify';
import { useNavigation } from '@react-navigation/native';
import GHIModal from '../../components/GHIModal';

const { width: screenWidth } = Dimensions.get('screen');

const SendCardScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    
    const [sendTo, setSendTo] = useState('Lead');
    const [sendVia, setSendVia] = useState('Text');
    const [includeSocialMedia , setIncludeSocialMedia] = useState(false);
    const [includeChampionApp , setIncludeChampionApp] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [initialMessage, setInitialMessage] = useState('');

    const scrollX = useRef(new Animated.Value(0)).current;
    // Overview Property
    const [playing, setPlaying] = useState(false);
    const [OpenPlayer, setOpenPlayer] = useState(false);
    const onStateChangePlayer= useCallback((state: any) => {
        if (state === 'ended') {
            setPlaying(false);
        }
    }, []);
    const [ytID, setYTID] = useState('');
    const [ytTitle, setYTTitle] = useState('');

    const data = [
    {
        title: 'Company',
        image: 'https://via.placeholder.com/300',
        ytid: 'DzO2SBzMmOw',
    },
    {
        title: 'Be a Champion',
        image: 'https://via.placeholder.com/300',
        ytid: 'DzO2SBzMmOw',
    },
    {
        title: 'Enter a Contest',
        image: 'https://via.placeholder.com/300',
        ytid: 'DzO2SBzMmOw',
    },
    ];

    useEffect( () => {
        // Load data from local storage
        preFetchLocalStorage();
    }, []);

    const handleSendVia = () => {
        if (sendVia === 'Text') {
            console.log('Send via Text');
            if (phoneNumber) {
                console.log('has number');
                const urlLinkPhone = `sms:${phoneNumber}?body=${encodeURIComponent(initialMessage)}`;
                Linking.openURL(urlLinkPhone)
                    .catch((err) => console.error('An error occurred', err));
            } else {
                // throw error
                console.log('Has no number');
            }
        }
        if (sendVia === 'Email') {
            const recipient = email; // Replace with the desired recipient email
            const subject = 'GHI+BizCard'; // Replace with your email subject
            const body = initialMessage; // Replace with your email body

            const url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            Linking.openURL(url)
                .catch((err) => console.error('An error occurred', err));
        }
    }

    const preFetchLocalStorage = async () => {
        try {
            if (sendTo === 'Lead') {
                const message = await AsyncStorage.getItem('IMLead');
                if (message) {
                    setInitialMessage(message);
                } else {
                    setInitialMessage('');
                }
            }
            if (sendTo === 'Customer') {
                const message = await AsyncStorage.getItem('IMCustomer');
                if (message) {
                    setInitialMessage(message);
                } else {
                    setInitialMessage('');
                }
            }
            if (sendTo === 'Recruit') {
                const message = await AsyncStorage.getItem('IMRecruit');
                if (message) {
                    setInitialMessage(message);
                } else {
                    setInitialMessage('');
                }
            }
        } catch (error) {
            console.log('preFetchLocalStorage: ', error)
        }
    }

    const handleInitialMessageTab = async (value: string) => {
        console.log("IM tab: ", value)
        setSendTo(value);
        try {
            if (value === 'Lead') {
                const message = await AsyncStorage.getItem('IMLead');
                if (message) {
                    await setInitialMessage(message);
                } else {
                    setInitialMessage('');
                }
            }
            if (value === 'Customer') {
                const message = await AsyncStorage.getItem('IMCustomer');
                if (message) {
                    await setInitialMessage(message);
                } else {
                    setInitialMessage('');
                }
            }
            if (value === 'Recruit') {
                const message = await AsyncStorage.getItem('IMRecruit');
                if (message) {
                    await setInitialMessage(message);
                } else {
                    setInitialMessage('');
                }
            }
        } catch (error) {
            console.log('Handle Initial Message Tab: ', error);
        }
        
    }

    const handleStoreInitialMessage = async () => {
        try {
            if (sendTo === 'Lead') {
                await AsyncStorage.setItem('IMLead', initialMessage);
            }
            if (sendTo === 'Customer') {
                await AsyncStorage.setItem('IMCustomer', initialMessage);
            }
            if (sendTo === 'Recruit') {
                await AsyncStorage.setItem('IMRecruit', initialMessage);
            }
        } catch (error) {
            console.log('handle Store Initial Message: ', error)
        }
    }

    const handleOpenVideo = (id: string, title: string) => {
        setOpenPlayer(!OpenPlayer)
        setYTID(id)
        setYTTitle(title)
    }
    
  return (
    <View style={[styles.body, {backgroundColor: theme.primary}]}>
        <ColumnView alignItem='center' paddingVertical={15}>
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>
                Send Business Card
            </Text>
        </ColumnView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <RowView  height={60} backgroundColor='#fff' alignItem='center' paddingHorizontal={15} borderRadius={5} gap={10}>
                <Image 
                    source={require('../../../assets/sample_profile.jpg')} 
                    style={{width: 40, height: 40, borderRadius: 5}}
                    />
                
                <ColumnView>
                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Ariel Delos Santos</Text>
                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Green Home Improvements Plus</Text>
                </ColumnView>
                <Image 
                    source={require('../../../assets/sample_company_logo.png')} 
                    style={{width: 40, height: 40, borderRadius:5}}
                    />
            </RowView>
        </View>
        <View style={{marginTop: 15, flex: 1,backgroundColor: '#fff'}}>
            <ScrollView>
                <View>
                    <ColumnView paddingHorizontal={15} paddingTop={15}>
                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Details</Text>
                        
                        <RowView justifyContent='space-between'>
                            <View style={{width: '47%'}}>
                                <GHITextInput placeholder={'First name'} onChangeText={() => {}}/>
                            </View>
                            <View style={{width: '47%'}}>
                                <GHITextInput placeholder={'Last name'} onChangeText={() => {}}/>
                            </View>
                        </RowView>

                        <GHITextInput 
                            placeholder={'Phone'} 
                            onChangeText={(value) => setPhoneNumber(value)} 
                            keyboardType='phone-pad'
                            />

                        <GHITextInput 
                            placeholder={'Email'}  
                            onChangeText={(value) => setEmail(value)}
                            keyboardType='email-address'
                             />

                        <RowView justifyContent='center' alignItem='center' gap={15} marginVertical={15}>
                            <TouchableOpacity style={{width: 90,height: 46, justifyContent: 'center', alignItems: 'center', backgroundColor: sendTo === 'Lead' ? theme.primary : '#1111', paddingHorizontal: 10, borderRadius:5}}
                                    onPress={() => handleInitialMessageTab('Lead')}
                                >
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: sendTo === 'Lead' ? '#fff': '#666666'}}>Lead</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 90, height: 46, justifyContent: 'center', alignItems: 'center', backgroundColor: sendTo === 'Customer' ? theme.primary : '#1111', paddingHorizontal: 10, borderRadius:5}}
                                    onPress={() => handleInitialMessageTab('Customer')}
                                >
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: sendTo === 'Customer' ? '#fff': '#666666'}}>Customer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 90, height: 46, justifyContent: 'center', alignItems: 'center', backgroundColor: sendTo === 'Recruit' ? theme.primary : '#1111', paddingHorizontal: 10, borderRadius:5}}
                                    onPress={() => handleInitialMessageTab('Recruit')}
                                >
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: sendTo === 'Recruit' ? '#fff': '#666666'}}>Recruit</Text>
                            </TouchableOpacity>
                        </RowView>

                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark, marginBottom: 5 }}>Initial Message:</Text>
                        <TextInput
                            placeholder='Type something'
                            multiline={true}
                            numberOfLines={6}
                            textAlignVertical='top'
                            style={{borderWidth: 0.5, borderRadius: 5, padding: 10}}
                            onChangeText={(value) => setInitialMessage(value)}
                            onEndEditing={() => handleStoreInitialMessage()}
                            value={initialMessage}
                        />

                        <RowView alignItem='center' justifyContent='space-between' marginVertical={15}>
                            <Text style={{}}>
                                Include Social Media
                            </Text>
                            <Switch
                                trackColor={{ false: '#767577', true: theme.primaryLight }}
                                thumbColor={includeSocialMedia ? theme.primary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIncludeSocialMedia(!includeSocialMedia)}
                                value={includeSocialMedia}
                            />
                        </RowView>

                        <RowView alignItem='center' justifyContent='space-between' marginBottom={15}>
                            <Text style={{}}>
                                Include Champion app
                            </Text>
                            <Switch
                                trackColor={{ false: '#767577', true: theme.primaryLight }}
                                thumbColor={includeChampionApp ? theme.primary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIncludeChampionApp(!includeChampionApp)}
                                value={includeChampionApp}
                            />
                        </RowView>

                        <ColumnView gap={15} marginBottom={15}>
                            <RowView justifyContent='space-between' alignItem='center'>
                                <Text>Video Attachement</Text>
                                <TouchableOpacity style={{backgroundColor: '#2222',padding: 5, borderRadius: 5}}
                                        onPress={() => navigation.navigate('AddVideo')}
                                    >
                                    <RowView gap={10}>
                                        <Iconify icon='iconoir:add-media-video' size={20} color={theme.primaryDark}/>
                                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Add Video</Text>
                                    </RowView>
                                </TouchableOpacity>
                            </RowView>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <RowView alignItem='flex-start' gap={20}>
                                { data.map((item, index) => (
                                    <View key={index} style={styles.yt}>
                                        <View style={{justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                                            <Image 
                                                source={{ uri: item.image }}
                                                width={145}
                                                height={115}
                                                style={{position:'absolute', borderRadius: 5}}
                                            />
                                            <TouchableOpacity style={{backgroundColor: '#1111',padding: 5, borderRadius: 5}}
                                                 onPress={() => handleOpenVideo(item.ytid, item.title)}
                                                >
                                                <RowView gap={10}>
                                                    <Iconify icon='solar:play-line-duotone' size={20} color={theme.primaryDark}/>
                                                </RowView>
                                            </TouchableOpacity>
                                            
                                            
                                        </View>
                                        <Text style={{position: 'absolute', bottom: 10, left: 10, maxWidth: 100}}>{item.title}</Text>
                                    </View>
                                ))}
                                {/* <Animated.ScrollView
                                    horizontal
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                    { useNativeDriver: false }
                                    )}
                                    scrollEventThrottle={16}
                                >
                                    { data.map((item, index) => (
                                        <View key={index} style={[styles.card,]}>
                                            <YouTube
                                                width={300}
                                                height={170}
                                                play={playingOverView}
                                                videoId={item.ytid} // The YouTube video ID
                                                onChangeState={onStateChangeOverView}
                                            />
                                        </View>
                                    ))}
                                    
                                </Animated.ScrollView> */}
                            </RowView>
                            </ScrollView>
                        </ColumnView>
                        <ColumnView>
                            <RowView justifyContent='space-between'>
                                <Text>Custom Call To Action</Text>
                                <Text>Add</Text>
                            </RowView>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <RowView paddingVertical={15} gap={15}>
                                    <TouchableOpacity 
                                            style={styles.CustomCallToAction}
                                        >
                                        <Text style={styles.CustomCallToActionText}>Text me</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                            style={styles.CustomCallToAction}
                                        >
                                        <Text style={styles.CustomCallToActionText}>Call me</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                            style={styles.CustomCallToAction}
                                        >
                                        <Text style={styles.CustomCallToActionText}>Email me</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                            style={styles.CustomCallToAction}
                                        >
                                        <Text style={styles.CustomCallToActionText}>Schedule Appointment</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                            style={styles.CustomCallToAction}
                                        >
                                        <Text style={styles.CustomCallToActionText}>Visit our Website</Text>
                                    </TouchableOpacity>
                                </RowView>
                            </ScrollView>
                        </ColumnView>

                        <ColumnView alignItem='center' marginTop={15}>
                            <Text>Send via</Text>
                            <RowView gap={15} paddingVertical={15}>
                                <TouchableOpacity
                                        onPress={() => setSendVia('Text')}
                                    >
                                    <RowView alignItem='center' gap={5}>
                                        {sendVia === 'Text' ? (
                                            <CheckCircle color={theme.primaryDark} width={14} height={14} />
                                        ) : (
                                            <Circle color={theme.primaryDark} width={14} height={14} /> 
                                        )}
                                        
                                        <Text style={{fontSize: 14, fontFamily: sendVia === 'Text' ? 'Manrope-Bold' : 'Manrope-Regular'}}>Text</Text>
                                    </RowView>
                                </TouchableOpacity>
                                <TouchableOpacity
                                        onPress={() => setSendVia('Email')}
                                    >
                                    <RowView alignItem='center' gap={5}>
                                        {sendVia === 'Email' ? (
                                            <CheckCircle color={theme.primaryDark} width={14} height={14} />
                                        ) : (
                                            <Circle color={theme.primaryDark} width={14} height={14} /> 
                                        )}
                                        <Text style={{fontSize: 14, fontFamily: sendVia === 'Email' ? 'Manrope-Bold' : 'Manrope-Regular'}}>Email</Text>
                                    </RowView>
                                </TouchableOpacity>
                            </RowView>
                        </ColumnView>

                        <TouchableOpacity
                                onPress={() => handleSendVia()}
                            >
                            <RowView gap={10} height={46} justifyContent='center' alignItem='center' backgroundColor={theme.primary} borderRadius={5} marginTop={15}>
                                <SendDiagonal color={'#fff'} width={20} height={20}/>
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: '#fff'}}>Send Card</Text>
                            </RowView>
                        </TouchableOpacity>
                    </ColumnView>
                </View>
                <View style={{height: 60}}></View>
            </ScrollView>
        </View>
        <GHIModal title={ytTitle} alignment={'center'} isVisible={OpenPlayer} onClose={ () => setOpenPlayer(!OpenPlayer)}>
            <YouTube
                width={280}
                height={200}
                play={playing}
                videoId={'mbnYYqpmmvg'} // The YouTube video ID
                onChangeState={onStateChangePlayer}
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
    card: {
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    yt: {
        backgroundColor: '#666666',
        borderRadius: 5,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 120,
    },
    CustomCallToAction: {
        height: 40, 
        backgroundColor: '#fff', 
        paddingHorizontal: 15, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderColor: '#66666620',
        borderBottomWidth: 2,
        borderRightWidth: 2, 
        borderRadius: 20,
    },
    CustomCallToActionText: {
        fontSize: 14, 
        fontFamily: 'Manrope-Bold', 
        color: '#224C12'
    }
});

export default SendCardScreen;