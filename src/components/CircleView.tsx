import React, { FC, ReactNode } from 'react';
import {
    DimensionValue,
    StyleSheet,
    TextInput,
    View,
  } from 'react-native';

import { useTheme  } from '../theme/ThemeContext';
import { Double, Float } from 'react-native/Libraries/Types/CodegenTypes';

interface CircleViewProps {
    children?: ReactNode
    diameter: Double
    backgroundColor: string;
    position?: 'relative' | 'absolute'
    top?: number,
    left?: number,
    right?: number,
    bottom?: number,
}

export const CircleView: FC<CircleViewProps> = ({children, diameter = 10, backgroundColor = '#666666', position='relative', top, left, right, bottom}) => {
    const theme = useTheme();
    const width = diameter; 
    const height = diameter;
    const radius = diameter / 2;
    return (
        <View style={[styles.body, { position: position , width: width, height: height, backgroundColor: backgroundColor, borderRadius: radius, top: top, left: left, right: right, bottom: bottom}]}>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});