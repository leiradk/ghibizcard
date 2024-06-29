import React, { useCallback, useState, useRef } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, Animated , TouchableOpacity, View, TextInput } from 'react-native'
import { RowView } from '../components/RowView';
import { CircleView } from '../components/CircleView';
import { useTheme } from '../theme/ThemeContext';
import { ColumnView } from '../components/ColumnView';
import { ArrowLeft, Box3dPoint, Calendar, Edit, FloppyDisk, Globe, Mail, Menu, Message, MobileDevMode, MoreHorizCircle, NavArrowRight, Pause, Phone, Play, Send, SendDiagonal, Star, Trophy, UserPlus, Xmark, XmarkCircle } from 'iconoir-react-native';
import { GHITextInput } from '../components/GHITextInput';
import YouTube from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';

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
                                <Edit color={'#fff'} width={20} height={20} />
                            </TouchableOpacity>
                        </RowView>
                        <Text style={{fontSize: 12, fontFamily: 'Manrope-Regular'}}>Created: June 30, 2024</Text>
                    </ColumnView>
                </RowView>
                <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6666', borderRadius: 5}}>
                    <FloppyDisk color={'#fff'} width={20} height={20} />
                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Regular', color: '#fff'}}>Save</Text>
                </View>
            </RowView>
        </ColumnView>
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