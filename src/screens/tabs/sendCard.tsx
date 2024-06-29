import React, { useCallback, useRef, useState } from 'react'
import { Animated, Dimensions, Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RowView } from '../../components/RowView';
import { CircleView } from '../../components/CircleView';
import { useTheme } from '../../theme/ThemeContext';
import { ColumnView } from '../../components/ColumnView';
import { Box3dPoint, CheckCircle, Circle, Menu, MobileDevMode, MoreHorizCircle, Phone, Play, Send, SendDiagonal, Star, Trophy, XmarkCircle } from 'iconoir-react-native';
import { GHITextInput } from '../../components/GHITextInput';
import YouTube from 'react-native-youtube-iframe';

const { width: screenWidth } = Dimensions.get('screen');

const SendCardScreen = () => {
    const theme = useTheme();
    const [sendTo, setSendTo] = useState('Lead');
    const [sendVia, setSendVia] = useState('Text');
    const [includeSocialMedia , setIncludeSocialMedia] = useState(false);

    const scrollX = useRef(new Animated.Value(0)).current;
    // Overview Property
    const [playingOverView, setPlayingOverView] = useState(false);
    const [OpenPlayerOverview, setOpenPlayerOverview] = useState(false);
    const onStateChangeOverView = useCallback((state: any) => {
        if (state === 'ended') {
            setPlayingOverView(false);
        }
    }, []);



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
                            onChangeText={() => {}} 
                            keyboardType='phone-pad'
                            />

                        <GHITextInput 
                            placeholder={'Email'}  
                            onChangeText={() => {}}
                            keyboardType='email-address'
                             />

                        <RowView justifyContent='center' alignItem='center' gap={15} marginVertical={15}>
                            <TouchableOpacity style={{width: 90,height: 46, justifyContent: 'center', alignItems: 'center', backgroundColor: sendTo === 'Lead' ? theme.primary : '#1111', paddingHorizontal: 10, borderRadius:5}}
                                    onPress={() => setSendTo('Lead')}
                                >
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: sendTo === 'Lead' ? '#fff': '#666666'}}>Lead</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 90, height: 46, justifyContent: 'center', alignItems: 'center', backgroundColor: sendTo === 'Customer' ? theme.primary : '#1111', paddingHorizontal: 10, borderRadius:5}}
                                    onPress={() => setSendTo('Customer')}
                                >
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: sendTo === 'Customer' ? '#fff': '#666666'}}>Customer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 90, height: 46, justifyContent: 'center', alignItems: 'center', backgroundColor: sendTo === 'Recruit' ? theme.primary : '#1111', paddingHorizontal: 10, borderRadius:5}}
                                    onPress={() => setSendTo('Recruit')}
                                >
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: sendTo === 'Recruit' ? '#fff': '#666666'}}>Recruit</Text>
                            </TouchableOpacity>
                        </RowView>

                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark, marginBottom: 5 }}>Initial Message:</Text>
                        <TextInput
                            placeholder='Type something'
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical='top'
                            style={{borderWidth: 0.5, borderRadius: 5, padding: 10}}
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
                                thumbColor={includeSocialMedia ? theme.primary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIncludeSocialMedia(!includeSocialMedia)}
                                value={includeSocialMedia}
                            />
                        </RowView>

                        <ColumnView gap={15} marginBottom={15}>
                            <RowView justifyContent='space-between' alignItem='center'>
                                <Text>Video Attachement</Text>
                                <Text>Add Video</Text>
                            </RowView>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <RowView alignItem='flex-start' gap={20}>
                                { data.map((item, index) => (
                                    <View key={index} style={{paddingVertical: 15, paddingHorizontal: 15, backgroundColor: '#2222', borderRadius: 10}}>
                                        <YouTube
                                            width={300}
                                            height={170}
                                            play={playingOverView}
                                            videoId={item.ytid} // The YouTube video ID
                                            onChangeState={onStateChangeOverView}
                                        />
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

                        <TouchableOpacity>
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
});

export default SendCardScreen;