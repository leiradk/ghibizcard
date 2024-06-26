import React, { FC, ReactNode } from 'react';
import {
    DimensionValue,
    StyleSheet,
    TextInput,
    View,
  } from 'react-native';

import { useTheme  } from '../theme/ThemeContext';
import { GHITextInputProps } from '../PropsModel/GHIInputProps';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

interface RowViewProps {
    children: ReactNode;
    justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-evenly' | 'space-around';
    alignItem?: 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'stretch';
    marginTop?: DimensionValue;
    marginBottom?: DimensionValue;
    marginLeft?: DimensionValue;
    marginRight?: DimensionValue;
    margin?: DimensionValue;
    marginHorizontal?: DimensionValue;
    marginVertical?: DimensionValue;
    padding?: DimensionValue;
    paddingTop?: DimensionValue;
    paddingBottom?: DimensionValue;
    paddingLeft?: DimensionValue;
    paddingRight?: DimensionValue;
    paddingHorizontal?: DimensionValue;
    paddingVertical?: DimensionValue;
}

export const RowView: FC<RowViewProps> = ({ 
                                            children, 
                                            justifyContent, 
                                            alignItem, 
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
                                            paddingVertical}) => {
    const theme = useTheme();
    return (
        <View style={[styles.body, 
            { 
                justifyContent: justifyContent, 
                alignItems: alignItem,
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