
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';

export default function MyJobsScreen() {
  const mockJobs = [
    {
      id: '1',
      title: 'House Deep Clean',
      customer: 'Alice Brown',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'assigned',
      address: '123 Main St',
      instructions: 'Focus on kitchen and bathrooms',
    },
    {
      id: '2',
      title: 'Office Cleaning',
      customer: 'Tech Corp',
      date: '2024-01-16',
      time: '6:00 PM',
      status: 'in-progress',
      address: '456 Business Ave',
      instructions: 'After hours cleaning, use key from manager',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return colors.accent;
      case 'in-progress':
        return colors.primary;
      case 'assigned':
        return colors.highlight;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>My Jobs</Text>
          <Text style={textStyles.bodySecondary}>
            View and manage your assigned cleaning jobs
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
                <Text style={textStyles.body}>📍 {job.address}</Text>
                <Text style={textStyles.body}>📅 {job.date} at {job.time}</Text>
                {job.instructions && (
                  <Text style={[textStyles.caption, styles.instructions]}>
                    💡 {job.instructions}
                  </Text>
                )}
              </View>
              
              <View style={styles.jobActions}>
                {job.status === 'assigned' && (
                  <CustomButton
                    title="Start Job"
                    onPress={() => console.log('Start job:', job.title)}
                    style={styles.actionButton}
                  />
                )}
                {job.status === 'in-progress' && (
                  <>
                    <CustomButton
                      title="Upload Photos"
                      onPress={() => console.log('Upload photos for:', job.title)}
                      variant="outline"
                      style={styles.actionButton}
                    />
                    <CustomButton
                      title="Complete Job"
                      onPress={() => console.log('Complete job:', job.title)}
                      variant="accent"
                      style={styles.actionButton}
                    />
                  </>
                )}
                <CustomButton
                  title="Contact Manager"
                  onPress={() => console.log('Contact manager about:', job.title)}
                  variant="outline"
                  style={styles.actionButton}
                />
              </View>
            </View>
          ))}
          
          {mockJobs.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={textStyles.bodySecondary}>No jobs assigned yet</Text>
              <Text style={textStyles.caption}>
                Check back later for new assignments
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
    marginBottom: 16,
  },
  instructions: {
    backgroundColor: colors.background,
    padding: 8,
    borderRadius: 6,
    marginTop: 8,
    fontStyle: 'italic',
  },
  jobActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
});
