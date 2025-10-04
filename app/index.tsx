
import React from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { WelcomeScreen } from '@/screens/WelcomeScreen';

export default function IndexScreen() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner message="Loading CleanConnect..." />;
  }

  if (user) {
    return <Redirect href="/(tabs)" />;
  }

  return <WelcomeScreen />;
}
