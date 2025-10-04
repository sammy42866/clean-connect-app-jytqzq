
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles, buttonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';
import { router } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';

export const WelcomeScreen: React.FC = () => {
  const [logoTapCount, setLogoTapCount] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogoPress = () => {
    setLogoTapCount(prev => prev + 1);
    console.log('Logo tapped:', logoTapCount + 1);
    
    // Reset count after 2 seconds of no taps
    setTimeout(() => {
      setLogoTapCount(0);
    }, 2000);
  };

  const handleLogoLongPress = () => {
    if (logoTapCount >= 2) {
      console.log('Admin access triggered! Tap count:', logoTapCount);
      router.push('/auth/admin-login');
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {/* Header with Logo */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={handleLogoPress}
              onLongPress={handleLogoLongPress}
              delayLongPress={800}
              activeOpacity={0.8}
              style={styles.logoTouchable}
            >
              <View style={styles.logoContainer}>
                <View style={styles.logoInner}>
                  <Text style={styles.dropIcon}>💧</Text>
                  <Text style={styles.mopIcon}>🧽</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <Text style={[textStyles.title, styles.appTitle]}>CleanConnect</Text>
            <Text style={[textStyles.bodySecondary, styles.tagline]}>
              Connecting customers, cleaning businesses, and workers
            </Text>
          </View>

          {/* Features Section */}
          <View style={styles.featuresSection}>
            <View style={styles.featureGrid}>
              <View style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <IconSymbol name="person.2.fill" size={24} color={colors.primary} />
                </View>
                <Text style={textStyles.heading}>Find Professionals</Text>
                <Text style={textStyles.caption}>Connect with trusted cleaning services in your area</Text>
              </View>

              <View style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <IconSymbol name="calendar" size={24} color={colors.secondary} />
                </View>
                <Text style={textStyles.heading}>Easy Scheduling</Text>
                <Text style={textStyles.caption}>Book and manage appointments with simple tools</Text>
              </View>

              <View style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <IconSymbol name="message.fill" size={24} color={colors.primary} />
                </View>
                <Text style={textStyles.heading}>Real-time Chat</Text>
                <Text style={textStyles.caption}>Communicate directly with service providers</Text>
              </View>

              <View style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <IconSymbol name="star.fill" size={24} color={colors.warning} />
                </View>
                <Text style={textStyles.heading}>Reviews & Ratings</Text>
                <Text style={textStyles.caption}>Make informed decisions with user feedback</Text>
              </View>
            </View>
          </View>

          {/* Role Selection Buttons */}
          <View style={styles.roleSection}>
            <Text style={[textStyles.subtitle, styles.roleTitle]}>Choose Your Role</Text>
            
            <View style={styles.roleButtons}>
              <TouchableOpacity
                style={[styles.roleButton, styles.customerButton]}
                onPress={() => router.push('/auth/customer-auth')}
                activeOpacity={0.8}
              >
                <View style={styles.roleButtonContent}>
                  <View style={[styles.roleIcon, styles.customerIcon]}>
                    <IconSymbol name="house.fill" size={28} color={colors.card} />
                  </View>
                  <View style={styles.roleTextContainer}>
                    <Text style={[textStyles.buttonTextLarge, styles.roleButtonTitle]}>
                      Login as Customer
                    </Text>
                    <Text style={[textStyles.caption, styles.roleButtonSubtitle]}>
                      Find and book cleaning services
                    </Text>
                  </View>
                  <IconSymbol name="chevron.right" size={20} color={colors.card} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.roleButton, styles.businessButton]}
                onPress={() => router.push('/auth/business-auth')}
                activeOpacity={0.8}
              >
                <View style={styles.roleButtonContent}>
                  <View style={[styles.roleIcon, styles.businessIcon]}>
                    <IconSymbol name="building.2.fill" size={28} color={colors.card} />
                  </View>
                  <View style={styles.roleTextContainer}>
                    <Text style={[textStyles.buttonTextLarge, styles.roleButtonTitle]}>
                      Login as Business
                    </Text>
                    <Text style={[textStyles.caption, styles.roleButtonSubtitle]}>
                      Manage your cleaning business
                    </Text>
                  </View>
                  <IconSymbol name="chevron.right" size={20} color={colors.card} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.roleButton, styles.workerButton]}
                onPress={() => router.push('/auth/worker-auth')}
                activeOpacity={0.8}
              >
                <View style={styles.roleButtonContent}>
                  <View style={[styles.roleIcon, styles.workerIcon]}>
                    <IconSymbol name="person.fill.checkmark" size={28} color={colors.card} />
                  </View>
                  <View style={styles.roleTextContainer}>
                    <Text style={[textStyles.buttonTextLarge, styles.roleButtonTitle]}>
                      Login as Worker
                    </Text>
                    <Text style={[textStyles.caption, styles.roleButtonSubtitle]}>
                      Access your work assignments
                    </Text>
                  </View>
                  <IconSymbol name="chevron.right" size={20} color={colors.card} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={[textStyles.small, styles.footerText]}>
              By continuing, you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoTouchable: {
    marginBottom: 20,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.primary,
    ...commonStyles.shadow,
  },
  logoInner: {
    position: 'relative',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropIcon: {
    fontSize: 32,
    position: 'absolute',
    top: -5,
    left: 5,
  },
  mopIcon: {
    fontSize: 28,
    position: 'absolute',
    bottom: -5,
    right: 5,
  },
  appTitle: {
    color: colors.primary,
    marginBottom: 8,
  },
  tagline: {
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 22,
  },
  featuresSection: {
    marginBottom: 40,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    ...commonStyles.shadow,
    borderWidth: 1,
    borderColor: colors.border,
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  roleSection: {
    marginBottom: 40,
  },
  roleTitle: {
    textAlign: 'center',
    marginBottom: 24,
    color: colors.text,
  },
  roleButtons: {
    gap: 16,
  },
  roleButton: {
    borderRadius: 16,
    padding: 20,
    ...commonStyles.shadow,
  },
  customerButton: {
    backgroundColor: colors.primary,
  },
  businessButton: {
    backgroundColor: colors.secondary,
  },
  workerButton: {
    backgroundColor: colors.neutral,
  },
  roleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  customerIcon: {
    backgroundColor: colors.primaryDark,
  },
  businessIcon: {
    backgroundColor: colors.secondaryDark,
  },
  workerIcon: {
    backgroundColor: colors.neutralDark,
  },
  roleTextContainer: {
    flex: 1,
  },
  roleButtonTitle: {
    marginBottom: 4,
  },
  roleButtonSubtitle: {
    color: colors.card,
    opacity: 0.8,
  },
  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 18,
  },
});
