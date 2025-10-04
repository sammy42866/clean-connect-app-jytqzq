
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import { colors, textStyles, buttonStyles } from '@/styles/commonStyles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
}) => {
  const getButtonStyle = (): ViewStyle => {
    let baseStyle = buttonStyles.primary;
    
    switch (variant) {
      case 'secondary':
        baseStyle = buttonStyles.secondary;
        break;
      case 'outline':
        baseStyle = buttonStyles.outline;
        break;
      case 'ghost':
        baseStyle = buttonStyles.ghost;
        break;
      default:
        baseStyle = buttonStyles.primary;
    }

    if (size === 'large') {
      baseStyle = { ...baseStyle, ...buttonStyles.large };
    } else if (size === 'small') {
      baseStyle = { 
        ...baseStyle, 
        paddingVertical: 12, 
        paddingHorizontal: 16,
        borderRadius: 8,
      };
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle => {
    let baseTextStyle = textStyles.buttonText;
    
    if (variant === 'outline') {
      baseTextStyle = textStyles.buttonTextOutline;
    } else if (variant === 'ghost') {
      baseTextStyle = { ...textStyles.buttonText, color: colors.primary };
    }

    if (size === 'large') {
      baseTextStyle = { ...baseTextStyle, fontSize: 18 };
    } else if (size === 'small') {
      baseTextStyle = { ...baseTextStyle, fontSize: 14 };
    }

    return baseTextStyle;
  };

  const buttonStyle = [
    getButtonStyle(),
    disabled && styles.disabled,
    style,
  ];

  const buttonTextStyle = [
    getTextStyle(),
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' || variant === 'ghost' ? colors.primary : colors.card} 
        />
      ) : (
        <>
          {icon}
          <Text style={buttonTextStyle}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
});
