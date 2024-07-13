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

const TrainingScreen = () => {
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
            <Text style={{fontSize: 18, fontFamily: 'Manrope-Bold', color: '#fff'}}>
                Training
            </Text>
            <TouchableOpacity style={{position: 'absolute', left: 15}}
                    onPress={() => navigation.goBack()}
                >
                <ArrowLeft color={'#fff'} width={20} height={20} />
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', marginTop: 15}}>
            <ScrollView>
                <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between'}}>
                    <View style={{height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <ColumnView alignItem='center' justifyContent='center'>
                                <Iconify size={50} icon={'iconoir:folder'} color={theme.primaryDark} />
                                <Text style={{textAlign: 'center'}}>GHI+BizCard Course 101</Text>
                            </ColumnView>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <ColumnView alignItem='center' justifyContent='center'>
                                <Iconify size={50} icon={'iconoir:folder'} color={theme.primaryDark} />
                                <Text style={{textAlign: 'center'}}>GHI+BizCard Course 102</Text>
                            </ColumnView>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <ColumnView alignItem='center' justifyContent='center'>
                                <Iconify size={50} icon={'iconoir:folder'} color={theme.primaryDark} />
                                <Text style={{textAlign: 'center'}}>GHI+BizCard Course 103</Text>
                            </ColumnView>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <ColumnView alignItem='center' justifyContent='center'>
                                <Iconify size={50} icon={'iconoir:folder'} color={theme.primaryDark} />
                                <Text style={{textAlign: 'center'}}>GHI+BizCard Course 104</Text>
                            </ColumnView>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <ColumnView alignItem='center' justifyContent='center'>
                                <Iconify size={50} icon={'iconoir:folder'} color={theme.primaryDark} />
                                <Text style={{textAlign: 'center'}}>GHI+BizCard Course 105</Text>
                            </ColumnView>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <ColumnView alignItem='center' justifyContent='center'>
                                <Iconify size={50} icon={'iconoir:folder'} color={theme.primaryDark} />
                                <Text style={{textAlign: 'center'}}>GHI+BizCard Course 106</Text>
                            </ColumnView>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <ColumnView alignItem='center' justifyContent='center'>
                                <Iconify size={50} icon={'iconoir:folder'} color={theme.primaryDark} />
                                <Text style={{textAlign: 'center'}}>GHI+BizCard Course 107</Text>
                            </ColumnView>
                        </TouchableOpacity>
                    </View>
                </View>
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

export default TrainingScreen;