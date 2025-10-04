
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';
import { CustomInput } from '@/components/CustomInput';
import { useAuth } from '@/contexts/AuthContext';

export const BusinessAuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login, register, isLoading } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (!isLogin) {
      if (!businessName || !ownerName) {
        Alert.alert('Error', 'Please fill in all business details');
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }
    }

    try {
      let success = false;
      
      if (isLogin) {
        success = await login(email, password, 'business');
      } else {
        success = await register(email, password, ownerName, 'business');
      }

      if (success) {
        if (!isLogin) {
          Alert.alert(
            'Registration Successful!',
            'Your business account has been created. Please note that a subscription is required to access all features.',
            [{ text: 'OK', onPress: () => router.replace('/(tabs)') }]
          );
        } else {
          router.replace('/(tabs)');
        }
      } else {
        Alert.alert('Error', isLogin ? 'Login failed' : 'Registration failed');
      }
    } catch (error) {
      console.error('Auth error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>
            {isLogin ? 'Business Login' : 'Start Your Business'}
          </Text>
          <Text style={[textStyles.bodySecondary, styles.subtitle]}>
            {isLogin 
              ? 'Access your business dashboard' 
              : 'Join our network of cleaning professionals'
            }
          </Text>
        </View>

        <View style={styles.form}>
          {!isLogin && (
            <>
              <CustomInput
                label="Business Name"
                value={businessName}
                onChangeText={setBusinessName}
                placeholder="Enter your business name"
                autoCapitalize="words"
              />
              
              <CustomInput
                label="Owner Name"
                value={ownerName}
                onChangeText={setOwnerName}
                placeholder="Enter owner's full name"
                autoCapitalize="words"
              />
            </>
          )}
          
          <CustomInput
            label="Business Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your business email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <CustomInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
          
          {!isLogin && (
            <CustomInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your password"
              secureTextEntry
            />
          )}

          {!isLogin && (
            <View style={styles.subscriptionNotice}>
              <Text style={[textStyles.caption, styles.noticeText]}>
                💡 Business accounts require a paid subscription to access all features including worker management, task scheduling, and analytics.
              </Text>
            </View>
          )}

          <CustomButton
            title={isLogin ? 'Sign In' : 'Create Business Account'}
            onPress={handleSubmit}
            loading={isLoading}
            style={styles.submitButton}
          />

          <View style={styles.switchContainer}>
            <Text style={textStyles.bodySecondary}>
              {isLogin ? "New to CleanConnect? " : "Already have an account? "}
            </Text>
            <CustomButton
              title={isLogin ? 'Register Business' : 'Sign In'}
              onPress={() => setIsLogin(!isLogin)}
              variant="outline"
              style={styles.switchButton}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
  },
  form: {
    marginBottom: 40,
  },
  subscriptionNotice: {
    backgroundColor: colors.highlight,
    padding: 12,
    borderRadius: 8,
    marginVertical: 16,
  },
  noticeText: {
    color: colors.text,
    textAlign: 'center',
    lineHeight: 18,
  },
  submitButton: {
    marginTop: 20,
  },
  switchContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  switchButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
