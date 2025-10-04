
import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from "@react-navigation/native";
import { useAuth } from "@/contexts/AuthContext";
import { colors, textStyles, commonStyles } from "@/styles/commonStyles";
import { CustomButton } from "@/components/CustomButton";

export default function ProfileScreen() {
  const theme = useTheme();
  const { user, logout } = useAuth();

  const getRoleSpecificInfo = () => {
    switch (user?.role) {
      case 'customer':
        return (
          <View style={styles.roleInfo}>
            <Text style={textStyles.body}>📍 Properties: 2</Text>
            <Text style={textStyles.body}>📅 Total Bookings: 15</Text>
            <Text style={textStyles.body}>⭐ Average Rating Given: 4.7</Text>
          </View>
        );
      
      case 'business':
        return (
          <View style={styles.roleInfo}>
            <Text style={textStyles.body}>🏢 Business: Sparkle Clean Services</Text>
            <Text style={textStyles.body}>👥 Workers: 5</Text>
            <Text style={textStyles.body}>💼 Completed Jobs: 142</Text>
            <Text style={textStyles.body}>⭐ Business Rating: 4.8</Text>
            <Text style={textStyles.body}>💳 Subscription: Active</Text>
          </View>
        );
      
      case 'worker':
        return (
          <View style={styles.roleInfo}>
            <Text style={textStyles.body}>🏢 Employer: Sparkle Clean Services</Text>
            <Text style={textStyles.body}>✅ Completed Jobs: 28</Text>
            <Text style={textStyles.body}>🛠️ Skills: House Cleaning, Deep Cleaning</Text>
            <Text style={textStyles.body}>📊 Performance: Excellent</Text>
          </View>
        );
      
      case 'admin':
        return (
          <View style={styles.roleInfo}>
            <Text style={textStyles.body}>🔐 Admin Level: Super Admin</Text>
            <Text style={textStyles.body}>👥 Total Users: 1,247</Text>
            <Text style={textStyles.body}>🏢 Active Businesses: 156</Text>
            <Text style={textStyles.body}>📊 System Health: Excellent</Text>
          </View>
        );
      
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView 
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        contentContainerStyle={[
          styles.scrollContent,
          Platform.OS !== 'ios' && styles.scrollContentWithTabBar
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.name?.charAt(0)?.toUpperCase() || '?'}
            </Text>
          </View>
          
          <Text style={textStyles.title}>{user?.name || 'User'}</Text>
          <Text style={[textStyles.bodySecondary, styles.email]}>{user?.email}</Text>
          
          <View style={[styles.roleBadge, { backgroundColor: colors.primary }]}>
            <Text style={styles.roleText}>{user?.role?.toUpperCase()}</Text>
          </View>
        </View>

        <View style={[commonStyles.card, styles.infoCard]}>
          <Text style={[textStyles.subtitle, styles.cardTitle]}>Account Information</Text>
          {getRoleSpecificInfo()}
          
          <View style={styles.accountDetails}>
            <Text style={textStyles.body}>📧 Email: {user?.email}</Text>
            <Text style={textStyles.body}>📅 Member Since: {user?.createdAt?.toLocaleDateString()}</Text>
          </View>
        </View>

        <View style={[commonStyles.card, styles.actionsCard]}>
          <Text style={[textStyles.subtitle, styles.cardTitle]}>Account Actions</Text>
          
          <CustomButton
            title="Edit Profile"
            onPress={() => console.log('Edit profile')}
            variant="outline"
            style={styles.actionButton}
          />
          
          <CustomButton
            title="Change Password"
            onPress={() => console.log('Change password')}
            variant="outline"
            style={styles.actionButton}
          />
          
          <CustomButton
            title="Notification Settings"
            onPress={() => console.log('Notification settings')}
            variant="outline"
            style={styles.actionButton}
          />
          
          {user?.role === 'business' && (
            <CustomButton
              title="Manage Subscription"
              onPress={() => console.log('Manage subscription')}
              variant="accent"
              style={styles.actionButton}
            />
          )}
        </View>

        <View style={styles.footer}>
          <CustomButton
            title="Sign Out"
            onPress={logout}
            variant="secondary"
            style={styles.signOutButton}
          />
          
          <Text style={[textStyles.caption, styles.version]}>
            CleanConnect v1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  scrollContentWithTabBar: {
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.card,
  },
  email: {
    marginTop: 4,
    marginBottom: 12,
  },
  roleBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  roleText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.card,
  },
  infoCard: {
    marginBottom: 20,
  },
  actionsCard: {
    marginBottom: 20,
  },
  cardTitle: {
    marginBottom: 16,
  },
  roleInfo: {
    marginBottom: 16,
  },
  accountDetails: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  actionButton: {
    marginVertical: 6,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signOutButton: {
    marginBottom: 20,
  },
  version: {
    opacity: 0.6,
  },
});
