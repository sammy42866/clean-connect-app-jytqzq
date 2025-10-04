
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';
import { router } from 'expo-router';

export const WelcomeScreen: React.FC = () => {
  const [logoTapCount, setLogoTapCount] = useState(0);
  const [isHolding, setIsHolding] = useState(false);

  const handleLogoPress = () => {
    setLogoTapCount(prev => prev + 1);
    
    // Reset count after 2 seconds of no taps
    setTimeout(() => {
      setLogoTapCount(0);
    }, 2000);
  };

  const handleLogoLongPress = () => {
    if (logoTapCount >= 3) {
      console.log('Admin access triggered!');
      router.push('/auth/admin-login');
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleLogoPress}
            onLongPress={handleLogoLongPress}
            delayLongPress={500}
            activeOpacity={0.8}
          >
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>🧽</Text>
            </View>
          </TouchableOpacity>
          
          <Text style={textStyles.title}>CleanConnect</Text>
          <Text style={[textStyles.bodySecondary, styles.subtitle]}>
            Connecting customers, cleaning businesses, and workers
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.featureList}>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>👥</Text>
              <Text style={textStyles.body}>Connect with trusted cleaning professionals</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>📅</Text>
              <Text style={textStyles.body}>Easy scheduling and task management</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>💬</Text>
              <Text style={textStyles.body}>Real-time communication</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>⭐</Text>
              <Text style={textStyles.body}>Reviews and ratings system</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <CustomButton
            title="Get Started as Customer"
            onPress={() => router.push('/auth/customer-auth')}
            style={styles.button}
          />
          
          <CustomButton
            title="Business Login"
            onPress={() => router.push('/auth/business-auth')}
            variant="outline"
            style={styles.button}
          />
          
          <TouchableOpacity
            onPress={() => router.push('/auth/worker-auth')}
            style={styles.workerLink}
          >
            <Text style={[textStyles.caption, styles.workerLinkText]}>
              Worker? Sign in here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 40,
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 40,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  featureList: {
    marginVertical: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 16,
    width: 32,
  },
  footer: {
    marginBottom: 20,
  },
  button: {
    marginVertical: 8,
  },
  workerLink: {
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
  },
  workerLinkText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
