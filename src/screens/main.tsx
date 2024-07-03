import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RowView } from '../components/RowView';
import { CircleView } from '../components/CircleView';
import { useTheme } from '../theme/ThemeContext';
import { ColumnView } from '../components/ColumnView';
import { CreditCard, Home, NetworkRight, User} from 'iconoir-react-native';
import { Iconify } from 'react-native-iconify';
import HomeScreen from './tabs/home';
import ContactScreen from './tabs/contacts';
import SendCardScreen from './tabs/sendCard';
import RecruitScreen from './tabs/recruit';

const MainScreen = () => {
    const theme = useTheme();
    const [tabIndex, setTabIndex] = useState(0);
    
  return (
    <View style={styles.body}>
        { tabIndex === 0 &&(
            <HomeScreen />
        )}
        { tabIndex === 1 &&(
            <ContactScreen />
        )}
        { tabIndex === 2 &&(
            <SendCardScreen />
        )}
        { tabIndex === 3 &&(
           <RecruitScreen />
        )}
        <View style={{width: '100%',position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 5}}>
           <RowView justifyContent='space-evenly' width={'100%'}>
                <TouchableOpacity
                        onPress={() => setTabIndex(0)}
                    >
                    <ColumnView alignItem='center'>
                        <Iconify icon='healthicons:home-outline' size={20} color={theme.primaryDark}/>
                        {/* <Home color={theme.primaryDark} width={20} height={20} /> */}
                        <Text style={{fontSize: 10, fontFamily: tabIndex === 0 ?  'Manrope-Bold': 'Manrope-Regular'}}>Home</Text>
                    </ColumnView>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => setTabIndex(1)}
                    >
                    <ColumnView alignItem='center'>
                        <Iconify icon='system-uicons:contacts' size={20} color={theme.primaryDark}/>
                        <Text style={{fontSize: 10, fontFamily: tabIndex === 1 ?  'Manrope-Bold': 'Manrope-Regular'}}>Contacts</Text>
                    </ColumnView>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => setTabIndex(2)}
                    >
                    <ColumnView alignItem='center'>
                        <Iconify icon='fluent:contact-card-48-regular' size={20} color={theme.primaryDark}/>
                        <Text style={{fontSize: 10, fontFamily: tabIndex === 2 ?  'Manrope-Bold': 'Manrope-Regular'}}>Send Card</Text>
                    </ColumnView>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => setTabIndex(3)}
                    >
                    <ColumnView alignItem='center'>
                        <Iconify icon='ph:share-network-light' size={20} color={theme.primaryDark}/>
                        <Text style={{fontSize: 10, fontFamily: tabIndex === 2 ?  'Manrope-Bold': 'Manrope-Regular'}}>Recruit</Text>
                    </ColumnView>
                </TouchableOpacity>
            </RowView>
        </View>
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

export default MainScreen;