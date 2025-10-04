
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';

export default function BrowseScreen() {
  const mockBusinesses = [
    {
      id: '1',
      name: 'Sparkle Clean Services',
      rating: 4.8,
      reviewCount: 127,
      services: ['House Cleaning', 'Office Cleaning'],
      price: '$25-50/hour',
    },
    {
      id: '2',
      name: 'Fresh Start Cleaning',
      rating: 4.6,
      reviewCount: 89,
      services: ['Deep Cleaning', 'Move-in/out'],
      price: '$30-60/hour',
    },
    {
      id: '3',
      name: 'Elite Cleaning Co.',
      rating: 4.9,
      reviewCount: 203,
      services: ['Residential', 'Commercial'],
      price: '$35-70/hour',
    },
  ];

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>Browse Services</Text>
          <Text style={textStyles.bodySecondary}>
            Find trusted cleaning professionals in your area
          </Text>
        </View>

        <View style={styles.content}>
          {mockBusinesses.map((business) => (
            <View key={business.id} style={[commonStyles.card, styles.businessCard]}>
              <View style={styles.businessHeader}>
                <Text style={textStyles.subtitle}>{business.name}</Text>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>⭐ {business.rating}</Text>
                  <Text style={textStyles.caption}>({business.reviewCount} reviews)</Text>
                </View>
              </View>
              
              <View style={styles.services}>
                {business.services.map((service, index) => (
                  <View key={index} style={styles.serviceTag}>
                    <Text style={styles.serviceText}>{service}</Text>
                  </View>
                ))}
              </View>
              
              <View style={styles.businessFooter}>
                <Text style={[textStyles.body, styles.price]}>{business.price}</Text>
                <CustomButton
                  title="Contact"
                  onPress={() => console.log('Contact business:', business.name)}
                  style={styles.contactButton}
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
    marginBottom: 12,
  },
  rating: {
    alignItems: 'flex-end',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  serviceTag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  serviceText: {
    fontSize: 12,
    color: colors.card,
    fontWeight: '500',
  },
  businessFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: '600',
    color: colors.accent,
  },
  contactButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
