import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RowView } from '../../components/RowView'
import { useTheme } from '../../theme/ThemeContext';
import { ColumnView } from '../../components/ColumnView';
import { Iconify } from 'react-native-iconify';
import { Bell } from 'iconoir-react-native';

const { width: screenWidth } = Dimensions.get('window');

const ActivityScreen = () => {
   const theme = useTheme();
   const [tabIndex, setTabIndex] = useState(0)
   
  return (
    <View style={styles.body}>
        <RowView justifyContent='center' alignItem='center' height={50} backgroundColor={theme.primary}>
            <Text style={{fontSize: 20, fontFamily: 'Manrope-Bold', color: '#fff'}}>Activity</Text>
        </RowView>
        <RowView alignItem='center' height={50} backgroundColor='#1111' justifyContent='space-evenly'>
            <TouchableOpacity style={{width: "25%", height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: tabIndex === 0 ? theme.primaryDark : '#4444'}}
                    onPress={ () => setTabIndex(0)}
                >
                <Text style={{fontSize: 14, fontFamily: tabIndex === 0 ? 'Manrope-Bold': 'Manrope-Regular', color: tabIndex === 0 ? theme.primaryDark : '#666666'}}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: "25%", height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: tabIndex === 1 ? theme.primaryDark : '#4444'}}
                    onPress={ () => setTabIndex(1)}
                >
                <Text style={{fontSize: 14, fontFamily: tabIndex === 1 ? 'Manrope-Bold': 'Manrope-Regular', color: tabIndex === 1 ? theme.primaryDark : '#666666'}}>Lead</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: "25%", height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: tabIndex === 2 ? theme.primaryDark : '#4444'}}
                     onPress={ () => setTabIndex(2)}
                >
                <Text style={{fontSize: 14, fontFamily: tabIndex === 2 ? 'Manrope-Bold': 'Manrope-Regular', color: tabIndex === 2 ? theme.primaryDark : '#666666'}}>Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: "25%", height: 50, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: tabIndex === 3 ? theme.primaryDark : '#4444'}}
                     onPress={ () => setTabIndex(3)}
                >
                <Text style={{fontSize: 14, fontFamily: tabIndex === 3 ? 'Manrope-Bold': 'Manrope-Regular', color: tabIndex === 3 ? theme.primaryDark : '#666666'}}>Recruit</Text>
            </TouchableOpacity>
        </RowView>
        <View>
            <ScrollView>
                <ColumnView marginTop={15}>
                    <RowView paddingHorizontal={15} paddingVertical={10} >
                        <Iconify icon='solar:eye-linear' size={25} color={theme.primaryDark}/>
                        <ColumnView>
                            <Text style={styles.message}>Kaarlo Parker <Text style={{color: theme.primary}}>(Lead)</Text> has visited your website.</Text>
                            <Text style={styles.time}>Just now</Text>
                        </ColumnView>
                    </RowView>
                    <RowView paddingHorizontal={15} paddingVertical={10} >
                        <Iconify icon='solar:eye-linear' size={25} color={theme.primaryDark}/>
                        <ColumnView>
                            <Text style={styles.message}>Bryan Smith 
                            <Text style={{color: theme.primary}}> (Customer) </Text>
                                has visited your Instagram.</Text>
                            <Text style={styles.time}>2 mins ago</Text>
                        </ColumnView>
                    </RowView>
                    <RowView paddingHorizontal={15} paddingVertical={10} >
                        <Iconify icon='solar:eye-linear' size={25} color={theme.primaryDark}/>
                        <ColumnView>
                            <Text style={styles.message}>John Conor <Text style={{color: theme.primary}}>(Recruit)</Text> has visited your website.</Text>
                            <Text style={styles.time}>1 hour ago</Text>
                        </ColumnView>
                    </RowView>
                    <RowView paddingHorizontal={15} paddingVertical={10} >
                        <Iconify icon='solar:eye-linear' size={25} color={theme.primaryDark}/>
                        <ColumnView>
                            <Text style={styles.message}>John Conor <Text style={{color: theme.primary}}>(Recruit)</Text> viewed your business card.</Text>
                            <Text style={styles.time}>2 hour ago</Text>
                        </ColumnView>
                    </RowView>
                    <RowView paddingHorizontal={15} paddingVertical={10} >
                        <Bell width={25} height={25} color={theme.primaryDark}/>
                        <ColumnView>
                            <Text style={styles.message}>You have an appointment with Bryan Smith <Text style={{color: theme.primary}}>(Recruit)</Text></Text>
                            <Text style={styles.time}>3 hour ago</Text>
                        </ColumnView>
                    </RowView>
                    <RowView paddingHorizontal={15} paddingVertical={10} >
                        <Iconify icon='tdesign:play-demo' size={20} color={theme.primaryDark}/>
                        <ColumnView>
                            <Text style={styles.message}>Bryan Smith <Text style={{color: theme.primary}}>(Recruit)</Text> watched your video</Text>
                            <Text style={styles.time}>5 hour ago</Text>
                        </ColumnView>
                    </RowView>
                    <RowView paddingHorizontal={15} paddingVertical={10} >
                        <Bell width={25} height={25} color={theme.primaryDark}/>
                        <ColumnView>
                            <Text style={styles.message}>Tap to enter.</Text>
                            <Text style={styles.time}>3 hour ago</Text>
                        </ColumnView>
                    </RowView>
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
    time: {
        color: '#0097FF',
        paddingLeft: 10
    },
    message: {
        alignItems: 'center', 
        textAlign:'justify', 
        paddingLeft: 10, 
        paddingRight: 15,
        width: screenWidth - 55
    }
});

export default ActivityScreen