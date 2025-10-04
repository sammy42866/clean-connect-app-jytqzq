
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';
import { CustomInput } from '@/components/CustomInput';
import { useAuth } from '@/contexts/AuthContext';

export const AdminLoginScreen: React.FC = () => {
  const [password, setPassword] = useState('');
  const { adminLogin, isLoading } = useAuth();

  const handleSubmit = async () => {
    if (!password) {
      Alert.alert('Error', 'Please enter the admin password');
      return;
    }

    try {
      const success = await adminLogin(password);

      if (success) {
        router.replace('/(tabs)');
      } else {
        Alert.alert('Access Denied', 'Invalid admin password');
        setPassword('');
      }
    } catch (error) {
      console.error('Admin login error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.adminIcon}>🔐</Text>
          <Text style={textStyles.title}>Admin Access</Text>
          <Text style={[textStyles.bodySecondary, styles.subtitle]}>
            Enter admin credentials to continue
          </Text>
        </View>

        <View style={styles.form}>
          <CustomInput
            label="Admin Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter admin password"
            secureTextEntry
            autoCapitalize="none"
          />

          <CustomButton
            title="Access Admin Panel"
            onPress={handleSubmit}
            loading={isLoading}
            style={styles.submitButton}
          />

          <View style={styles.hintContainer}>
            <Text style={[textStyles.caption, styles.hintText]}>
              💡 Demo password: admin123
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <CustomButton
            title="Cancel"
            onPress={() => router.back()}
            variant="outline"
            style={styles.cancelButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  adminIcon: {
    fontSize: 48,
    marginBottom: 16,
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
  hintContainer: {
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: colors.highlight,
    borderRadius: 8,
  },
  hintText: {
    color: colors.text,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  cancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
