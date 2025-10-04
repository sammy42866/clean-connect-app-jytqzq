
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';

export default function UsersScreen() {
  const mockUsers = [
    {
      id: '1',
      name: 'Alice Brown',
      email: 'alice@email.com',
      role: 'customer',
      joinDate: '2023-08-15',
      status: 'active',
    },
    {
      id: '2',
      name: 'Sparkle Clean Services',
      email: 'info@sparkle.com',
      role: 'business',
      joinDate: '2023-06-10',
      status: 'active',
    },
    {
      id: '3',
      name: 'John Smith',
      email: 'john@email.com',
      role: 'worker',
      joinDate: '2023-07-20',
      status: 'active',
    },
    {
      id: '4',
      name: 'Bob Wilson',
      email: 'bob@email.com',
      role: 'customer',
      joinDate: '2023-09-05',
      status: 'suspended',
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'customer':
        return colors.primary;
      case 'business':
        return colors.accent;
      case 'worker':
        return colors.secondary;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? colors.accent : colors.error;
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>User Management</Text>
          <Text style={textStyles.bodySecondary}>
            Manage all platform users
          </Text>
        </View>

        <View style={styles.content}>
          {mockUsers.map((user) => (
            <View key={user.id} style={[commonStyles.card, styles.userCard]}>
              <View style={styles.userHeader}>
                <View>
                  <Text style={textStyles.subtitle}>{user.name}</Text>
                  <Text style={textStyles.caption}>{user.email}</Text>
                </View>
                <View style={styles.badges}>
                  <View style={[styles.roleBadge, { backgroundColor: getRoleColor(user.role) }]}>
                    <Text style={styles.badgeText}>{user.role.toUpperCase()}</Text>
                  </View>
                  <View style={[styles.statusBadge, { backgroundColor: getStatusColor(user.status) }]}>
                    <Text style={styles.badgeText}>{user.status.toUpperCase()}</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.userDetails}>
                <Text style={textStyles.caption}>Joined: {user.joinDate}</Text>
              </View>
              
              <View style={styles.userActions}>
                <CustomButton
                  title="View Profile"
                  onPress={() => console.log('View profile:', user.name)}
                  variant="outline"
                  style={styles.actionButton}
                />
                <CustomButton
                  title={user.status === 'active' ? 'Suspend' : 'Activate'}
                  onPress={() => console.log('Toggle status:', user.name)}
                  variant={user.status === 'active' ? 'secondary' : 'accent'}
                  style={styles.actionButton}
                />
                <CustomButton
                  title="Message"
                  onPress={() => console.log('Message user:', user.name)}
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
  userCard: {
    marginBottom: 16,
  },
  userHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  badges: {
    alignItems: 'flex-end',
  },
  roleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 10,
    color: colors.card,
    fontWeight: '600',
  },
  userDetails: {
    marginBottom: 12,
  },
  userActions: {
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
