
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';
import { CustomInput } from '@/components/CustomInput';
import { useAuth } from '@/contexts/AuthContext';

export const CustomerAuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login, register, isLoading } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (!isLogin) {
      if (!name) {
        Alert.alert('Error', 'Please enter your name');
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
        success = await login(email, password, 'customer');
      } else {
        success = await register(email, password, name, 'customer');
      }

      if (success) {
        router.replace('/(tabs)');
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
            {isLogin ? 'Welcome Back!' : 'Join CleanConnect'}
          </Text>
          <Text style={[textStyles.bodySecondary, styles.subtitle]}>
            {isLogin 
              ? 'Sign in to your customer account' 
              : 'Create your free customer account'
            }
          </Text>
        </View>

        <View style={styles.form}>
          {!isLogin && (
            <CustomInput
              label="Full Name"
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
              autoCapitalize="words"
            />
          )}
          
          <CustomInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
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

          <CustomButton
            title={isLogin ? 'Sign In' : 'Create Account'}
            onPress={handleSubmit}
            loading={isLoading}
            style={styles.submitButton}
          />

          <View style={styles.switchContainer}>
            <Text style={textStyles.bodySecondary}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </Text>
            <CustomButton
              title={isLogin ? 'Sign Up' : 'Sign In'}
              onPress={() => setIsLogin(!isLogin)}
              variant="outline"
              style={styles.switchButton}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[textStyles.caption, styles.footerText]}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
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
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    textAlign: 'center',
    lineHeight: 18,
  },
});
