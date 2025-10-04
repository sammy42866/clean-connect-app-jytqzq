
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomInput } from '@/components/CustomInput';
import { CustomButton } from '@/components/CustomButton';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';

export const AdminLoginScreen: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { adminLogin } = useAuth();

  const handleLogin = async () => {
    if (!password.trim()) {
      Alert.alert('Error', 'Please enter the admin password');
      return;
    }

    setIsLoading(true);
    console.log('Attempting admin login...');
    
    try {
      const success = await adminLogin(password);
      
      if (success) {
        console.log('Admin login successful');
        router.replace('/(tabs)');
      } else {
        Alert.alert('Access Denied', 'Invalid admin password');
      }
    } catch (error) {
      console.error('Admin login error:', error);
      Alert.alert('Error', 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <IconSymbol name="chevron.left" size={24} color={colors.adminText} />
          </TouchableOpacity>
          
          <View style={styles.logoContainer}>
            <View style={styles.adminLogo}>
              <IconSymbol name="gear" size={32} color={colors.adminAccent} />
            </View>
          </View>
          
          <Text style={[textStyles.title, styles.title]}>Admin Access</Text>
          <Text style={[textStyles.bodySecondary, styles.subtitle]}>
            Enter admin credentials to continue
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <CustomInput
            label="Admin Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Enter admin password"
            leftIcon="lock.fill"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <CustomButton
            title={isLoading ? 'Authenticating...' : 'Access Admin Panel'}
            onPress={handleLogin}
            loading={isLoading}
            style={styles.loginButton}
            variant="primary"
            size="large"
          />

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <IconSymbol name="info.circle" size={16} color={colors.adminText} />
              <Text style={[textStyles.small, styles.infoText]}>
                Admin access is restricted to authorized personnel only
              </Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[textStyles.small, styles.footerText]}>
            CleanConnect Admin Panel v1.0
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.adminBackground,
  },
  container: {
    flex: 1,
    backgroundColor: colors.adminBackground,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 40,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 24,
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.adminCard,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 24,
    marginTop: 40,
  },
  adminLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.adminCard,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.adminAccent,
  },
  title: {
    color: colors.adminText,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.adminText,
    opacity: 0.7,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    paddingHorizontal: 24,
  },
  input: {
    backgroundColor: colors.adminCard,
    borderColor: colors.neutralDark,
    color: colors.adminText,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: colors.adminAccent,
    marginBottom: 24,
  },
  infoContainer: {
    backgroundColor: colors.adminCard,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.neutralDark,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoText: {
    color: colors.adminText,
    opacity: 0.8,
    marginLeft: 8,
    flex: 1,
    lineHeight: 18,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  footerText: {
    color: colors.adminText,
    opacity: 0.5,
  },
});
