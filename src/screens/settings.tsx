import React, { useCallback, useState, useRef } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, Animated , TouchableOpacity, View, TextInput, Switch } from 'react-native'
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
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';

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

const SettingsScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [selected, setSelected] = useState("");
    const [isEnabled, setIsEnabled] = useState(false);

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
                Settings
            </Text>
            <TouchableOpacity style={{position: 'absolute', left: 15}}
                    onPress={() => navigation.goBack()}
                >
                <ArrowLeft color={'#fff'} width={20} height={20} />
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ColumnView>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Add your FB Pixel Key</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Show Screen Touch</Text>
                            <Switch
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled ? theme.primary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIsEnabled(!isEnabled)}
                                value={isEnabled}
                            />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Notification</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Show Caller ID</Text>
                            <Switch
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled ? theme.primary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIsEnabled(!isEnabled)}
                                value={isEnabled}
                            />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Auto Location</Text>
                            <Switch
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled ? theme.primary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIsEnabled(!isEnabled)}
                                value={isEnabled}
                            />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Share Messages</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Calendar Settings</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Send Feed Back = FREE SWAG</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Contact Us/Follow Us</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Help Center</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Report Abuse</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Legal</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Change Password</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Payment Methods</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Switch Account</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={() => {}}
                        >
                        <RowView justifyContent='space-between'>
                            <Text>Logout</Text>
                            <NavArrowRight color={'#000'} width={20} height={20} />
                        </RowView>
                    </TouchableOpacity>
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
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        marginTop: 15,
        paddingTop: 15
    },
    button: {
        borderColor: '#66666650', 
        borderBottomWidth: 0.5, 
        paddingVertical: 10,
        marginVertical: 5
    }
});

export default SettingsScreen;