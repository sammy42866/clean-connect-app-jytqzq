
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';

export default function JobsScreen() {
  const mockJobs = [
    {
      id: '1',
      title: 'House Deep Clean',
      customer: 'Alice Brown',
      worker: 'John Smith',
      date: '2024-01-15',
      status: 'in-progress',
      price: '$150',
      address: '123 Main St',
    },
    {
      id: '2',
      title: 'Office Cleaning',
      customer: 'Tech Corp',
      worker: 'Sarah Johnson',
      date: '2024-01-16',
      status: 'scheduled',
      price: '$200',
      address: '456 Business Ave',
    },
    {
      id: '3',
      title: 'Move-out Cleaning',
      customer: 'Bob Wilson',
      worker: 'Unassigned',
      date: '2024-01-18',
      status: 'pending',
      price: '$180',
      address: '789 Oak Street',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return colors.accent;
      case 'in-progress':
        return colors.primary;
      case 'scheduled':
        return colors.highlight;
      case 'pending':
        return colors.secondary;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>Job Management</Text>
          <Text style={textStyles.bodySecondary}>
            Track and manage all cleaning jobs
          </Text>
        </View>

        <View style={styles.content}>
          {mockJobs.map((job) => (
            <View key={job.id} style={[commonStyles.card, styles.jobCard]}>
              <View style={styles.jobHeader}>
                <Text style={textStyles.subtitle}>{job.title}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(job.status) }]}>
                  <Text style={styles.statusText}>{job.status.replace('-', ' ').toUpperCase()}</Text>
                </View>
              </View>
              
              <View style={styles.jobDetails}>
                <Text style={textStyles.body}>👤 Customer: {job.customer}</Text>
                <Text style={textStyles.body}>🧹 Worker: {job.worker}</Text>
                <Text style={textStyles.body}>📍 {job.address}</Text>
                <Text style={textStyles.body}>📅 {job.date}</Text>
              </View>
              
              <View style={styles.jobFooter}>
                <Text style={[textStyles.body, styles.price]}>{job.price}</Text>
                <View style={styles.actions}>
                  <CustomButton
                    title="View Details"
                    onPress={() => console.log('View job:', job.title)}
                    variant="outline"
                    style={styles.actionButton}
                  />
                  {job.worker === 'Unassigned' && (
                    <CustomButton
                      title="Assign Worker"
                      onPress={() => console.log('Assign worker to:', job.title)}
                      style={styles.actionButton}
                    />
                  )}
                </View>
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
  jobCard: {
    marginBottom: 16,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
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
  jobDetails: {
    marginBottom: 12,
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: '600',
    color: colors.accent,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
});
