import React, { useState } from 'react'
import { Image, ProgressBarAndroid, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Box, Check, CheckSquareSolid, Eye, EyeClosed, HandCash, NavArrowLeft, Square, Star, StarDashed, StarHalfDashed } from 'iconoir-react-native';
import { GHITextInput } from '../../components/GHITextInput';
import { ColumnView } from '../../components/ColumnView';
import { RowView } from '../../components/RowView';
import * as Progress from 'react-native-progress';


const AllReviewsScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    
    // Properties
    const [rememberMe, setRememberMe] = useState(false);
    const [hideShow, setHideShow] = useState(false);
    const handleRememberMe = (value: boolean) => {
        setRememberMe(value);
    }

  return (
    <View style={[styles.body, {backgroundColor: theme.primary}]}>
        <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
            <RowView paddingHorizontal={15} marginTop={15} gap={10} alignItem='center'>
                <ArrowLeft color={'#fff'} width={20} height={20} />
                <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: '#fff'}} >Rating and Reviews</Text>
            </RowView>
        </TouchableOpacity>
        {/* <ColumnView alignItem='center' marginTop={15}>
            <Image
                source={require('../../../assets/sample_profile.jpg')} 
                style={{width: 75, height: 75, borderRadius: 38}}
            />
            <Text style={{fontSize: 16, fontFamily: 'Manrope-Bold', color: '#fff'}}>Ariel Delos Santos</Text>
            <Text style={{fontSize: 12, fontFamily: 'Manrope-Regular', color: '#fff'}}>Green Home Improvements Plus</Text>
        </ColumnView> */}
        <RowView padding={15} gap={10} alignItem='center'>
            <ColumnView gap={5}>
                <Text style={{fontSize: 45, fontFamily: 'Manrope-Medium', color: '#fff'}}>5.0</Text>
                <RowView>
                    <Star color={'#fff'} width={15} height={15} fill={'yellow'} />
                    <Star color={'#fff'} width={15} height={15} fill={'yellow'} />
                    <Star color={'#fff'} width={15} height={15} fill={'yellow'} />
                    <Star color={'#fff'} width={15} height={15} fill={'yellow'} />
                    <Star color={'#fff'} width={15} height={15} fill={'yellow'} />
                </RowView>
                <Text style={{fontSize: 12, fontFamily: 'Manrope-Medium', color: '#fff'}}>10k reviews</Text>
            </ColumnView>
            <ColumnView>
                <RowView alignItem='center' gap={10}>
                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Medium', color: '#fff'}}>5</Text>
                    <View>
                        <Progress.Bar progress={1} width={200} height={8} color={theme.primaryDark} />
                    </View>
                </RowView>
                <RowView alignItem='center' gap={10}>
                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Medium', color: '#fff'}}>4</Text>
                    <View>
                        <Progress.Bar progress={0.0} width={200} height={8} color={theme.primaryDark} />
                    </View>
                </RowView>
                <RowView alignItem='center' gap={10}>
                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Medium', color: '#fff'}}>3</Text>
                    <View>
                        <Progress.Bar progress={0.0} width={200} height={8} color={theme.primaryDark} />
                    </View>
                </RowView>
                <RowView alignItem='center' gap={10}>
                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Medium', color: '#fff'}}>2</Text>
                    <View>
                        <Progress.Bar progress={0.0} width={200} height={8} color={theme.primaryDark} />
                    </View>
                </RowView>
                <RowView alignItem='center' gap={10}>
                    <Text style={{fontSize: 12, fontFamily: 'Manrope-Medium', color: '#fff'}}>1 </Text>
                    <View>
                        <Progress.Bar progress={0.0} width={200} height={8} color={theme.primaryDark} />
                    </View>
                </RowView>
            </ColumnView>
        </RowView>
        <View style={{flex: 1, marginTop: 15, backgroundColor: '#fff', borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
            <ScrollView style={{}}>
                
                    <ColumnView>
                        <RowView>
                            <Text></Text>
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
    },
});

export default AllReviewsScreen;