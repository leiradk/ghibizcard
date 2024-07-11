import React, { FC, ReactNode } from 'react';
import {
    AnimatableNumericValue,
    DimensionValue,
    StyleSheet,
    TextInput,
    View,
  } from 'react-native';

import { useTheme  } from '../theme/ThemeContext';
import { RCViewProps } from '../PropsModel/RCViewProps';

export const RowView: FC<RCViewProps> = ({ 
                                            children, 
                                            justifyContent, 
                                            alignItem, 
                                            width,
                                            height,
                                            marginTop, 
                                            marginBottom, 
                                            marginLeft,
                                            marginRight, 
                                            margin, 
                                            marginHorizontal, 
                                            marginVertical,
                                            padding, 
                                            paddingBottom, 
                                            paddingRight, 
                                            paddingTop, 
                                            paddingLeft, 
                                            paddingHorizontal, 
                                            paddingVertical, backgroundColor, borderRadius, gap, borderWidth, borderColor}) => {
    const theme = useTheme();
    return (
        <View style={[styles.body,
            { 
                justifyContent: justifyContent, 
                alignItems: alignItem,
                width: width,
                height: height,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: borderWidth,
                borderRadius: borderRadius,
                gap: gap,
                marginTop: marginTop,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginRight: marginRight,
                margin: margin,
                marginHorizontal: marginHorizontal,
                marginVertical: marginVertical,
                padding: padding,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                paddingHorizontal: paddingHorizontal,
                paddingVertical: paddingVertical,
            }]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'row'
    },
});