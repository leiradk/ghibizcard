import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RowView } from '../../components/RowView';
import { CircleView } from '../../components/CircleView';
import { useTheme } from '../../theme/ThemeContext';
import { ColumnView } from '../../components/ColumnView';
import { AppNotification, BellNotification, BookStack, Box3dPoint, Calendar, MediaVideoList, Menu, MoreHorizCircle, Play, Plus, Star, Trophy, UserCrown, XmarkCircle } from 'iconoir-react-native';
import { useNavigation } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';

const HomeScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
  return (
    <View style={styles.body}>
        <TouchableOpacity style={{position: 'absolute', bottom: 65, right: 15, zIndex: 1}}
                onPress={() => navigation.navigate('AddContact')}
            >
            <CircleView diameter={46} backgroundColor={theme.primary} >
                <Plus width={30} height={30} color={'#fff'} />
            </CircleView>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#fff"}}>
            <View>
                <RowView alignItem='center' justifyContent='space-between' backgroundColor={theme.primary} padding={21}>
                    <RowView alignItem='center'>
                        <CircleView diameter={60} backgroundColor={'#6666'}>
                            <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: '#fff'}}>AD</Text>
                        </CircleView>
                        <ColumnView marginLeft={10}>
                            <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: '#fff'}}>Ariel Delos Santos</Text>
                            <RowView alignItem='center'>
                                <RowView alignItem='center' marginRight={5} gap={3}>
                                    <Star color={'#fff'} width={14} height={14} fill={'yellow'} />
                                    <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: '#fff'}}>5.0</Text>
                                </RowView>
                                <Text style={{fontSize: 14, fontFamily: 'Manrope-Regular', color: '#fff'}}>100 Reviews</Text>
                            </RowView>
                        </ColumnView>
                    </RowView>
                    <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}
                        >
                        <Menu color={'#fff'} width={25} height={25}  />
                    </TouchableOpacity>
                </RowView>
                <ColumnView>
                    {/* Dashboard */}
                    <View>
                        {/* <Text style={{paddingHorizontal: 21, marginTop: 15, fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Dashboard</Text> */}
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <RowView alignItem='center' paddingHorizontal={21} paddingVertical={10} gap={15} marginTop={15}>
                                <ColumnView justifyContent='space-between' alignItem='center' width={80} height={130} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10}>
                                    <ColumnView padding={5} backgroundColor={theme.primary} borderRadius={5}>
                                        <Iconify icon='tdesign:play-demo' size={30} color={'#fff'}/>
                                        {/* <MediaVideoList color={'#fff'} width={30} height={30}  /> */}
                                    </ColumnView>
                                    <View style={{height: 50, justifyContent: 'flex-start', alignItems: 'center'}}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Training</Text>
                                    </View>
                                </ColumnView>
                                <ColumnView justifyContent='space-between' alignItem='center' width={80} height={130} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10}>
                                    <ColumnView padding={5} backgroundColor={theme.primary} borderRadius={5}>
                                        <Iconify icon='bi:trophy' size={30} color={'#fff'}/>
                                        {/* <Trophy color={'#fff'} width={30} height={30}  /> */}
                                    </ColumnView>
                                    <View style={{height: 50, justifyContent: 'flex-start', alignItems: 'center'}}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Leader Board</Text>
                                    </View>
                                </ColumnView>
                                <TouchableOpacity 
                                        onPress={ () => navigation.navigate('Appointments')}
                                    >
                                    <ColumnView justifyContent='space-between' alignItem='center' width={80} height={130} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10}>
                                        <ColumnView padding={5} backgroundColor={theme.primary} borderRadius={5}>
                                            <Iconify icon='carbon:calendar' size={30} color={'#fff'}/>
                                            {/* <Calendar color={'#fff'} width={30} height={30}  /> */}
                                        </ColumnView>
                                        <View style={{height: 50, justifyContent: 'flex-start', alignItems: 'center'}}>
                                            <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Appts</Text>
                                        </View>
                                    </ColumnView>
                                </TouchableOpacity>
                                <ColumnView justifyContent='space-between' alignItem='center' width={80} height={130} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10}>
                                    <ColumnView padding={5} backgroundColor={theme.primary} borderRadius={5}>
                                        <Iconify icon='fluent-mdl2:task-manager-mirrored' size={30} color={'#fff'}/>  
                                        {/* <BookStack color={'#fff'} width={30} height={30}  /> */}
                                    </ColumnView>
                                    <View style={{height: 50, justifyContent: 'flex-start', alignItems: 'center'}}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>Manage Campaign</Text>
                                    </View>
                                </ColumnView>
                                <ColumnView justifyContent='space-between' alignItem='center' width={80} height={130} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10}>
                                    <ColumnView padding={5} backgroundColor={theme.primary} borderRadius={5}>
                                        <Iconify icon='clarity:id-badge-line' size={30} color={'#fff'}/>  
                                        {/* <UserCrown color={'#fff'} width={30} height={30}  /> */}
                                    </ColumnView>
                                    <View style={{height: 50, justifyContent: 'flex-start', alignItems: 'center'}}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Regular', color: theme.primaryDark}}>ID Badge</Text>
                                    </View>
                                </ColumnView>
                            </RowView>
                            <View style={{width: 10}}></View>
                        </ScrollView>
                    </View>
                    {/* end of Dashboard */}
                    {/* Hot Contacts */}
                    <View>
                        <RowView alignItem='center' justifyContent='space-between' paddingHorizontal={21} marginTop={15}>
                            <Text style={{fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Hot Contacts</Text>
                            <RowView alignItem='center' gap={10}>
                                <Text>Lead</Text>
                                <Text>Customer</Text>
                                <MoreHorizCircle color={'#000'} width={14} height={14}  />
                            </RowView>
                        </RowView>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <RowView alignItem='center' paddingHorizontal={21} paddingVertical={10} gap={15} marginTop={10}>
                                <RowView justifyContent='flex-start' alignItem='center' width={150} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <CircleView diameter={40} backgroundColor={'#1111'}>
                                        <Text>B</Text>
                                    </CircleView>
                                    <ColumnView alignItem='flex-start' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Bryan</Text>
                                        <Text style={{textAlign: 'center', fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Lead</Text>
                                    </ColumnView>
                                    <TouchableOpacity style={{position: 'absolute', top: -10, right: -10, backgroundColor: '#fff', borderRadius: 10}}>
                                        <XmarkCircle color={'red'} width={20} height={20} />
                                    </TouchableOpacity>
                                </RowView>
                                <RowView justifyContent='flex-start' alignItem='center' width={150} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <CircleView diameter={40} backgroundColor={'#1111'}>
                                        <Text>K</Text>
                                    </CircleView>
                                    <ColumnView alignItem='flex-start' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Kaarlo</Text>
                                        <Text style={{textAlign: 'center', fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Lead</Text>
                                    </ColumnView>
                                    <TouchableOpacity style={{position: 'absolute', top: -10, right: -10, backgroundColor: '#fff', borderRadius: 10}}>
                                        <XmarkCircle color={'red'} width={20} height={20} />
                                    </TouchableOpacity>
                                </RowView>

                                <RowView justifyContent='flex-start' alignItem='center' width={150} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <CircleView diameter={40} backgroundColor={'#1111'}>
                                        <Text>J</Text>
                                    </CircleView>
                                    <ColumnView alignItem='flex-start' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 16, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>John</Text>
                                        <Text style={{textAlign: 'center', fontSize: 10, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Lead</Text>
                                    </ColumnView>
                                    <TouchableOpacity style={{position: 'absolute', top: -10, right: -10, backgroundColor: '#fff', borderRadius: 10}}>
                                        <XmarkCircle color={'red'} width={20} height={20} />
                                    </TouchableOpacity>
                                </RowView>
                                
                            </RowView>
                            <View style={{width: 10}}></View>
                        </ScrollView>
                    </View>
                    {/* end of Hot Contacts */}
                    
                    {/* New Contacts */}
                    <View>
                        <RowView alignItem='center' justifyContent='space-between' paddingHorizontal={21} marginTop={15}>
                            <Text style={{fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>New Contacts</Text>
                            <RowView alignItem='center' gap={10}>
                                <Text>Daily</Text>
                                <Text>Weekly</Text>
                                <Text>This Month</Text>
                            </RowView>
                        </RowView>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <RowView alignItem='center' paddingHorizontal={21} paddingVertical={10} gap={15} marginTop={10}>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 80, maxHeight: 25}}>Leads</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>5</Text>
                                    </ColumnView>
                                </ColumnView>
                                <ColumnView justifyContent='center' alignItem='center' width={110} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 80, maxHeight: 25}}>Customers</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>5</Text>
                                    </ColumnView>
                                </ColumnView>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 80, maxHeight: 25}}>Recruits</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>5</Text>
                                    </ColumnView>
                                </ColumnView>
                            </RowView>
                            <View style={{width: 10}}></View>
                        </ScrollView>
                    </View>
                    {/* end of New Contacts */}

                    {/* Champions */}
                    <View>
                        <RowView alignItem='center' justifyContent='space-between' paddingHorizontal={21} marginTop={15}>
                            <Text style={{fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Champions</Text>
                            <TouchableOpacity  style={{position: 'relative', zIndex: 2}}
                                    onPress={() => navigation.navigate('AllReviews')}
                                >
                                <RowView alignItem='center' gap={10}>
                                    <Text>See All Champions</Text>
                                </RowView>
                            </TouchableOpacity>
                        </RowView>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <RowView alignItem='center' paddingHorizontal={21} paddingVertical={10} gap={15} marginTop={10}>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Weekly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>15</Text>
                                    </ColumnView>
                                </ColumnView>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Monthly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>25</Text>
                                    </ColumnView>
                                </ColumnView>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Yearly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>40</Text>
                                    </ColumnView>
                                </ColumnView>
                            </RowView>
                            <View style={{width: 10}}></View>
                        </ScrollView>
                    </View>
                    {/* end Champions */}

                    {/* Referrals */}
                    <View>
                        <RowView alignItem='center' justifyContent='space-between' paddingHorizontal={21} marginTop={15}>
                            <Text style={{fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Referrals</Text>
                            <TouchableOpacity  style={{position: 'relative', zIndex: 2}}
                                    onPress={() => navigation.navigate('AllReviews')}
                                >
                                <RowView alignItem='center' gap={10}>
                                    <Text>See All Referrals</Text>
                                </RowView>
                            </TouchableOpacity>
                        </RowView>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <RowView alignItem='center' paddingHorizontal={21} paddingVertical={10} gap={15} marginTop={10}>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Weekly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>15</Text>
                                    </ColumnView>
                                </ColumnView>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Monthly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>25</Text>
                                    </ColumnView>
                                </ColumnView>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Yearly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>40</Text>
                                    </ColumnView>
                                </ColumnView>
                            </RowView>
                            <View style={{width: 10}}></View>
                        </ScrollView>
                    </View>
                    {/* end Referrals */}

                    {/* See All Reviews */}
                    <View>
                        <RowView alignItem='center' justifyContent='space-between' paddingHorizontal={21} marginTop={15}>
                            <Text style={{fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Reviews</Text>
                            <TouchableOpacity  style={{position: 'relative', zIndex: 2}}
                                    onPress={() => navigation.navigate('AllReviews')}
                                >
                                <RowView alignItem='center' gap={10}>
                                    <Text>See All Reviews</Text>
                                </RowView>
                            </TouchableOpacity>
                        </RowView>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <RowView alignItem='center' paddingHorizontal={21} paddingVertical={10} gap={15} marginTop={10}>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Weekly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>15</Text>
                                    </ColumnView>
                                </ColumnView>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Monthly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>25</Text>
                                    </ColumnView>
                                </ColumnView>
                                <ColumnView justifyContent='center' alignItem='center' width={100} height={70} borderWidth={0.2} borderRadius={5} gap={15} paddingVertical={10} paddingHorizontal={15}>
                                    <ColumnView justifyContent='space-between' alignItem='center' height={50}>
                                        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Manrope-Bold', color: theme.primaryDark, maxWidth: 70, maxHeight: 25}}>Yearly</Text>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>40</Text>
                                    </ColumnView>
                                </ColumnView>
                            </RowView>
                            <View style={{width: 10}}></View>
                        </ScrollView>
                    </View>
                    {/* end of See All Reviews */}
                    
                </ColumnView>
            </View>
            <View style={{height: 75}}></View>
        </ScrollView>
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

export default HomeScreen;