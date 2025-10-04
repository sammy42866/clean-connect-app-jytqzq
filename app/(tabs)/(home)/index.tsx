
import React from "react";
import { Stack } from "expo-router";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useAuth } from "@/contexts/AuthContext";
import { colors, textStyles, commonStyles } from "@/styles/commonStyles";
import { CustomButton } from "@/components/CustomButton";

export default function HomeScreen() {
  const theme = useTheme();
  const { user, logout } = useAuth();

  const getRoleSpecificContent = () => {
    switch (user?.role) {
      case 'customer':
        return (
          <View style={styles.roleContent}>
            <Text style={textStyles.subtitle}>Welcome, {user.name}!</Text>
            <Text style={textStyles.bodySecondary}>
              Find and book trusted cleaning services in your area.
            </Text>
            
            <View style={styles.quickActions}>
              <Text style={[textStyles.body, styles.sectionTitle]}>Quick Actions</Text>
              <CustomButton
                title="Browse Cleaning Services"
                onPress={() => console.log('Browse services')}
                style={styles.actionButton}
              />
              <CustomButton
                title="View My Bookings"
                onPress={() => console.log('View bookings')}
                variant="outline"
                style={styles.actionButton}
              />
            </View>
          </View>
        );
      
      case 'business':
        return (
          <View style={styles.roleContent}>
            <Text style={textStyles.subtitle}>Business Dashboard</Text>
            <Text style={textStyles.bodySecondary}>
              Manage your cleaning business and workers.
            </Text>
            
            <View style={styles.quickActions}>
              <Text style={[textStyles.body, styles.sectionTitle]}>Quick Actions</Text>
              <CustomButton
                title="Manage Workers"
                onPress={() => console.log('Manage workers')}
                style={styles.actionButton}
              />
              <CustomButton
                title="View Jobs"
                onPress={() => console.log('View jobs')}
                variant="outline"
                style={styles.actionButton}
              />
              <CustomButton
                title="Analytics"
                onPress={() => console.log('View analytics')}
                variant="accent"
                style={styles.actionButton}
              />
            </View>
          </View>
        );
      
      case 'worker':
        return (
          <View style={styles.roleContent}>
            <Text style={textStyles.subtitle}>Worker Dashboard</Text>
            <Text style={textStyles.bodySecondary}>
              View your assigned jobs and communicate with your manager.
            </Text>
            
            <View style={styles.quickActions}>
              <Text style={[textStyles.body, styles.sectionTitle]}>Quick Actions</Text>
              <CustomButton
                title="View My Jobs"
                onPress={() => console.log('View jobs')}
                style={styles.actionButton}
              />
              <CustomButton
                title="Messages"
                onPress={() => console.log('View messages')}
                variant="outline"
                style={styles.actionButton}
              />
            </View>
          </View>
        );
      
      case 'admin':
        return (
          <View style={styles.roleContent}>
            <Text style={textStyles.subtitle}>Admin Panel</Text>
            <Text style={textStyles.bodySecondary}>
              Manage users, businesses, and system settings.
            </Text>
            
            <View style={styles.quickActions}>
              <Text style={[textStyles.body, styles.sectionTitle]}>Admin Actions</Text>
              <CustomButton
                title="Manage Users"
                onPress={() => console.log('Manage users')}
                style={styles.actionButton}
              />
              <CustomButton
                title="Business Oversight"
                onPress={() => console.log('Business oversight')}
                variant="outline"
                style={styles.actionButton}
              />
              <CustomButton
                title="System Settings"
                onPress={() => console.log('System settings')}
                variant="secondary"
                style={styles.actionButton}
              />
            </View>
          </View>
        );
      
      default:
        return (
          <View style={styles.roleContent}>
            <Text style={textStyles.subtitle}>Welcome to CleanConnect</Text>
            <Text style={textStyles.bodySecondary}>
              Please log in to access your dashboard.
            </Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "CleanConnect",
            headerShown: true,
          }}
        />
      )}
      <ScrollView 
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        contentContainerStyle={[
          styles.scrollContent,
          Platform.OS !== 'ios' && styles.scrollContentWithTabBar
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.appTitle}>🧽 CleanConnect</Text>
          <Text style={[textStyles.caption, styles.roleIndicator]}>
            {user?.role?.toUpperCase()} ACCOUNT
          </Text>
        </View>

        {getRoleSpecificContent()}

        <View style={styles.footer}>
          <CustomButton
            title="Sign Out"
            onPress={logout}
            variant="outline"
            style={styles.signOutButton}
          />
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
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  roleIndicator: {
    backgroundColor: colors.primary,
    color: colors.card,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
  },
  roleContent: {
    flex: 1,
    alignItems: 'center',
  },
  quickActions: {
    width: '100%',
    marginTop: 30,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  actionButton: {
    marginVertical: 6,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  signOutButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});
