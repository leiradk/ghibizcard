import React, { useCallback, useState, useRef } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, Animated , TouchableOpacity, View } from 'react-native'
import { RowView } from '../../components/RowView';
import { CircleView } from '../../components/CircleView';
import { useTheme } from '../../theme/ThemeContext';
import { ColumnView } from '../../components/ColumnView';
import { Box3dPoint, Calendar, Globe, Mail, Menu, Message, MobileDevMode, MoreHorizCircle, NavArrowRight, Pause, Phone, Play, Send, SendDiagonal, Star, Trophy, UserPlus, Xmark, XmarkCircle } from 'iconoir-react-native';
import { GHITextInput } from '../../components/GHITextInput';
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

const RecruitScreen = () => {
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
        <ColumnView alignItem='center' paddingVertical={15}>
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>
                Recruit
            </Text>
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

export default RecruitScreen;