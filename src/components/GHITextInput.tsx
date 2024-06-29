import React, { FC } from 'react';
import {
    StyleSheet,
    TextInput,
  } from 'react-native';

import { useTheme  } from '../theme/ThemeContext';
import { GHITextInputProps } from '../PropsModel/GHIInputProps';

export const GHITextInput: FC<GHITextInputProps> = ({ placeholder, 
                                                      onChangeText, 
                                                      editable = true, 
                                                      secureTextEntry = false, 
                                                      onEndEditing, 
                                                      onFocus , 
                                                      bdColor={borderColor: '#224C12'}, 
                                                      borderW = 1, 
                                                      valueData, keyboardType='default',multiline=false, numberOfLines=1}) => {
    const theme = useTheme();
    return (
        <TextInput
                value={valueData}
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={[styles.Input, bdColor, {borderWidth: borderW, color: theme.primaryDark}]}
                editable={editable}
                secureTextEntry={secureTextEntry}
                onEndEditing={onEndEditing}
                onFocus={onFocus}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={numberOfLines}
            >
        </TextInput>
    );
}

const styles = StyleSheet.create({
    Input: {
        width: '100%', 
        height: 46,
        fontSize: 14,
        fontFamily: 'Manrope-Medium',
        borderRadius: 10, 
        marginVertical: 10, padding: 12,
        backgroundColor: '#f0f0f0'
    },
});