import { ReactNode } from "react";
import { DimensionValue, AnimatableNumericValue } from "react-native";

export interface RCViewProps {
    children: ReactNode;
    justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-evenly' | 'space-around';
    alignItem?: 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'stretch';
    width?: DimensionValue;
    height?: DimensionValue;
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
    backgroundColor?: string;
    borderRadius?: AnimatableNumericValue;
    gap?: number;
    borderWidth?: number;
}