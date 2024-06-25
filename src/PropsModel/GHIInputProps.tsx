import React, {ReactNode} from "react";

export interface GHITextInputProps {
    placeholder: string;
    onChangeText: (value: React.SetStateAction<string>) => void;
    editable?: boolean;
    secureTextEntry?: boolean;
    onEndEditing?: () => void;
    onFocus?: () => void;
    bdColor?: {};
    borderW?: number;
    valueData?: string;
    keyboardType?: 'email-address' | 'number-pad' | 'phone-pad' | 'default';
}