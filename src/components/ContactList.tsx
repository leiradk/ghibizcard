import React, { FC, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ColumnView } from './ColumnView'
import { useTheme } from '../theme/ThemeContext'
import { RowView } from './RowView'
import { CircleView } from './CircleView'
import { MoreVert } from 'iconoir-react-native'

interface ContactListProps {
    selectedContact?: Object | string
}


const ContactListComponent: FC<ContactListProps> = ({selectedContact}) => {
    const theme = useTheme();
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <View style={styles.body}>
        <ColumnView>
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
        </ColumnView>
        <ColumnView>
            <View>
                <ScrollView>
                <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: '#66666650'}}
                                onPress={ () => {}}
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
                            </RowView>
                        </TouchableOpacity>
                </ScrollView>
            </View>
        </ColumnView>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: 400,
        position: 'relative',
    },
});

export default ContactListComponent