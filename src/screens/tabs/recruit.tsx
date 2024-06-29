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
                Profile
            </Text>
        </ColumnView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{position: 'relative'}}>
                <RowView gap={10} justifyContent='space-evenly'>
                    <ColumnView>
                        <Image
                            source={require('../../../assets/sample_profile.jpg')}
                            style={{width: 75, height: 75}}
                            borderRadius={50}
                        />
                    </ColumnView>
                    
                </RowView>
                <View style={{ width: 40, height: 40,position: 'absolute', bottom: -5, right: -15, backgroundColor: '#fff', padding: 5, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <ColumnView>
                        <Image
                            source={require('../../../assets/sample_company_logo.png')}
                            style={{width: 35, height: 35}}
                            borderRadius={10}
                        />
                    </ColumnView>
                </View>
            </View>
            <ColumnView alignItem='center' marginTop={15}>
                <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Ariel Delos Santos</Text>
                <Text style={{fontSize: 12, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Window Expert</Text>
                <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Green Home Improvements Plus</Text>
            </ColumnView>

            <RowView marginTop={15} gap={10}>
                <ColumnView backgroundColor='#fff' width={60} height={50} justifyContent='center' alignItem='center' borderRadius={5} gap={2}>
                    <Phone color={theme.primaryDark} width={20} height={20} />
                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Call</Text>
                </ColumnView>
                <ColumnView backgroundColor='#fff' width={60} height={50} justifyContent='center' alignItem='center' borderRadius={5} gap={2}>
                    <Message color={theme.primaryDark} width={20} height={20} />
                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Text</Text>
                </ColumnView>
                <ColumnView backgroundColor='#fff' width={60} height={50} justifyContent='center' alignItem='center' borderRadius={5} gap={2}>
                    <Mail color={theme.primaryDark} width={20} height={20} />
                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Email</Text>
                </ColumnView>
                <ColumnView backgroundColor='#fff' width={60} height={50} justifyContent='center' alignItem='center' borderRadius={5} gap={2}>
                    <Globe color={theme.primaryDark} width={20} height={20} />
                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Website</Text>
                </ColumnView>
            </RowView>
        </View>
        <View style={{marginTop: 15, flex: 1,backgroundColor: '#fff', borderTopRightRadius: 15, borderTopLeftRadius: 15, paddingTop: 15}}>
            <ScrollView>
                <Animated.ScrollView
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
                    
                </Animated.ScrollView>
                <ColumnView marginLeft={15} justifyContent='center' alignItem='center' marginTop={20}>
                    <View style={styles.paginationContainer}>
                        { data.map((_, index) => {
                            const opacity = scrollX.interpolate({
                            inputRange: [
                            (index - 1) * screenWidth,
                            index * screenWidth,
                            (index + 1) * screenWidth,
                            ],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp',
                        });
                        return (
                            <Animated.View
                                key={index}
                                style={[styles.dot, { opacity }, { width: 20 }]}
                            />
                        );
                        })}
                    </View>
                </ColumnView>
                <ColumnView paddingHorizontal={15} justifyContent='space-between'>
                    <RowView justifyContent='space-between'>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Reviews</Text>
                        <TouchableOpacity  style={{position: 'relative', zIndex: 2}}
                                    onPress={() => navigation.navigate('AllReviews')}
                                >
                                <RowView alignItem='center' gap={10}>
                                    <Text>See All Reviews</Text>
                                </RowView>
                        </TouchableOpacity>
                    </RowView>
                    <RowView paddingVertical={10} justifyContent='space-between'>
                        <RowView gap={10}>
                            <CircleView diameter={50} backgroundColor={'#2222'}>
                                <Text>BW</Text>
                            </CircleView>
                            <ColumnView justifyContent='center'>
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold'}}>Kaarlo Supreme</Text>
                                <Text style={{fontSize: 10, fontFamily: 'Manrope-Regular'}}>June 5, 2024 9:20 am</Text>
                            </ColumnView>
                        </RowView>
                        <RowView alignItem='center'>
                            <Star color={'#66666650'} width={20} height={20} fill={'yellow'} />
                            <Star color={'#66666650'} width={20} height={20} fill={'yellow'} />
                            <Star color={'#66666650'} width={20} height={20} fill={'yellow'} />
                            <Star color={'#66666650'} width={20} height={20} fill={'yellow'} />
                            <Star color={'#66666650'} width={20} height={20} fill={'yellow'} />
                        </RowView>
                    </RowView>
                </ColumnView>
                <TouchableOpacity>
                    <RowView gap={10} height={46} justifyContent='center' alignItem='center' backgroundColor={theme.primary} borderRadius={5} marginTop={15} marginHorizontal={15}>
                        <UserPlus color={'#fff'} width={20} height={20}/>
                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: '#fff'}}>Add to Contacts </Text>
                    </RowView>
                </TouchableOpacity>
                <RowView height={60}>
                    <Text></Text>
                </RowView>
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

export default RecruitScreen;