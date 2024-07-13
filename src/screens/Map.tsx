import React, { useCallback, useState, useRef } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, Animated , TouchableOpacity, View, TextInput, Switch } from 'react-native'
import { RowView } from '../components/RowView';
import { CircleView } from '../components/CircleView';
import { useTheme } from '../theme/ThemeContext';
import { ColumnView } from '../components/ColumnView';
import { ArrowLeft, Box3dPoint, Calendar, CardWallet, CreditCard, DownloadCircle, Edit, FloppyDisk, Globe, Mail, MediaImage, Menu, Message, MobileDevMode, MoreHorizCircle, NavArrowRight, Pause, Phone, Play, Send, SendDiagonal, Star, Trophy, UserPlus, Xmark, XmarkCircle } from 'iconoir-react-native';
import { GHITextInput } from '../components/GHITextInput';
import YouTube from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Iconify } from 'react-native-iconify';
import MapComponent from '../components/MapComponent';

const { width: screenWidth } = Dimensions.get('window');

const MapScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    
  return (
    <View style={[styles.body]}>
        <MapComponent />
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

export default MapScreen;