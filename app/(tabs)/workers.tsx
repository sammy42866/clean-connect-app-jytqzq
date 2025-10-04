
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';

export default function WorkersScreen() {
  const mockWorkers = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@email.com',
      status: 'active',
      skills: ['House Cleaning', 'Deep Cleaning'],
      joinDate: '2023-06-15',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      status: 'active',
      skills: ['Office Cleaning', 'Window Cleaning'],
      joinDate: '2023-08-20',
    },
    {
      id: '3',
      name: 'Mike Davis',
      email: 'mike@email.com',
      status: 'inactive',
      skills: ['Carpet Cleaning', 'Move-out Cleaning'],
      joinDate: '2023-05-10',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'active' ? colors.accent : colors.textSecondary;
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>Manage Workers</Text>
          <Text style={textStyles.bodySecondary}>
            Invite and manage your cleaning team
          </Text>
          
          <CustomButton
            title="+ Invite New Worker"
            onPress={() => console.log('Invite worker')}
            style={styles.inviteButton}
          />
        </View>

        <View style={styles.content}>
          {mockWorkers.map((worker) => (
            <View key={worker.id} style={[commonStyles.card, styles.workerCard]}>
              <View style={styles.workerHeader}>
                <View>
                  <Text style={textStyles.subtitle}>{worker.name}</Text>
                  <Text style={textStyles.caption}>{worker.email}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(worker.status) }]}>
                  <Text style={styles.statusText}>{worker.status.toUpperCase()}</Text>
                </View>
              </View>
              
              <View style={styles.skills}>
                {worker.skills.map((skill, index) => (
                  <View key={index} style={styles.skillTag}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
              
              <View style={styles.workerFooter}>
                <Text style={textStyles.caption}>Joined: {worker.joinDate}</Text>
                <View style={styles.actions}>
                  <CustomButton
                    title="Message"
                    onPress={() => console.log('Message worker:', worker.name)}
                    variant="outline"
                    style={styles.actionButton}
                  />
                  <CustomButton
                    title="Manage"
                    onPress={() => console.log('Manage worker:', worker.name)}
                    style={styles.actionButton}
                  />
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
  inviteButton: {
    marginTop: 16,
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
  workerCard: {
    marginBottom: 16,
  },
  workerHeader: {
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
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  skillTag: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  skillText: {
    fontSize: 12,
    color: colors.card,
    fontWeight: '500',
  },
  workerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
