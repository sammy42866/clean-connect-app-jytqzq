
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { useAuth } from '@/contexts/AuthContext';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  const { user } = useAuth();

  // Define tabs based on user role
  const getTabsForRole = (): TabBarItem[] => {
    const baseTab = {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'house.fill',
      label: 'Home',
    };

    switch (user?.role) {
      case 'customer':
        return [
          baseTab,
          {
            name: 'browse',
            route: '/(tabs)/browse',
            icon: 'magnifyingglass',
            label: 'Browse',
          },
          {
            name: 'bookings',
            route: '/(tabs)/bookings',
            icon: 'calendar',
            label: 'Bookings',
          },
          {
            name: 'profile',
            route: '/(tabs)/profile',
            icon: 'person.fill',
            label: 'Profile',
          },
        ];
      
      case 'business':
        return [
          baseTab,
          {
            name: 'workers',
            route: '/(tabs)/workers',
            icon: 'person.2.fill',
            label: 'Workers',
          },
          {
            name: 'jobs',
            route: '/(tabs)/jobs',
            icon: 'briefcase.fill',
            label: 'Jobs',
          },
          {
            name: 'analytics',
            route: '/(tabs)/analytics',
            icon: 'chart.bar.fill',
            label: 'Analytics',
          },
          {
            name: 'profile',
            route: '/(tabs)/profile',
            icon: 'person.fill',
            label: 'Profile',
          },
        ];
      
      case 'worker':
        return [
          baseTab,
          {
            name: 'my-jobs',
            route: '/(tabs)/my-jobs',
            icon: 'list.bullet',
            label: 'My Jobs',
          },
          {
            name: 'messages',
            route: '/(tabs)/messages',
            icon: 'message.fill',
            label: 'Messages',
          },
          {
            name: 'profile',
            route: '/(tabs)/profile',
            icon: 'person.fill',
            label: 'Profile',
          },
        ];
      
      case 'admin':
        return [
          baseTab,
          {
            name: 'users',
            route: '/(tabs)/users',
            icon: 'person.3.fill',
            label: 'Users',
          },
          {
            name: 'businesses',
            route: '/(tabs)/businesses',
            icon: 'building.2.fill',
            label: 'Businesses',
          },
          {
            name: 'settings',
            route: '/(tabs)/settings',
            icon: 'gear',
            label: 'Settings',
          },
        ];
      
      default:
        return [baseTab];
    }
  };

  const tabs = getTabsForRole();

  // Use NativeTabs for iOS, custom FloatingTabBar for Android and Web
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        {tabs.map((tab) => (
          <NativeTabs.Trigger key={tab.name} name={tab.name}>
            <Icon sf={tab.icon} />
            <Label>{tab.label}</Label>
          </NativeTabs.Trigger>
        ))}
      </NativeTabs>
    );
  }

  // For Android and Web, use Stack navigation with custom floating tab bar
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        {tabs.map((tab) => (
          <Stack.Screen key={tab.name} name={tab.name} />
        ))}
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
