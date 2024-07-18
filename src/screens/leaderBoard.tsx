import React, { useCallback, useState, useRef } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, Animated , TouchableOpacity, View, TextInput, Switch } from 'react-native'
import { RowView } from '../components/RowView';
import { CircleView } from '../components/CircleView';
import { useTheme } from '../theme/ThemeContext';
import { ColumnView } from '../components/ColumnView';
import { ArrowLeft, Box3dPoint, Calendar, CardWallet, CreditCard, DownloadCircle, Edit, FloppyDisk, Globe, Mail, MediaImage, Menu, Message, MobileDevMode, MoreHorizCircle, NavArrowDown, NavArrowLeft, NavArrowRight, Pause, Phone, Play, Send, SendDiagonal, Star, Trophy, UserPlus, Xmark, XmarkCircle } from 'iconoir-react-native';
import { GHITextInput } from '../components/GHITextInput';
import YouTube from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Iconify } from 'react-native-iconify';
import DatePicker from 'react-native-date-picker';
import GHIModal from '../components/GHIModal';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const { width: screenWidth } = Dimensions.get('window');

const LeaderBoardScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const [openDate, setOpenDate] = useState(false);
    const [openPreDate, setOpenPreDate] = useState(false);

    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
    const [selectedPreOption, setSelectedPreOption] = useState('Today');

    const onDateChange = (date: Date, type: string) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
            setTimeout( () => {
                setOpenDate(!openDate);
            }, 1500)
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null);
        }
    };

    const setPreDate = (value: number) => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDay();
        const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
        const today = new Date()
        const quarter = Math.floor(month / 3) + 1;
        const startOfWeek = moment().startOf('week').toDate();
        const endOfWeek = moment().endOf('week').toDate();
        let startDate: Date, endDate: Date;
    
        switch (value) {
            case 1: // Today
                    startDate = today;
                    endDate = today;
                    setSelectedStartDate(startDate);
                    setSelectedEndDate(endDate);
                break;
            case 2: // This Week
                    setSelectedStartDate(startOfWeek);
                    setSelectedEndDate(endOfWeek);
                break;
            case 3: // This Month
                    startDate = moment(`${year}-${month + 1}-01`).toDate();
                    endDate = moment(`${year}-${month + 1}-${daysInMonth + 1}`).toDate();
                    setSelectedStartDate(startDate);
                    setSelectedEndDate(endDate);
                break;
            case 4: // This Quarter
                let start: Date, end: Date;
                    switch (quarter) {
                        case 1:
                            start = moment(`${year}-01-01`).toDate();
                            end = moment(`${year}-03-31`).toDate();
                            setSelectedStartDate(start);
                            setSelectedEndDate(end);
                            break;
                        case 2:
                            start = moment(`${year}-04-01`).toDate();
                            end = moment(`${year}-06-30`).toDate();
                            setSelectedStartDate(start);
                            setSelectedEndDate(end);
                            break;
                        case 3:
                            start = moment(`${year}-07-01`).toDate();
                            end = moment(`${year}-09-30`).toDate();
                            setSelectedStartDate(start);
                            setSelectedEndDate(end);
                            break;
                        case 4:
                            start = moment(`${year}-10-01`).toDate();
                            end = moment(`${year}-12-31`).toDate();
                            setSelectedStartDate(start);
                            setSelectedEndDate(end);
                            break;
                        default:
                            throw new Error('Invalid quarter');
                    }
                break;
            case 5: // Quarter 1 (Q1)
                    startDate = moment(`${year}-01-01`).toDate();
                    endDate = moment(`${year}-03-31`).toDate();
                    setSelectedStartDate(startDate);
                    setSelectedEndDate(endDate);
                break;
            case 6: // Quarter 2 (Q2)
                    startDate = moment(`${year}-04-01`).toDate();
                    endDate = moment(`${year}-06-30`).toDate();
                    setSelectedStartDate(startDate);
                    setSelectedEndDate(endDate);
                break;
            case 7: // Quarter 3 (Q3)
                    startDate = moment(`${year}-07-01`).toDate();
                    endDate = moment(`${year}-09-30`).toDate();
                    setSelectedStartDate(startDate);
                    setSelectedEndDate(endDate);
                break;
            case 8: // Quarter 4 (Q4)
                    startDate = moment(`${year}-10-01`).toDate();
                    endDate = moment(`${year}-12-31`).toDate();
                    setSelectedStartDate(startDate);
                    setSelectedEndDate(endDate);
                break;
        }
    };

    const filterPreDate = [
        { key: 1, value: 'Today'},
        { key: 2, value: 'This Week'},
        { key: 3, value: 'This Month'},
        { key: 4, value: 'This Quarter'},
        { key: 5, value: 'Q1'},
        { key: 6, value: 'Q2'},
        { key: 7, value: 'Q3'},
        { key: 8, value: 'Q4'},
    ]
    
    const formatDate = (date: Date) => {
        return moment(date).format('dddd MM-DD-YYYY');
    };

    const handlePreDate = (value: string, index: number) => {
        setPreDate(index);
        setSelectedPreOption(value)
        setOpenPreDate(!openPreDate)
    }
  return (
    <View style={[styles.body]}>
        <RowView backgroundColor={theme.primary} height={50} justifyContent='space-between' alignItem='center'>
            <RowView alignItem='center' paddingLeft={15} gap={10}>
                <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                    <NavArrowLeft color='#fff' width={20} height={20} />
                </TouchableOpacity>
                <Iconify icon='bi:trophy' size={14} color={'#fff'}/>
                <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold', color: '#fff'}}>Leader Boards</Text>
            </RowView>
            <TouchableOpacity>
                <RowView marginRight={15} gap={10} paddingHorizontal={10} height={35} backgroundColor={theme.primaryDark} alignItem='center' borderRadius={5}>
                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Regular', color: '#fff'}}>Referral</Text>
                    <NavArrowDown color='#fff' width={20} height={20} />
                </RowView>
            </TouchableOpacity>
        </RowView>
        <ColumnView>
            <RowView padding={15} justifyContent='space-between'>
                <View style={[{height: 46, width: '35%',},styles.filter]}>
                    <Text>Reps</Text>
                    <NavArrowDown color='#666666' width={20} height={20} />
                </View>
                <TouchableOpacity style={[{height: 46, width: '45%',}, styles.filter]}
                        onPress={() => setOpenPreDate(!openPreDate)}
                    >
                    <Text>{selectedPreOption}</Text>
                    <NavArrowDown color='#666666' width={20} height={20} />
                </TouchableOpacity>
                <TouchableOpacity style={[{height: 46, width: '15%',}, styles.filter]}
                        onPress={() => setOpenDate(!openDate)}
                    >
                    <Iconify icon='carbon:calendar' size={30} color={'#666666'}/>
                </TouchableOpacity>
            </RowView>
            <View style={{paddingHorizontal: 15}}>
                { selectedPreOption === 'Today' ? (
                    <Text style={[styles.preOptionText, {color: theme.primaryDark}]}>{formatDate(selectedStartDate)}</Text>
                ) : (
                    <View>
                        { selectedStartDate && selectedEndDate &&(
                            <Text style={[styles.preOptionText, {color: theme.primaryDark}]}>{formatDate(selectedStartDate)} - {formatDate(selectedEndDate)}</Text>
                        ) }
                    </View>
                )}
            </View>
        </ColumnView>
        <View style={{paddingLeft: 15}}>
            <ColumnView marginTop={15} gap={15}>
                <RowView>
                    <Text style={styles.title}>Referral Sold</Text>
                </RowView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <RowView gap={10}>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                    </RowView>
                </ScrollView>
            </ColumnView>
            <ColumnView marginTop={15} gap={15}>
                <RowView>
                    <Text style={styles.title}>AVG Referral Sold Per Day</Text>
                </RowView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <RowView gap={10}>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                        <ColumnView width={70} justifyContent='center'>
                            <CircleView diameter={70} backgroundColor={'#2222'}>
                                <Text>AJ</Text>
                            </CircleView>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}> Bryan Smith</Text>
                            <Text style={styles.number}>10,000</Text>
                        </ColumnView>
                    </RowView>
                </ScrollView>
            </ColumnView>
        </View>
        <GHIModal 
            title={'Select Date'} 
            alignment={'center'} 
            isVisible={openDate} 
            onClose={() => setOpenDate(!openDate)}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={new Date(2000, 1, 1)}
                    maxDate={new Date(2100, 12, 31)}
                    todayBackgroundColor={theme.primaryLight}
                    selectedDayColor={theme.primaryDark}
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={onDateChange}
                    width={screenWidth - 30}
                />
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>
                    {selectedStartDate ? `Start Date: ${selectedStartDate}` : 'Select Start Date'}
                    </Text>
                    <Text style={styles.dateText}>
                    {selectedEndDate ? `End Date: ${selectedEndDate}` : 'Select End Date'}
                    </Text>
                </View>
            </View>
        </GHIModal>

        <GHIModal 
            title={'Select Option'} 
            alignment={'center'} 
            isVisible={openPreDate} 
            onClose={()=> setOpenPreDate(!openPreDate)}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                { filterPreDate.map ((item, index) => {
                    return (
                        <TouchableOpacity key={item.key} style={{width: '100%'}}
                                onPress={() => handlePreDate(item.value, item.key)}
                            >
                            <RowView 
                                backgroundColor={selectedPreOption == item.value ? theme.primaryDark: theme.primaryLight} 
                                padding={10} 
                                margin={5} 
                                borderRadius={5}
                                justifyContent='center'>
                                <Text style={{fontSize: 14, 
                                            fontFamily: selectedPreOption == item.value ? 'Manrope-Bold': 'Manrope-Regular', 
                                            color: '#fff'}}>{item.value}</Text>
                            </RowView>
                        </TouchableOpacity>
                    )})
                }
            </View>
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
    filter: {
        display: 'flex', 
        flexDirection: 'row', 
        paddingHorizontal:10, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderWidth: 1, 
        borderColor: '#666666', 
        borderRadius: 5,
    },
    title: {
        fontSize: 16, 
        fontFamily: 'Manrope-Bold',
    },
    name: {
        fontSize:14, 
        fontFamily: 'Manrope-Regular', 
        width: 70, 
        textAlign: 'center'
    },
    number: {
        fontSize: 12, 
        fontFamily: 'Manrope-Bold', 
        width: 70, 
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    dateContainer: {
        marginTop: 16,
    },
    dateText: {
        fontSize: 16,
        marginVertical: 8,
    },
    preOptionText: {
        fontSize:14, 
        fontFamily: 'Manrope-Bold', 
    }
});

export default LeaderBoardScreen;

