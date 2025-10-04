
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'large';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 'large' 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoInner}>
            <Text style={styles.dropIcon}>💧</Text>
            <Text style={styles.mopIcon}>🧽</Text>
          </View>
        </View>
        
        {/* Spinner */}
        <ActivityIndicator 
          size={size} 
          color={colors.primary} 
          style={styles.spinner}
        />
        
        {/* Message */}
        <Text style={[textStyles.body, styles.message]}>{message}</Text>
        
        {/* App name */}
        <Text style={[textStyles.heading, styles.appName]}>CleanConnect</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: colors.primary,
    ...commonStyles.shadow,
  },
  logoInner: {
    position: 'relative',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropIcon: {
    fontSize: 24,
    position: 'absolute',
    top: -3,
    left: 3,
  },
  mopIcon: {
    fontSize: 20,
    position: 'absolute',
    bottom: -3,
    right: 3,
  },
  spinner: {
    marginBottom: 16,
  },
  message: {
    textAlign: 'center',
    color: colors.textSecondary,
    marginBottom: 8,
  },
  appName: {
    color: colors.primary,
    textAlign: 'center',
  },
});
