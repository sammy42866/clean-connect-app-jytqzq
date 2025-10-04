
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';

export default function BookingsScreen() {
  const mockBookings = [
    {
      id: '1',
      businessName: 'Sparkle Clean Services',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'confirmed',
      service: 'House Cleaning',
      price: '$120',
    },
    {
      id: '2',
      businessName: 'Fresh Start Cleaning',
      date: '2024-01-20',
      time: '2:00 PM',
      status: 'pending',
      service: 'Deep Cleaning',
      price: '$200',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return colors.accent;
      case 'pending':
        return colors.highlight;
      case 'completed':
        return colors.secondary;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>My Bookings</Text>
          <Text style={textStyles.bodySecondary}>
            Track your cleaning appointments
          </Text>
        </View>

        <View style={styles.content}>
          {mockBookings.map((booking) => (
            <View key={booking.id} style={[commonStyles.card, styles.bookingCard]}>
              <View style={styles.bookingHeader}>
                <Text style={textStyles.subtitle}>{booking.businessName}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(booking.status) }]}>
                  <Text style={styles.statusText}>{booking.status.toUpperCase()}</Text>
                </View>
              </View>
              
              <Text style={[textStyles.body, styles.service]}>{booking.service}</Text>
              
              <View style={styles.bookingDetails}>
                <View style={styles.detailRow}>
                  <Text style={textStyles.caption}>📅 {booking.date}</Text>
                  <Text style={textStyles.caption}>🕐 {booking.time}</Text>
                </View>
                <Text style={[textStyles.body, styles.price]}>{booking.price}</Text>
              </View>
            </View>
          ))}
          
          {mockBookings.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={textStyles.bodySecondary}>No bookings yet</Text>
              <Text style={textStyles.caption}>
                Browse services to make your first booking
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
  bookingCard: {
    marginBottom: 16,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 10,
    color: colors.card,
    fontWeight: '600',
  },
  service: {
    marginBottom: 12,
    fontWeight: '500',
  },
  bookingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailRow: {
    flex: 1,
  },
  price: {
    fontWeight: '600',
    color: colors.accent,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
});
