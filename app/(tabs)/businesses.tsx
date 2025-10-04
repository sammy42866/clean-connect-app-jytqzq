
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';

export default function BusinessesScreen() {
  const mockBusinesses = [
    {
      id: '1',
      name: 'Sparkle Clean Services',
      owner: 'Sarah Manager',
      email: 'info@sparkle.com',
      workers: 5,
      subscriptionStatus: 'active',
      rating: 4.8,
      joinDate: '2023-06-10',
    },
    {
      id: '2',
      name: 'Fresh Start Cleaning',
      owner: 'Mike Owner',
      email: 'contact@freshstart.com',
      workers: 3,
      subscriptionStatus: 'expired',
      rating: 4.6,
      joinDate: '2023-07-15',
    },
    {
      id: '3',
      name: 'Elite Cleaning Co.',
      owner: 'Lisa Boss',
      email: 'hello@elite.com',
      workers: 8,
      subscriptionStatus: 'active',
      rating: 4.9,
      joinDate: '2023-05-20',
    },
  ];

  const getSubscriptionColor = (status: string) => {
    return status === 'active' ? colors.accent : colors.error;
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>Business Oversight</Text>
          <Text style={textStyles.bodySecondary}>
            Monitor and manage all cleaning businesses
          </Text>
        </View>

        <View style={styles.content}>
          {mockBusinesses.map((business) => (
            <View key={business.id} style={[commonStyles.card, styles.businessCard]}>
              <View style={styles.businessHeader}>
                <View>
                  <Text style={textStyles.subtitle}>{business.name}</Text>
                  <Text style={textStyles.caption}>Owner: {business.owner}</Text>
                  <Text style={textStyles.caption}>{business.email}</Text>
                </View>
                <View style={[styles.subscriptionBadge, { backgroundColor: getSubscriptionColor(business.subscriptionStatus) }]}>
                  <Text style={styles.badgeText}>{business.subscriptionStatus.toUpperCase()}</Text>
                </View>
              </View>
              
              <View style={styles.businessStats}>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>{business.workers}</Text>
                  <Text style={textStyles.caption}>Workers</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>⭐ {business.rating}</Text>
                  <Text style={textStyles.caption}>Rating</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={textStyles.caption}>Joined</Text>
                  <Text style={textStyles.caption}>{business.joinDate}</Text>
                </View>
              </View>
              
              <View style={styles.businessActions}>
                <CustomButton
                  title="View Details"
                  onPress={() => console.log('View business:', business.name)}
                  variant="outline"
                  style={styles.actionButton}
                />
                <CustomButton
                  title="Manage Subscription"
                  onPress={() => console.log('Manage subscription:', business.name)}
                  variant={business.subscriptionStatus === 'active' ? 'secondary' : 'accent'}
                  style={styles.actionButton}
                />
                <CustomButton
                  title="Contact"
                  onPress={() => console.log('Contact business:', business.name)}
                  style={styles.actionButton}
                />
              </View>
            </View>
          ))}
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
  businessCard: {
    marginBottom: 16,
  },
  businessHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  subscriptionBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 10,
    color: colors.card,
    fontWeight: '600',
  },
  businessStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  businessActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
});
