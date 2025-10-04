
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';
import { CustomInput } from '@/components/CustomInput';
import { useAuth } from '@/contexts/AuthContext';

export const WorkerAuthScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async () => {
    if (!email || !inviteCode) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
      // In a real app, you would validate the invite code with the backend
      console.log('Validating worker invite:', { email, inviteCode });
      
      // Mock validation - in real app this would be an API call
      if (inviteCode.length < 6) {
        Alert.alert('Error', 'Invalid invite code');
        return;
      }

      const success = await login(email, 'worker-password', 'worker');

      if (success) {
        router.replace('/(tabs)');
      } else {
        Alert.alert('Error', 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Worker auth error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>Worker Access</Text>
          <Text style={[textStyles.bodySecondary, styles.subtitle]}>
            Enter your invitation details to access your worker account
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inviteNotice}>
            <Text style={[textStyles.caption, styles.noticeText]}>
              🔐 Worker accounts are invitation-only. You should have received an invite code from your business manager.
            </Text>
          </View>

          <CustomInput
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <CustomInput
            label="Invitation Code"
            value={inviteCode}
            onChangeText={setInviteCode}
            placeholder="Enter your invitation code"
            autoCapitalize="characters"
          />

          <CustomButton
            title="Access Worker Account"
            onPress={handleSubmit}
            loading={isLoading}
            style={styles.submitButton}
          />

          <View style={styles.helpContainer}>
            <Text style={[textStyles.caption, styles.helpText]}>
              Don&apos;t have an invitation code?
            </Text>
            <Text style={[textStyles.caption, styles.helpText]}>
              Contact your business manager or employer for access.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <CustomButton
            title="Back to Welcome"
            onPress={() => router.back()}
            variant="outline"
            style={styles.backButton}
          />
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
  inviteNotice: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  noticeText: {
    color: colors.card,
    textAlign: 'center',
    lineHeight: 18,
  },
  submitButton: {
    marginTop: 20,
  },
  helpContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 8,
  },
  helpText: {
    textAlign: 'center',
    lineHeight: 18,
  },
  footer: {
    alignItems: 'center',
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
