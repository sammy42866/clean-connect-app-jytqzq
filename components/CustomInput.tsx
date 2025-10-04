
import React, { useState } from 'react';
import { 
  TextInput, 
  View, 
  Text, 
  StyleSheet, 
  TextInputProps, 
  ViewStyle,
  TouchableOpacity 
} from 'react-native';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from './IconSymbol';

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  secureTextEntry?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  containerStyle,
  leftIcon,
  rightIcon,
  onRightIconPress,
  secureTextEntry,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  const inputStyle = [
    styles.input,
    isFocused && styles.inputFocused,
    error && styles.inputError,
    leftIcon && styles.inputWithLeftIcon,
    (rightIcon || secureTextEntry) && styles.inputWithRightIcon,
    style,
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[textStyles.caption, styles.label, error && styles.labelError]}>
          {label}
        </Text>
      )}
      
      <View style={styles.inputContainer}>
        {leftIcon && (
          <View style={styles.leftIconContainer}>
            <IconSymbol 
              name={leftIcon as any} 
              size={20} 
              color={isFocused ? colors.primary : colors.textSecondary} 
            />
          </View>
        )}
        
        <TextInput
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={colors.textLight}
          secureTextEntry={isSecure}
          {...props}
        />
        
        {(rightIcon || secureTextEntry) && (
          <TouchableOpacity 
            style={styles.rightIconContainer}
            onPress={secureTextEntry ? toggleSecureEntry : onRightIconPress}
          >
            <IconSymbol 
              name={secureTextEntry ? (isSecure ? 'eye.slash' : 'eye') : rightIcon as any} 
              size={20} 
              color={isFocused ? colors.primary : colors.textSecondary} 
            />
          </TouchableOpacity>
        )}
      </View>
      
      {error && (
        <Text style={[textStyles.small, styles.errorText]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 8,
    marginLeft: 4,
    fontWeight: '600',
    color: colors.text,
  },
  labelError: {
    color: colors.error,
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  inputFocused: {
    borderColor: colors.primary,
    boxShadow: `0px 0px 0px 3px ${colors.primaryLight}`,
  },
  inputError: {
    borderColor: colors.error,
  },
  inputWithLeftIcon: {
    paddingLeft: 50,
  },
  inputWithRightIcon: {
    paddingRight: 50,
  },
  leftIconContainer: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  errorText: {
    color: colors.error,
    marginTop: 4,
    marginLeft: 4,
  },
});
