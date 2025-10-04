
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';

export default function AnalyticsScreen() {
  const mockStats = {
    totalJobs: 156,
    completedJobs: 142,
    activeWorkers: 8,
    monthlyRevenue: '$12,450',
    averageRating: 4.7,
    customerRetention: '85%',
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>Business Analytics</Text>
          <Text style={textStyles.bodySecondary}>
            Track your business performance
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.statsGrid}>
            <View style={[commonStyles.card, styles.statCard]}>
              <Text style={styles.statNumber}>{mockStats.totalJobs}</Text>
              <Text style={textStyles.caption}>Total Jobs</Text>
            </View>
            
            <View style={[commonStyles.card, styles.statCard]}>
              <Text style={styles.statNumber}>{mockStats.completedJobs}</Text>
              <Text style={textStyles.caption}>Completed</Text>
            </View>
            
            <View style={[commonStyles.card, styles.statCard]}>
              <Text style={styles.statNumber}>{mockStats.activeWorkers}</Text>
              <Text style={textStyles.caption}>Active Workers</Text>
            </View>
            
            <View style={[commonStyles.card, styles.statCard]}>
              <Text style={[styles.statNumber, styles.revenue]}>{mockStats.monthlyRevenue}</Text>
              <Text style={textStyles.caption}>Monthly Revenue</Text>
            </View>
            
            <View style={[commonStyles.card, styles.statCard]}>
              <Text style={styles.statNumber}>⭐ {mockStats.averageRating}</Text>
              <Text style={textStyles.caption}>Average Rating</Text>
            </View>
            
            <View style={[commonStyles.card, styles.statCard]}>
              <Text style={styles.statNumber}>{mockStats.customerRetention}</Text>
              <Text style={textStyles.caption}>Customer Retention</Text>
            </View>
          </View>

          <View style={[commonStyles.card, styles.chartPlaceholder]}>
            <Text style={textStyles.subtitle}>Revenue Trend</Text>
            <View style={styles.chartArea}>
              <Text style={textStyles.bodySecondary}>📈 Chart visualization would go here</Text>
              <Text style={textStyles.caption}>
                Monthly revenue growth over the past 6 months
              </Text>
            </View>
          </View>

          <View style={[commonStyles.card, styles.chartPlaceholder]}>
            <Text style={textStyles.subtitle}>Job Completion Rate</Text>
            <View style={styles.chartArea}>
              <Text style={textStyles.bodySecondary}>🍩 Doughnut chart would go here</Text>
              <Text style={textStyles.caption}>
                Breakdown of job statuses and completion rates
              </Text>
            </View>
          </View>
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 20,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  revenue: {
    color: colors.accent,
  },
  chartPlaceholder: {
    marginBottom: 20,
    paddingVertical: 24,
  },
  chartArea: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginTop: 12,
  },
});
