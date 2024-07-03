import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RowView } from '../../components/RowView';
import { CircleView } from '../../components/CircleView';
import { useTheme } from '../../theme/ThemeContext';
import { ColumnView } from '../../components/ColumnView';
import { GHITextInput } from '../../components/GHITextInput';

import { InputSearch, ListSelect, Message, MoreVert, Phone } from 'iconoir-react-native';
import { useNavigation } from '@react-navigation/native';

const ContactScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [tabIndex, setTabIndex] = useState(0);
    const [isSearch, setIsSearch] = useState(false);
  return (
    <View style={styles.body}>
        <View style={{height: 50, position: 'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.primary}}>
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold', color: theme.primaryDark}}>Contacts</Text>
            <TouchableOpacity style={{position: 'absolute', right: 21}}
                    onPress={ () => setIsSearch(!isSearch)}
                >
                <InputSearch color={theme.primaryDark} width={30} height={30}/>
            </TouchableOpacity>
        </View>
        <RowView alignItem='center' height={50} backgroundColor='#1111' justifyContent='space-evenly'>
            <TouchableOpacity style={{width: "33.3%", height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: tabIndex === 0 ? theme.primaryDark : '#4444'}}
                    onPress={ () => setTabIndex(0)}
                >
                <Text style={{fontSize: 14, fontFamily: tabIndex === 0 ? 'Manrope-Bold': 'Manrope-Regular', color: tabIndex === 0 ? theme.primaryDark : '#666666'}}>Lead</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: "33.3%", height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: tabIndex === 1 ? theme.primaryDark : '#4444'}}
                     onPress={ () => setTabIndex(1)}
                >
                <Text style={{fontSize: 14, fontFamily: tabIndex === 1 ? 'Manrope-Bold': 'Manrope-Regular', color: tabIndex === 1 ? theme.primaryDark : '#666666'}}>Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: "33.3%", height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: tabIndex === 2 ? theme.primaryDark : '#4444'}}
                     onPress={ () => setTabIndex(2)}
                >
                <Text style={{fontSize: 14, fontFamily: tabIndex === 1 ? 'Manrope-Bold': 'Manrope-Regular', color: tabIndex === 2 ? theme.primaryDark : '#666666'}}>Recruit</Text>
            </TouchableOpacity>
        </RowView>
        
        <ColumnView>
            { isSearch &&(
                <View style={{paddingHorizontal: 15}}>
                    <RowView justifyContent='space-between'>
                        <Text style={{ fontSize: 14, 
                            fontFamily: 'Manrope-Regular', 
                            color: theme.primaryDark, marginTop: 10}}>Sort by: Date</Text>
                        <RowView alignItem='center' marginTop={10}>
                            <Text style={{ fontSize: 14, 
                                fontFamily: 'Manrope-Regular', 
                                color: theme.primaryDark}}>Ascending | 
                                </Text>
                            <ListSelect color={theme.primaryDark} width={18} height={18} />
                        </RowView>
                    </RowView>
                    
                    <GHITextInput placeholder={'Search'} onChangeText={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.');
                    } } />
                </View>
            )}
            { tabIndex === 0 &&(
                <View>
                    <ScrollView>
                        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: '#66666650'}}
                                onPress={ () => {
                                    // const { name, phone, email, contactType } = route.params
                                    navigation.navigate('ContactDetails', { 
                                                                            name: 'Brayan',
                                                                            lastname: 'Wilder', 
                                                                            phone: '+63912345678',
                                                                            email: 'bryan@mail.com', 
                                                                            contactType: 'Lead', 
                                                                            createdAt: 'June 30, 2024', 
                                                                            status: 'Signed'})
                                }}
                            >
                            <RowView paddingHorizontal={21} paddingVertical={10} alignItem='center' justifyContent='space-between' gap={10}>
                                <RowView gap={10}>
                                    <CircleView diameter={50} backgroundColor={'#2222'}>
                                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold'}}>BL</Text>
                                    </CircleView>
                                    <ColumnView>
                                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold'}}>Bryan Label</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Created at: June 30, 2024</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Lead</Text>
                                    </ColumnView>
                                </RowView>
                                <RowView gap={15} alignItem='center'>
                                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: 'green'}}>Signed</Text>
                                    <MoreVert color={theme.primaryDark} width={30} height={30} />
                                </RowView>
                            </RowView>
                        </TouchableOpacity>
                        <View style={{borderBottomWidth: 1, borderBottomColor: '#66666650'}}>
                            <RowView paddingHorizontal={21} paddingVertical={10} alignItem='center' justifyContent='space-between' gap={10}>
                                <RowView gap={10}>
                                    <CircleView diameter={50} backgroundColor={'#2222'}>
                                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold'}}>KM</Text>
                                    </CircleView>
                                    <ColumnView>
                                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold'}}>Kaarlo Morgan</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Created at: June 29, 2024</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Lead</Text>
                                    </ColumnView>
                                </RowView>
                                <RowView gap={15} alignItem='center'>
                                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color: 'red'}}>Need Docs</Text>
                                    <MoreVert color={theme.primaryDark} width={30} height={30} />
                                </RowView>
                            </RowView>
                        </View>
                        <View style={{borderBottomWidth: 1, borderBottomColor: '#66666650'}}>
                            <RowView paddingHorizontal={21} paddingVertical={10} alignItem='center' justifyContent='space-between' gap={10}>
                                <RowView gap={10}>
                                    <CircleView diameter={50} backgroundColor={'#2222'}>
                                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold'}}>JW</Text>
                                    </CircleView>
                                    <ColumnView>
                                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold'}}>John Whiskey</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Created at: June 28, 2024</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Lead</Text>
                                    </ColumnView> 
                                </RowView>
                                <RowView gap={15} alignItem='center'>
                                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color:'blue'}}>Contacted</Text>
                                    <MoreVert color={theme.primaryDark} width={30} height={30} />
                                </RowView>
                            </RowView>
                        </View>

                        <View style={{borderBottomWidth: 1, borderBottomColor: '#66666650'}}>
                            <RowView paddingHorizontal={21} paddingVertical={10} alignItem='center' justifyContent='space-between' gap={10}>
                                <RowView gap={10}>
                                    <CircleView diameter={50} backgroundColor={'#2222'}>
                                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold'}}>WJ</Text>
                                    </CircleView>
                                    <ColumnView>
                                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold'}}>Wille James</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Created at: June 28, 2024</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Lead</Text>
                                    </ColumnView> 
                                </RowView>
                                <RowView gap={15} alignItem='center'>
                                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color:'green'}}>Onboarding</Text>
                                    <MoreVert color={theme.primaryDark} width={30} height={30} />
                                </RowView>
                            </RowView>
                        </View>

                        <View style={{borderBottomWidth: 1, borderBottomColor: '#66666650'}}>
                            <RowView paddingHorizontal={21} paddingVertical={10} alignItem='center' justifyContent='space-between' gap={10}>
                                <RowView gap={10}>
                                    <CircleView diameter={50} backgroundColor={'#2222'}>
                                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold'}}>CY</Text>
                                    </CircleView>
                                    <ColumnView>
                                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold'}}>Carl Yap</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Created at: June 28, 2024</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Lead</Text>
                                    </ColumnView> 
                                </RowView>
                                <RowView gap={15} alignItem='center'>
                                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color:'violet'}}>Verbal Commit</Text>
                                    <MoreVert color={theme.primaryDark} width={30} height={30} />
                                </RowView>
                            </RowView>
                        </View>
                        <View style={{borderBottomWidth: 1, borderBottomColor: '#66666650'}}>
                            <RowView paddingHorizontal={21} paddingVertical={10} alignItem='center' justifyContent='space-between' gap={10}>
                                <RowView gap={10}>
                                    <CircleView diameter={50} backgroundColor={'#2222'}>
                                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold'}}>FS</Text>
                                    </CircleView>
                                    <ColumnView>
                                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold'}}>Flora Smith</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Created at: June 28, 2024</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Lead</Text>
                                    </ColumnView> 
                                </RowView>
                                <RowView gap={15} alignItem='center'>
                                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color:'green'}}>Selling</Text>
                                    <MoreVert color={theme.primaryDark} width={30} height={30} />
                                </RowView>
                            </RowView>
                        </View>
                        <View style={{borderBottomWidth: 1, borderBottomColor: '#66666650'}}>
                            <RowView paddingHorizontal={21} paddingVertical={10} alignItem='center' justifyContent='space-between' gap={10}>
                                <RowView gap={10}>
                                    <CircleView diameter={50} backgroundColor={'#2222'}>
                                        <Text style={{fontSize: 14, fontFamily: 'Manrope-Bold'}}>JY</Text>
                                    </CircleView>
                                    <ColumnView>
                                        <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold'}}>James Yap</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Created at: June 28, 2024</Text>
                                        <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold'}}>Lead</Text>
                                    </ColumnView> 
                                </RowView>
                                <RowView gap={15} alignItem='center'>
                                    <Text style={{fontSize: 10, fontFamily: 'Manrope-Bold', color:'blue'}}>Prospect</Text>
                                    <MoreVert color={theme.primaryDark} width={30} height={30} />
                                </RowView>
                            </RowView>
                        </View>
                    </ScrollView>
                </View>
            )}
            
            
        </ColumnView>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
    },
});

export default ContactScreen;